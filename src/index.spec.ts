import { describe, expect, it } from "vitest";

import { MCP_ACCEPT, ORIGIN } from "./catalog-contract";
import { handleRequest, type Env } from "./index";
import { DEV_TOKEN_SIGNING_JWK } from "../test-fixtures/dev-signing";
import { CATALOG_PUBLIC_JWK, signEs256Jwt, verifyEs256Jwt } from "./signing";

const devEnv = {
  ASSETS: { fetch: async () => new Response("missing", { status: 404 }) },
  ENVIRONMENT: "development",
  TOKEN_SIGNING_JWK: DEV_TOKEN_SIGNING_JWK,
} as unknown as Env;
const env = devEnv;
const DEV_SIGNING = { ENVIRONMENT: "development", TOKEN_SIGNING_JWK: DEV_TOKEN_SIGNING_JWK } as const;

function request(path: string, init?: RequestInit): Promise<Response> {
  return handleRequest(new Request(`${ORIGIN}${path}`, init), env);
}

function mcpPost(body: unknown): Promise<Response> {
  return request("/mcp", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: MCP_ACCEPT },
    body: JSON.stringify(body),
  });
}

function decodePayload(token: string): Record<string, unknown> {
  const payload = token.split(".")[1];
  const padded = payload.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (payload.length % 4)) % 4);
  return JSON.parse(Buffer.from(padded, "base64").toString("utf8")) as Record<string, unknown>;
}

