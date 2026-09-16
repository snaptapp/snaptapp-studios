/**
 * ES256 JWT helpers for catalog tokens and identity assertions.
 *
 * This module does not contain a private key. TOKEN_SIGNING_JWK is always
 * required. wrangler.jsonc sets ENVIRONMENT=production; a documented local
 * example key is rejected outside development/dev/test. Leftover vars such as
 * ALLOW_DEV_SIGNING_KEY are ignored.
 */

export const SIGNING_KID = "snaptapp-2026";
export const SIGNING_ALG = "ES256";

/** Public half of the local wrangler example key (static JWKS + Vitest). */
export const CATALOG_PUBLIC_JWK = {
  kty: "EC",
  crv: "P-256",
  x: "EKwf4qzj23PBOgwnL7K0BcNc9QqV1zJlXS3L9VIn1ik",
  y: "J4a6QWRlw7MAtuQFaLzsPx5qK59rAQfG-bxHz8S6040",
  kid: SIGNING_KID,
  use: "sig",
  alg: SIGNING_ALG,
} as const;

export type SigningEnv = {
  TOKEN_SIGNING_JWK?: string;
  ENVIRONMENT?: string;
};

export type JwtClaims = Record<string, unknown>;

export class SigningConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SigningConfigurationError";
  }
}

export function isDevSigningEnvironment(env: SigningEnv): boolean {
  const environment = String(env.ENVIRONMENT ?? "").toLowerCase();
  return environment === "development" || environment === "dev" || environment === "test";
}

function matchesDocumentedLocalPublicKey(jwk: JsonWebKey): boolean {
  return jwk.x === CATALOG_PUBLIC_JWK.x && jwk.y === CATALOG_PUBLIC_JWK.y;
}

function parseSecretJwk(raw: string): JsonWebKey {
  let parsed: JsonWebKey;
  try {
    parsed = JSON.parse(raw) as JsonWebKey;
  } catch {
    throw new SigningConfigurationError("TOKEN_SIGNING_JWK must be valid JSON.");
  }
  if (parsed.kty !== "EC" || parsed.crv !== "P-256" || !parsed.d) {
    throw new SigningConfigurationError("TOKEN_SIGNING_JWK must be an EC P-256 private JWK.");
  }
  return parsed;
}

export function resolvePrivateJwk(env: SigningEnv): JsonWebKey {
  const raw = env.TOKEN_SIGNING_JWK?.trim();
  if (!raw) {
    throw new SigningConfigurationError(
      "TOKEN_SIGNING_JWK is required. This Worker does not ship a private key."
    );
  }
  const parsed = parseSecretJwk(raw);
  if (!isDevSigningEnvironment(env) && matchesDocumentedLocalPublicKey(parsed)) {
    throw new SigningConfigurationError(
      "TOKEN_SIGNING_JWK must not be the documented local development key outside development."
    );
  }
  return parsed;
}

export function signingPublicJwk(env: SigningEnv): JsonWebKey {
  const priv = resolvePrivateJwk(env);
  return {
    kty: priv.kty,
    crv: priv.crv,
    x: priv.x,
    y: priv.y,
    kid: priv.kid ?? SIGNING_KID,
    use: "sig",
    alg: SIGNING_ALG,
  };
}

function b64urlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(input: string): Uint8Array {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (input.length % 4)) % 4);
  const binary = atob(padded);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i);
  return out;
}

function encodeJson(value: unknown): string {
  return b64urlEncode(new TextEncoder().encode(JSON.stringify(value)));
}

async function importPrivateKey(jwk: JsonWebKey): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "jwk",
    { ...jwk, key_ops: ["sign"], ext: true },
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign"]
  );
}

async function importPublicKey(jwk: JsonWebKey = CATALOG_PUBLIC_JWK): Promise<CryptoKey> {
  const { d: _d, key_ops: _ops, ...pub } = jwk as JsonWebKey & { d?: string };
  return crypto.subtle.importKey(
    "jwk",
    { ...pub, key_ops: ["verify"], ext: true, use: "sig", alg: SIGNING_ALG },
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["verify"]
  );
}

export async function signEs256Jwt(payload: JwtClaims, env: SigningEnv): Promise<string> {
  const jwk = resolvePrivateJwk(env);
  const header = { alg: SIGNING_ALG, typ: "JWT", kid: jwk.kid ?? SIGNING_KID };
  const signingInput = `${encodeJson(header)}.${encodeJson(payload)}`;
  const key = await importPrivateKey(jwk);
  const signature = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    key,
    new TextEncoder().encode(signingInput)
  );
  return `${signingInput}.${b64urlEncode(new Uint8Array(signature))}`;
}

export async function verifyEs256Jwt(token: string, publicJwk: JsonWebKey = CATALOG_PUBLIC_JWK): Promise<JwtClaims | null> {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [headerPart, payloadPart, signaturePart] = parts;
  try {
    const header = JSON.parse(new TextDecoder().decode(b64urlDecode(headerPart))) as { alg?: string };
    if (header.alg !== SIGNING_ALG) return null;
    const key = await importPublicKey(publicJwk);
    const ok = await crypto.subtle.verify(
      { name: "ECDSA", hash: "SHA-256" },
      key,
      b64urlDecode(signaturePart),
      new TextEncoder().encode(`${headerPart}.${payloadPart}`)
    );
    if (!ok) return null;
    const claims = JSON.parse(new TextDecoder().decode(b64urlDecode(payloadPart))) as JwtClaims;
    const exp = Number(claims.exp);
    if (!Number.isFinite(exp) || exp <= Math.floor(Date.now() / 1000)) return null;
    return claims;
  } catch {
    return null;
  }
}
