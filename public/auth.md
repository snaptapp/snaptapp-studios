# auth.md

You are an agent. Snaptapp publishes a **catalog-only** registration surface: discover, optionally register, optionally start a human claim, exchange for a scoped access token, then call public studio APIs. This is not a general-purpose OAuth or OIDC login for people, and it is not valid for More or Less player APIs.

The studio homepage, API catalog, health endpoint, and MCP tools on `https://snaptapp.us` are public. A token is optional for `catalog.read` and `mcp.invoke`. Player APIs for More or Less live on a separate origin and use Firebase ID tokens.

## What this server does not do

- No authorization-code flow, PKCE, or browser login. `GET /oauth/authorize` returns plain-text instructions.
- No OpenID ID tokens. Discovery JSON exists so agents can find `token_endpoint` and `jwks_uri`. Catalog tokens are ES256 access JWTs, not `id_token`s.
- No client secrets. Token endpoint auth method is `none`.
- No third-party ID-JAG federation. `type=identity_assertion` only accepts an ES256 identity JWT previously issued by this server.
- No verified-email identity type. `type=service_auth` is an alias for anonymous registration plus a `claim_token`.
- No revocation denylist or event stream. `POST /oauth2/revoke` acknowledges and does nothing else. Access tokens expire in one hour.

## Audience

- Resource: `https://snaptapp.us` (use this as `aud` on access tokens)
- Authorization server: `https://snaptapp.us`
- Human contact: `hello@snaptapp.us`

## Step 1. Discover

### 1a. Fetch Protected Resource Metadata

```http
GET https://snaptapp.us/.well-known/oauth-protected-resource
```

Fields:

- `resource`: canonical resource identifier. Use this as `aud`.
- `authorization_servers`: `https://snaptapp.us`
- `scopes_supported`: `catalog.read`, `mcp.invoke`
- `bearer_methods_supported`: `header`

### 1b. Fetch Authorization Server metadata

```http
GET https://snaptapp.us/.well-known/oauth-authorization-server
```

The `agent_auth` block lists `register_uri`, identity types, and claim/revocation URLs.

OpenID Connect discovery is also published at `https://snaptapp.us/.well-known/openid-configuration`. It describes the same catalog token endpoint. It does not mean this host is a full OIDC provider.

## Step 2. Register

```http
POST https://snaptapp.us/agent/identity
Content-Type: application/json
```

### Anonymous (supported)

```json
{ "type": "anonymous" }
```

Response includes `identity_assertion`, `claim_token`, and `scopes`. Both tokens are ES256 JWTs (`header.payload.signature`). Verify them with `GET https://snaptapp.us/.well-known/jwks.json`. Exchange the assertion at the token endpoint with `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer`. Catalog APIs stay callable without this step.

### Service auth (anonymous alias)

```json
{ "type": "service_auth" }
```

This is the same as anonymous registration plus a `claim_token`. The response still has `identity_type: "anonymous"`. Email is not verified. Discovery lists `service_auth` in `agent_auth.identity_types_supported` with `alias_of: "anonymous"`.

### Identity assertion (this issuer only)

```json
{
  "type": "identity_assertion",
  "assertion": "<ES256 identity JWT issued by https://snaptapp.us>"
}
```

The assertion must verify against this server's JWKS, with `token_use=identity_assertion`. Unsigned, tampered, wrong-audience, or third-party JWTs are rejected.

### Human claim (optional, not automated)

Anonymous registration also returns a `claim_token`. Email `hello@snaptapp.us` if a human needs to bind that agent identity. `POST /agent/identity/claim` and the claim grant stay `authorization_pending` until that happens. Catalog APIs do not require a completed claim.

## Step 3. Token

```http
POST https://snaptapp.us/oauth2/token
Content-Type: application/x-www-form-urlencoded
```

Supported grants:

- `grant_type=client_credentials` (public catalog). `client_id` is copied into `sub` as `client:<id>` and is **not authenticated**. The JWT has `token_class=catalog_hint` and `client_authenticated=false`. Do not treat `sub` as proof of who the caller is.
- `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer` with `assertion` set to a valid identity JWT from this server
- `grant_type=urn:workos:agent-auth:grant-type:claim` with a valid `claim_token` (currently always `authorization_pending`)

Access tokens are ES256 JWTs (`token_use=access`, `token_class=catalog_hint`, `aud=https://snaptapp.us`, scopes `catalog.read` and `mcp.invoke`). Send them as `Authorization: Bearer …`. They are unauthenticated hints for catalog and MCP callers on this origin only. They are not credentials for `moreorless.snaptapp.us` or any other host. Do not accept them as login, session, or player identity. Unsigned or tampered assertions are rejected.

## Step 4. Call APIs

- Health: `GET https://snaptapp.us/api/health`
- OpenAPI: `GET https://snaptapp.us/openapi.json`
- MCP Streamable HTTP: `POST https://snaptapp.us/mcp` with `Accept: application/json, text/event-stream` (406 otherwise). `HEAD /mcp` is an empty probe.
- Human docs: `https://snaptapp.us/docs/api/`

MCP tools on this origin do not require a bearer token today.

## Revocation

```http
POST https://snaptapp.us/oauth2/revoke
Content-Type: application/x-www-form-urlencoded

token=<access_token>
```

This endpoint requires POST and a `token` field. It returns `{ "revoked": true }` and does not persist a denylist. Discard the JWT or wait for `exp`.

## More or Less player APIs

Party rooms, trivia generation, and disputes are **not** this resource. They authenticate with Firebase ID tokens issued for the More or Less Firebase project. Play the game at `https://moreorless.snaptapp.us`.
