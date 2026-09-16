import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { DEV_TOKEN_SIGNING_JWK } from "../test-fixtures/dev-signing";
import {
  CATALOG_PUBLIC_JWK,
  SIGNING_ALG,
  SIGNING_KID,
  SigningConfigurationError,
  isDevSigningEnvironment,
  resolvePrivateJwk,
  signEs256Jwt,
  verifyEs256Jwt,
} from "./signing";

const DEV = { ENVIRONMENT: "development", TOKEN_SIGNING_JWK: DEV_TOKEN_SIGNING_JWK } as const;
const signingSrc = readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "signing.ts"), "utf8");
const workerSrc = readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "index.ts"), "utf8");

describe("ES256 JWT helpers", () => {
  it("does not ship a private JWK in the Worker modules", () => {
    expect(signingSrc).not.toContain("Ky49xwYDBUaowPDKYBPNy8eOwKmnJBnJpj4DdDtYpL4");
    expect(workerSrc).not.toContain("Ky49xwYDBUaowPDKYBPNy8eOwKmnJBnJpj4DdDtYpL4");
    expect(signingSrc).not.toMatch(/DEV_PRIVATE_JWK/);
  });

  it("signs a three-part JWT that verifies against the published JWK", async () => {
    const exp = Math.floor(Date.now() / 1000) + 60;
    const token = await signEs256Jwt({ iss: "https://snaptapp.us", sub: "test", exp, token_use: "access" }, DEV);
    expect(token.split(".")).toHaveLength(3);

    const header = JSON.parse(Buffer.from(token.split(".")[0], "base64url").toString("utf8")) as {
      alg: string;
      kid: string;
    };
    expect(header.alg).toBe(SIGNING_ALG);
    expect(header.kid).toBe(SIGNING_KID);

    const claims = await verifyEs256Jwt(token, CATALOG_PUBLIC_JWK);
    expect(claims?.sub).toBe("test");
  });

  it("rejects a tampered payload and alg=none", async () => {
    const exp = Math.floor(Date.now() / 1000) + 60;
    const token = await signEs256Jwt({ iss: "https://snaptapp.us", sub: "test", exp }, DEV);
    const [header, payload, signature] = token.split(".");
    const patched = Buffer.from(JSON.stringify({ iss: "https://snaptapp.us", sub: "attacker", exp })).toString(
      "base64url"
    );
    expect(await verifyEs256Jwt(`${header}.${patched}.${signature}`, CATALOG_PUBLIC_JWK)).toBeNull();

    const noneHeader = Buffer.from(JSON.stringify({ alg: "none", typ: "JWT" })).toString("base64url");
    expect(await verifyEs256Jwt(`${noneHeader}.${payload}.`, CATALOG_PUBLIC_JWK)).toBeNull();
    expect(await verifyEs256Jwt("sat.not-a-jwt", CATALOG_PUBLIC_JWK)).toBeNull();
  });

  it("requires TOKEN_SIGNING_JWK in every environment and rejects the local example key in production", () => {
    expect(isDevSigningEnvironment(DEV)).toBe(true);
    expect(isDevSigningEnvironment({ ENVIRONMENT: "production" })).toBe(false);
    expect(isDevSigningEnvironment({})).toBe(false);

    const leftoverOverride = { ENVIRONMENT: "production", ALLOW_DEV_SIGNING_KEY: "true" };
    expect(isDevSigningEnvironment(leftoverOverride)).toBe(false);

    const devKey = resolvePrivateJwk(DEV);
    expect(devKey.d).toBeTruthy();
    expect(devKey.x).toBe(CATALOG_PUBLIC_JWK.x);

    expect(() => resolvePrivateJwk({ ENVIRONMENT: "development" })).toThrow(SigningConfigurationError);
    expect(() => resolvePrivateJwk({ ENVIRONMENT: "production" })).toThrow(SigningConfigurationError);
    expect(() => resolvePrivateJwk(leftoverOverride)).toThrow(SigningConfigurationError);
    expect(() =>
      resolvePrivateJwk({ ENVIRONMENT: "production", TOKEN_SIGNING_JWK: DEV_TOKEN_SIGNING_JWK })
    ).toThrow(SigningConfigurationError);
    expect(() => resolvePrivateJwk({ ENVIRONMENT: "production", TOKEN_SIGNING_JWK: "{not-json" })).toThrow(
      SigningConfigurationError
    );
    expect(() => resolvePrivateJwk({ ENVIRONMENT: "development", TOKEN_SIGNING_JWK: '{"kty":"oct"}' })).toThrow(
      SigningConfigurationError
    );
  });
});
