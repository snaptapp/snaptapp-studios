/**
 * Single source of truth for snaptapp.us catalog OAuth, MCP Accept, and
 * agent-auth semantics. Static well-known JSON and OpenAPI must match these
 * values (see discovery.spec.ts).
 */

import { SIGNING_ALG } from "./signing.server";

export const ORIGIN = "https://snaptapp.us";

export const SCOPES = ["catalog.read", "mcp.invoke"] as const;
export const CATALOG_SCOPE = SCOPES.join(" ");

export const GRANT_CLIENT_CREDENTIALS = "client_credentials";
export const GRANT_JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
export const GRANT_CLAIM = "urn:workos:agent-auth:grant-type:claim";
export const GRANT_TYPES = [GRANT_CLIENT_CREDENTIALS, GRANT_JWT_BEARER, GRANT_CLAIM] as const;

export const IDENTITY_ANONYMOUS = "anonymous";
export const IDENTITY_SERVICE_AUTH = "service_auth";
export const IDENTITY_ASSERTION = "identity_assertion";
export const IDENTITY_TYPES = [IDENTITY_ANONYMOUS, IDENTITY_SERVICE_AUTH, IDENTITY_ASSERTION] as const;

export const TOKEN_CLASS = "catalog_hint";
export const CLIENT_AUTHENTICATED = false;
export const ACCESS_TOKEN_USE = "access";
export const IDENTITY_TOKEN_USE = "identity_assertion";
export const CLAIM_TOKEN_USE = "claim";
export const ACCESS_TOKEN_TTL_SEC = 3600;

export const TOKEN_ENDPOINT_AUTH_METHODS = ["none"] as const;
export const RESPONSE_TYPES: string[] = [];
export const BEARER_METHODS = ["header"] as const;
export const MCP_ACCEPT = "application/json, text/event-stream";

export const ACCESS_TOKEN_NOTE =
  "Tokens are unauthenticated catalog and MCP hints. They are not player identities.";

export function catalogUrls(origin = ORIGIN) {
  return {
    authorize: `${origin}/oauth/authorize`,
    token: `${origin}/oauth2/token`,
    jwks: `${origin}/.well-known/jwks.json`,
    revoke: `${origin}/oauth2/revoke`,
    identity: `${origin}/agent/identity`,
    claim: `${origin}/agent/identity/claim`,
    authMd: `${origin}/auth.md`,
    terms: `${origin}/legal/terms/`,
    privacy: `${origin}/legal/privacy/`,
    docs: `${origin}/docs/api/`,
  };
}

export function oauthAuthorizationServer(origin = ORIGIN) {
  const urls = catalogUrls(origin);
  return {
    issuer: origin,
    authorization_endpoint: urls.authorize,
    token_endpoint: urls.token,
    jwks_uri: urls.jwks,
    revocation_endpoint: urls.revoke,
    registration_endpoint: urls.identity,
    grant_types_supported: [...GRANT_TYPES],
    response_types_supported: [...RESPONSE_TYPES],
    token_endpoint_auth_methods_supported: [...TOKEN_ENDPOINT_AUTH_METHODS],
    scopes_supported: [...SCOPES],
    service_documentation: urls.authMd,
    op_tos_uri: urls.terms,
    op_policy_uri: urls.privacy,
    resource: origin,
    authorization_servers: [origin],
    bearer_methods_supported: [...BEARER_METHODS],
    agent_auth: {
      skill: urls.authMd,
      register_uri: urls.identity,
      identity_endpoint: urls.identity,
      claim_uri: urls.claim,
      claim_endpoint: urls.claim,
      revocation_uri: urls.revoke,
      revocation: {
        mode: "noop",
        note: "POST /oauth2/revoke acknowledges a token. Catalog JWTs are not persisted or denylisted.",
      },
      identity_types_supported: [...IDENTITY_TYPES],
      identity_assertion: {
        assertion_types_supported: ["urn:ietf:params:oauth:token-type:jwt"],
        credential_types_supported: ["access_token"],
        signing_alg_values_supported: [SIGNING_ALG],
        token_use: IDENTITY_TOKEN_USE,
      },
      anonymous: {
        credential_types_supported: ["access_token"],
        claim_uri: urls.claim,
      },
      service_auth: {
        alias_of: IDENTITY_ANONYMOUS,
        note: "Same as anonymous registration plus a claim_token. Email is not verified.",
      },
      access_tokens: {
        token_class: TOKEN_CLASS,
        client_authenticated: CLIENT_AUTHENTICATED,
        note: ACCESS_TOKEN_NOTE,
      },
    },
  };
}

export function openidConfiguration(origin = ORIGIN) {
  const urls = catalogUrls(origin);
  return {
    issuer: origin,
    authorization_endpoint: urls.authorize,
    token_endpoint: urls.token,
    jwks_uri: urls.jwks,
    revocation_endpoint: urls.revoke,
    registration_endpoint: urls.identity,
    grant_types_supported: [...GRANT_TYPES],
    response_types_supported: [...RESPONSE_TYPES],
    token_endpoint_auth_methods_supported: [...TOKEN_ENDPOINT_AUTH_METHODS],
    scopes_supported: [...SCOPES],
    subject_types_supported: ["public"],
    service_documentation: urls.authMd,
    ui_locales_supported: ["en-US"],
  };
}

export function oauthProtectedResource(origin = ORIGIN) {
  const urls = catalogUrls(origin);
  return {
    resource: origin,
    resource_name: "Snaptapp",
    resource_documentation: urls.docs,
    authorization_servers: [origin],
    scopes_supported: [...SCOPES],
    bearer_methods_supported: [...BEARER_METHODS],
    resource_signing_alg_values_supported: [SIGNING_ALG],
    token_class: TOKEN_CLASS,
    client_authenticated: CLIENT_AUTHENTICATED,
  };
}
