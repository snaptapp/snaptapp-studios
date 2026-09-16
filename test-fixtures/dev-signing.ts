import { CATALOG_PUBLIC_JWK, SIGNING_ALG, SIGNING_KID } from "../src/signing";

/**
 * Local wrangler / Vitest fixture only. The Worker entry must not import this
 * module: a mis-set ENVIRONMENT on a deployed Worker must not find a private key.
 */
export const DEV_PRIVATE_JWK: JsonWebKey = {
  kty: "EC",
  crv: "P-256",
  x: CATALOG_PUBLIC_JWK.x,
  y: CATALOG_PUBLIC_JWK.y,
  d: "Ky49xwYDBUaowPDKYBPNy8eOwKmnJBnJpj4DdDtYpL4",
  kid: SIGNING_KID,
  use: "sig",
  alg: SIGNING_ALG,
  key_ops: ["sign"],
};

export const DEV_TOKEN_SIGNING_JWK = JSON.stringify(DEV_PRIVATE_JWK);