function tamperPayload(token: string, patch: Record<string, unknown>): string {
  const [header, payload, signature] = token.split(".");
  const claims = { ...decodePayload(token), ...patch };
  const encoded = Buffer.from(JSON.stringify(claims)).toString("base64url");
  return `${header}.${encoded}.${signature}`;
}
describe("snaptapp-site agent endpoints", () => {
  it("returns CORS headers on OPTIONS for allowed origins and rejects disallowed origins", async () => {
    const allowed = await request("/mcp", { method: "OPTIONS", headers: { Origin: "https://snaptapp.us" } });
    expect(allowed.status).toBe(200);
    expect(allowed.headers.get("Access-Control-Allow-Origin")).toBe("https://snaptapp.us");
    expect(allowed.headers.get("Access-Control-Allow-Origin")).not.toBe("*");
    expect(allowed.headers.get("Vary")).toBe("Origin");

    const disallowed = await request("/mcp", { method: "OPTIONS", headers: { Origin: "https://evil.example" } });
    expect(disallowed.status).toBe(200);
    expect(disallowed.headers.get("Access-Control-Allow-Origin")).toBe("https://snaptapp.us");
    expect(disallowed.headers.get("Access-Control-Allow-Origin")).not.toBe("https://evil.example");

    const fallback = await request("/mcp", { method: "OPTIONS" });
    expect(fallback.status).toBe(200);
    expect(fallback.headers.get("Access-Control-Allow-Origin")).toBe("https://snaptapp.us");
  });

  it("validates request Origin header against allowed origins and localhost", async () => {
    const allowedRes = await handleRequest(
      new Request(`${ORIGIN}/api/health`, { headers: { Origin: "https://moreorless.snaptapp.us" } }),
      devEnv
    );
    expect(allowedRes.headers.get("Access-Control-Allow-Origin")).toBe("https://moreorless.snaptapp.us");
    expect(allowedRes.headers.get("Vary")).toBe("Origin");

    const localhostRes = await handleRequest(
      new Request(`${ORIGIN}/api/health`, { headers: { Origin: "http://localhost:3000" } }),
      devEnv
    );
    expect(localhostRes.headers.get("Access-Control-Allow-Origin")).toBe("http://localhost:3000");

    const ipv6LocalhostRes = await handleRequest(
      new Request(`${ORIGIN}/api/health`, { headers: { Origin: "http://[::1]:3000" } }),
      devEnv
    );
    expect(ipv6LocalhostRes.headers.get("Access-Control-Allow-Origin")).toBe("http://[::1]:3000");

    const disallowedRes = await handleRequest(
      new Request(`${ORIGIN}/api/health`, { headers: { Origin: "https://evil.example" } }),
      devEnv
    );
    expect(disallowedRes.headers.get("Access-Control-Allow-Origin")).toBe("https://snaptapp.us");
    expect(disallowedRes.headers.get("Access-Control-Allow-Origin")).not.toBe("https://evil.example");

    const customEnv = { ...devEnv, CORS_ALLOWED_ORIGINS: "https://custom.app, https://other.app" } as Env;
    const customRes = await handleRequest(
      new Request(`${ORIGIN}/api/health`, { headers: { Origin: "https://custom.app" } }),
      customEnv
    );
    expect(customRes.headers.get("Access-Control-Allow-Origin")).toBe("https://custom.app");
  });

  it("serves health JSON", async () => {
    const response = await request("/api/health");
    expect(response.status).toBe(200);
    const body = (await response.json()) as { status: string; service: string };
    expect(body.status).toBe("ok");
    expect(body.service).toBe("snaptapp-site");
  });

  it("returns an MCP server card on GET /mcp", async () => {
    const response = await request("/mcp");
    expect(response.status).toBe(200);
    const body = (await response.json()) as {
      serverInfo: { name: string; version: string };
      protocolVersion: string;
      transport: { type: string; url: string };
      capabilities: { tools: object };
    };
    expect(body.serverInfo.name).toBe("snaptapp-site");
    expect(body.serverInfo.version).toBe("1.0.0");
    expect(body.protocolVersion).toBe("2025-03-26");
    expect(body.transport.url).toBe(`${ORIGIN}/mcp`);
    expect(body.capabilities.tools).toEqual({});
  });

  it("closes the MCP SSE stream after the comment frame", async () => {
    const response = await request("/mcp", { headers: { Accept: "text/event-stream" } });
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/event-stream");
    const body = await response.text();
    expect(body).toContain("snaptapp-site mcp");
  });

  it("does not open an SSE body for HEAD", async () => {
    const response = await request("/mcp", {
      method: "HEAD",
      headers: { Accept: "text/event-stream" },
    });
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("");
  });

  it("lists and calls MCP tools over JSON-RPC", async () => {
    const listed = await mcpPost({ jsonrpc: "2.0", id: 1, method: "initialize", params: {} });
    expect(listed.status).toBe(200);
    const init = (await listed.json()) as { result: { serverInfo: { name: string } } };
    expect(init.result.serverInfo.name).toBe("snaptapp-site");

    await mcpPost({ jsonrpc: "2.0", method: "notifications/initialized" });

    const tools = await mcpPost({ jsonrpc: "2.0", id: 2, method: "tools/list" });
    const toolBody = (await tools.json()) as { result: { tools: { name: string }[] } };
    const names = toolBody.result.tools.map((tool) => tool.name);
    expect(names).toEqual([
      "get_studio_overview",
      "list_products",
      "get_contact_channels",
      "get_discovery_documents",
    ]);

    const called = await mcpPost({
      jsonrpc: "2.0",
      id: 3,
      method: "tools/call",
      params: { name: "list_products", arguments: {} },
    });
    const callBody = (await called.json()) as {
      result: { structuredContent: { products: { name: string }[] } };
    };
    expect(callBody.result.structuredContent.products[0]?.name).toBe("More or Less");
  });

  it("rejects MCP POST without Accept listing JSON and SSE", async () => {
    const missing = await request("/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "ping" }),
    });
    expect(missing.status).toBe(406);

    const jsonOnly = await request("/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "ping" }),
    });
    expect(jsonOnly.status).toBe(406);

    const sseOnly = await request("/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
      body: JSON.stringify({ jsonrpc: "2.0", method: "notifications/cancelled" }),
    });
    expect(sseOnly.status).toBe(406);

    const wildcard = await request("/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "*/*" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "ping" }),
    });
    expect(wildcard.status).toBe(406);
  });

  it("HEAD /mcp without SSE Accept returns an empty card probe", async () => {
    const response = await request("/mcp", { method: "HEAD" });
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("application/mcp-server-card+json");
    expect(await response.text()).toBe("");
  });

  it("issues an ES256 catalog token for client_credentials", async () => {
    const response = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "grant_type=client_credentials",
    });
    expect(response.status).toBe(200);
    const body = (await response.json()) as { token_type: string; access_token: string; scope: string };
    expect(body.token_type).toBe("Bearer");
    expect(body.access_token.split(".")).toHaveLength(3);
    expect(body.scope).toContain("catalog.read");

    const claims = await verifyEs256Jwt(body.access_token, CATALOG_PUBLIC_JWK);
    expect(claims).not.toBeNull();
    expect(claims?.iss).toBe(ORIGIN);
    expect(claims?.token_use).toBe("access");
    expect(claims?.token_class).toBe("catalog_hint");
    expect(claims?.client_authenticated).toBe(false);
    expect(claims?.sub).toBe("client:public");
    expect(claims?.aud).toBe(ORIGIN);
  });

  it("registers an anonymous agent identity as signed JWTs", async () => {
    const response = await request("/agent/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "anonymous" }),
    });
    expect(response.status).toBe(200);
    const body = (await response.json()) as {
      identity_type: string;
      identity_assertion: string;
      claim_token: string;
    };
    expect(body.identity_type).toBe("anonymous");
    expect(body.identity_assertion.split(".")).toHaveLength(3);
    expect(body.claim_token.split(".")).toHaveLength(3);

    const assertion = await verifyEs256Jwt(body.identity_assertion, CATALOG_PUBLIC_JWK);
    expect(assertion?.iss).toBe(ORIGIN);
    expect(assertion?.token_use).toBe("identity_assertion");
    expect(assertion?.token_class).toBeUndefined();
    expect(assertion?.client_authenticated).toBeUndefined();

    const claim = await verifyEs256Jwt(body.claim_token, CATALOG_PUBLIC_JWK);
    expect(claim?.token_use).toBe("claim");
    expect(claim?.sub).toBe(assertion?.sub);
    expect(claim?.token_class).toBeUndefined();
  });

  it("exchanges a signed identity assertion via jwt-bearer", async () => {
    const registered = await request("/agent/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "anonymous" }),
    });
    const identity = (await registered.json()) as { identity_assertion: string };
    const response = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: identity.identity_assertion,
      }),
    });
    expect(response.status).toBe(200);
    const body = (await response.json()) as { access_token: string };
    const claims = await verifyEs256Jwt(body.access_token, CATALOG_PUBLIC_JWK);
    expect(claims?.token_use).toBe("access");
    expect(claims?.token_class).toBe("catalog_hint");
    expect(claims?.client_authenticated).toBe(false);
    expect(claims?.sub).toBe(decodePayload(identity.identity_assertion).sub);
  });

  it("treats service_auth identity as an anonymous alias", async () => {
    const response = await request("/agent/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "service_auth" }),
    });
    expect(response.status).toBe(200);
    const body = (await response.json()) as {
      identity_type: string;
      identity_assertion: string;
      claim_token: string;
    };
    expect(body.identity_type).toBe("anonymous");
    expect(body.identity_assertion.split(".")).toHaveLength(3);
    expect(body.claim_token.split(".")).toHaveLength(3);

    const assertion = await verifyEs256Jwt(body.identity_assertion, CATALOG_PUBLIC_JWK);
    expect(assertion?.token_use).toBe("identity_assertion");
    expect(assertion?.identity_type).toBe("anonymous");
  });

  it("rejects unsigned and tampered jwt-bearer assertions", async () => {
    const unsigned = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: `sat.${Buffer.from(JSON.stringify({ iss: ORIGIN, sub: "forged", exp: 9999999999 })).toString("base64url")}`,
      }),
    });
    expect(unsigned.status).toBe(400);

    const registered = await request("/agent/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "anonymous" }),
    });
    const identity = (await registered.json()) as { identity_assertion: string };
    const tampered = tamperPayload(identity.identity_assertion, { sub: "attacker" });
    const forged = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: tampered,
      }),
    });
    expect(forged.status).toBe(400);

    const noneAlg = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: await signEs256Jwt(
          {
            iss: ORIGIN,
            aud: ORIGIN,
            sub: "client:public",
            exp: Math.floor(Date.now() / 1000) + 600,
            token_use: "access",
          },
          DEV_SIGNING
        ),
      }),
    });
    expect(noneAlg.status).toBe(400);
  });

  it("rejects a tampered identity assertion at registration", async () => {
    const registered = await request("/agent/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "anonymous" }),
    });
    const identity = (await registered.json()) as { identity_assertion: string };
    const response = await request("/agent/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "identity_assertion",
        assertion: tamperPayload(identity.identity_assertion, { sub: "attacker" }),
      }),
    });
    expect(response.status).toBe(400);
  });

  it("returns 404 with resource metadata on unknown agent, oauth, and mcp paths", async () => {
    for (const path of ["/agent/unknown", "/oauth/unknown", "/mcp/session"]) {
      const response = await request(path);
      expect(response.status).toBe(404);
      const body = (await response.json()) as { error: string };
      expect(body.error).toBe("not_found");
      expect(response.headers.get("WWW-Authenticate")).toContain("oauth-protected-resource");
    }
  });

  it("acknowledges POST /oauth2/revoke with a token and rejects GET or a missing token", async () => {
    const posted = await request("/oauth2/revoke", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "token=placeholder",
    });
    expect(posted.status).toBe(200);
    const body = (await posted.json()) as { revoked: boolean };
    expect(body.revoked).toBe(true);

    const missing = await request("/oauth2/revoke", { method: "POST" });
    expect(missing.status).toBe(400);

    const gotten = await request("/oauth2/revoke");
    expect(gotten.status).toBe(405);
  });

  it("filters MCP batch notifications and returns 202 for a lone notification", async () => {
    const batch = await mcpPost([
      { jsonrpc: "2.0", method: "notifications/initialized" },
      { jsonrpc: "2.0", id: 9, method: "ping" },
    ]);
    expect(batch.status).toBe(200);
    const results = (await batch.json()) as { id: number; result: unknown }[];
    expect(results).toHaveLength(1);
    expect(results[0]?.id).toBe(9);

    const notify = await mcpPost({ jsonrpc: "2.0", method: "notifications/cancelled" });
    expect(notify.status).toBe(202);
    expect(await notify.text()).toBe("");

    const notifyBatch = await mcpPost([{ jsonrpc: "2.0", method: "notifications/initialized" }]);
    expect(notifyBatch.status).toBe(202);
    expect(await notifyBatch.text()).toBe("");
  });

  it("rejects a null MCP batch member with JSON-RPC invalid request", async () => {
    const response = await mcpPost([null]);
    expect(response.status).toBe(200);
    const body = (await response.json()) as { id: null; error: { code: number; message: string } }[];
    expect(body).toHaveLength(1);
    expect(body[0]?.id).toBeNull();
    expect(body[0]?.error.code).toBe(-32600);
    expect(body[0]?.error.message).toBe("Invalid Request");

    const mixed = await mcpPost([
      null,
      { jsonrpc: "2.0", method: "notifications/initialized" },
      { jsonrpc: "2.0", id: 4, method: "ping" },
    ]);
    expect(mixed.status).toBe(200);
    const mixedBody = (await mixed.json()) as { id: unknown; error?: { code: number } }[];
    expect(mixedBody).toHaveLength(2);
    expect(mixedBody[0]?.error?.code).toBe(-32600);
    expect(mixedBody[1]?.id).toBe(4);
  });

  it("returns plain-text catalog instructions from GET /oauth/authorize", async () => {
    const response = await request("/oauth/authorize");
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/plain");
    const body = await response.text();
    expect(body).toContain("catalog hints");
    expect(body).toContain("moreorless.snaptapp.us");
  });

  it("rejects a jwt-bearer assertion with the wrong audience", async () => {
    const assertion = await signEs256Jwt(
      {
        iss: ORIGIN,
        aud: "https://evil.example",
        sub: "anon:test",
        exp: Math.floor(Date.now() / 1000) + 600,
        token_use: "identity_assertion",
      },
      DEV_SIGNING
    );
    const response = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion,
      }),
    });
    expect(response.status).toBe(400);
  });

  it("keeps claim grants pending for a valid claim token and rejects unsigned claims", async () => {
    const registered = await request("/agent/identity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "anonymous" }),
    });
    const identity = (await registered.json()) as { claim_token: string };
    const pending = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "urn:workos:agent-auth:grant-type:claim",
        claim_token: identity.claim_token,
      }),
    });
    expect(pending.status).toBe(400);
    const pendingBody = (await pending.json()) as { error: string };
    expect(pendingBody.error).toBe("authorization_pending");

    const unsigned = await request("/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "urn:workos:agent-auth:grant-type:claim",
        claim_token: "claim.forged",
      }),
    });
    expect(unsigned.status).toBe(400);
    const unsignedBody = (await unsigned.json()) as { error: string };
    expect(unsignedBody.error).toBe("invalid_grant");
  });

  it("refuses to sign when TOKEN_SIGNING_JWK is missing, even if ENVIRONMENT looks like development", async () => {
    const slipped = {
      ASSETS: devEnv.ASSETS,
      ENVIRONMENT: "development",
    } as Env;
    const token = await handleRequest(
      new Request(`${ORIGIN}/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=client_credentials",
      }),
      slipped
    );
    expect(token.status).toBe(500);
    const tokenBody = (await token.json()) as { error: string };
    expect(tokenBody.error).toBe("server_error");

    const jwks = await handleRequest(new Request(`${ORIGIN}/.well-known/jwks.json`), slipped);
    expect(jwks.status).toBe(500);
  });

  it("refuses to sign in production without TOKEN_SIGNING_JWK", async () => {
    const prod = {
      ASSETS: devEnv.ASSETS,
      ENVIRONMENT: "production",
      ALLOW_DEV_SIGNING_KEY: "true",
    } as Env;
    const token = await handleRequest(
      new Request(`${ORIGIN}/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=client_credentials",
      }),
      prod
    );
    expect(token.status).toBe(500);
    const tokenBody = (await token.json()) as { error: string };
    expect(tokenBody.error).toBe("server_error");

    const identity = await handleRequest(
      new Request(`${ORIGIN}/agent/identity`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "anonymous" }),
      }),
      prod
    );
    expect(identity.status).toBe(500);

    const jwks = await handleRequest(new Request(`${ORIGIN}/.well-known/jwks.json`), prod);
    expect(jwks.status).toBe(500);
  });

  it("refuses the documented local development key when ENVIRONMENT is production", async () => {
    const prod = {
      ...devEnv,
      ENVIRONMENT: "production",
      TOKEN_SIGNING_JWK: DEV_TOKEN_SIGNING_JWK,
    } as Env;
    const token = await handleRequest(
      new Request(`${ORIGIN}/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=client_credentials",
      }),
      prod
    );
    expect(token.status).toBe(500);
    const jwks = await handleRequest(new Request(`${ORIGIN}/.well-known/jwks.json`), prod);
    expect(jwks.status).toBe(500);
  });

  it("signs production tokens with TOKEN_SIGNING_JWK, not the committed development key", async () => {
    const pair = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
    const privateJwk = await crypto.subtle.exportKey("jwk", pair.privateKey);
    const publicJwk = await crypto.subtle.exportKey("jwk", pair.publicKey);
    const prod = {
      ...devEnv,
      ENVIRONMENT: "production",
      TOKEN_SIGNING_JWK: JSON.stringify(privateJwk),
    } as Env;

    const response = await handleRequest(
      new Request(`${ORIGIN}/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=client_credentials",
      }),
      prod
    );
    expect(response.status).toBe(200);
    const body = (await response.json()) as { access_token: string };
    const withProd = await verifyEs256Jwt(body.access_token, publicJwk);
    expect(withProd?.token_use).toBe("access");
    expect(await verifyEs256Jwt(body.access_token, CATALOG_PUBLIC_JWK)).toBeNull();

    const jwks = await handleRequest(new Request(`${ORIGIN}/.well-known/jwks.json`), prod);
    const jwksBody = (await jwks.json()) as { keys: { x?: string; y?: string }[] };
    expect(jwksBody.keys[0]?.x).toBe(publicJwk.x);
    expect(jwksBody.keys[0]?.y).toBe(publicJwk.y);
  });

  it("returns generic 500 JSON response on runtime error without leaking stack traces", async () => {
    const invalidKeyEnv = {
      ...devEnv,
      TOKEN_SIGNING_JWK: '{"kty":"EC","crv":"P-256","d":"invalid-key-structure"}',
    } as Env;
    const response = await handleRequest(
      new Request(`${ORIGIN}/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "grant_type=client_credentials",
      }),
      invalidKeyEnv
    );
    expect(response.status).toBe(500);
    const body = (await response.json()) as { error: string; error_description: string };
    expect(body.error).toBe("server_error");
    expect(body.error_description).toBe("An internal error occurred.");
  });

  it("delegates unmatched paths to the Asset Worker", async () => {
    const assetsEnv = {
      ...devEnv,
      ASSETS: {
        fetch: async (request: Request) =>
          new Response(`asset:${new URL(request.url).pathname}`, {
            status: 200,
            headers: { "Content-Type": "text/plain" },
          }),
      },
    } as unknown as Env;
    const response = await handleRequest(new Request(`${ORIGIN}/company/`), assetsEnv);
    expect(response.status).toBe(200);
    expect(await response.text()).toBe("asset:/company/");
  });
});
