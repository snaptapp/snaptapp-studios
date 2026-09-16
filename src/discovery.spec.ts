import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { DEV_TOKEN_SIGNING_JWK } from "../test-fixtures/dev-signing";
import {
  GRANT_TYPES,
  IDENTITY_ANONYMOUS,
  IDENTITY_TYPES,
  MCP_ACCEPT,
  ORIGIN,
  TOKEN_CLASS,
  oauthAuthorizationServer,
  oauthProtectedResource,
  openidConfiguration,
} from "./catalog-contract";
import { handleRequest, type Env } from "./index";
import { CATALOG_PUBLIC_JWK, SIGNING_ALG, SIGNING_KID } from "./signing";

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");
const env = {
  ASSETS: { fetch: async () => new Response("missing", { status: 404 }) },
  ENVIRONMENT: "development",
  TOKEN_SIGNING_JWK: DEV_TOKEN_SIGNING_JWK,
} as unknown as Env;

const WORKER_PATHS = new Set([
  "/api/health",
  "/mcp",
  "/oauth/authorize",
  "/oauth2/token",
  "/oauth2/revoke",
  "/agent/identity",
  "/.well-known/jwks.json",
]);

function readPublicJson(relPath: string): unknown {
  return JSON.parse(readFileSync(path.join(publicDir, relPath), "utf8"));
}

function sha256File(absPath: string): string {
  return `sha256:${createHash("sha256").update(readFileSync(absPath)).digest("hex")}`;
}

function originPath(url: string): string {
  return new URL(url, ORIGIN).pathname;
}

function publicPath(urlPath: string): string {
  return path.join(publicDir, urlPath.replace(/^\//, ""));
}

function publicFileExists(urlPath: string): boolean {
  const trimmed = urlPath.replace(/\/+$/, "") || "/";
  const candidates = [
    publicPath(urlPath),
    path.join(publicPath(urlPath), "index.html"),
    publicPath(trimmed),
    path.join(publicPath(trimmed), "index.html"),
  ];
  return candidates.some((file) => existsSync(file));
}

function hrefIsImplemented(href: string): boolean {
  const pathname = originPath(href);
  if (WORKER_PATHS.has(pathname)) return true;
  return publicFileExists(pathname);
}

describe("discovery contract", () => {
  it("keeps the static JWKS aligned with the development public JWK", () => {
    const jwks = readPublicJson(".well-known/jwks.json") as { keys: typeof CATALOG_PUBLIC_JWK[] };
    expect(jwks.keys).toHaveLength(1);
    expect(jwks.keys[0]).toMatchObject({
      kty: CATALOG_PUBLIC_JWK.kty,
      crv: CATALOG_PUBLIC_JWK.crv,
      x: CATALOG_PUBLIC_JWK.x,
      y: CATALOG_PUBLIC_JWK.y,
      kid: SIGNING_KID,
      alg: SIGNING_ALG,
    });
  });

  it("matches GET /mcp to the published server card", async () => {
    const response = await handleRequest(new Request(`${ORIGIN}/mcp`), env);
    const live = (await response.json()) as Record<string, unknown>;
    const published = readPublicJson(".well-known/mcp/server-card.json") as Record<string, unknown>;
    expect(live.serverInfo).toEqual(published.serverInfo);
    expect(live.protocolVersion).toBe(published.protocolVersion);
    expect(live.transport).toEqual(published.transport);
    expect(live.capabilities).toEqual(published.capabilities);
    expect(live.description).toBe(published.description);
    expect(live.$schema).toBe(published.$schema);
  });

  it("keeps well-known OAuth JSON and OpenAPI aligned with the catalog contract", async () => {
    expect(readPublicJson(".well-known/oauth-authorization-server")).toEqual(oauthAuthorizationServer());
    expect(readPublicJson(".well-known/openid-configuration")).toEqual(openidConfiguration());
    expect(readPublicJson(".well-known/oauth-protected-resource")).toEqual(oauthProtectedResource());

    const liveJwks = await handleRequest(new Request(`${ORIGIN}/.well-known/jwks.json`), env);
    const live = (await liveJwks.json()) as { keys: { x?: string; y?: string }[] };
    expect(live.keys[0]?.x).toBe(CATALOG_PUBLIC_JWK.x);
    expect(live.keys[0]?.y).toBe(CATALOG_PUBLIC_JWK.y);

    const openapi = readPublicJson("openapi.json") as {
      servers: { url: string }[];
      paths: {
        "/oauth2/token": {
          post: {
            requestBody: {
              content: { "application/x-www-form-urlencoded": { schema: { properties: { grant_type: { enum: string[] } } } } };
            };
          };
        };
        "/agent/identity": {
          post: {
            requestBody: {
              content: { "application/json": { schema: { properties: { type: { enum: string[] } } } } };
            };
          };
        };
      };
    };
    expect(openapi.servers[0]?.url).toBe(ORIGIN);
    expect(openapi.paths["/oauth2/token"].post.requestBody.content["application/x-www-form-urlencoded"].schema.properties.grant_type.enum).toEqual([...GRANT_TYPES]);
    expect(openapi.paths["/agent/identity"].post.requestBody.content["application/json"].schema.properties.type.enum).toEqual([...IDENTITY_TYPES]);

    const authMd = readFileSync(path.join(publicDir, "auth.md"), "utf8");
    expect(authMd).toContain(TOKEN_CLASS);
    expect(authMd).toContain(`alias_of: "${IDENTITY_ANONYMOUS}"`);
    for (const identityType of IDENTITY_TYPES) {
      expect(authMd).toContain(identityType);
    }
  });

  it("resolves API catalog, ARD, OpenAPI, and skill hrefs to files or Worker routes", async () => {
    const catalog = readPublicJson(".well-known/api-catalog") as {
      linkset: { [rel: string]: { href: string }[] | string }[];
    };
    const hrefs: string[] = [];
    for (const item of catalog.linkset) {
      for (const value of Object.values(item)) {
        if (typeof value === "string" && value.startsWith("http")) hrefs.push(value);
        if (Array.isArray(value)) {
          for (const link of value) {
            if (link && typeof link === "object" && "href" in link) hrefs.push(link.href);
          }
        }
      }
    }

    const ard = readPublicJson(".well-known/ai-catalog.json") as { entries: { url: string }[] };
    hrefs.push(...ard.entries.map((entry) => entry.url));

    const openapi = readPublicJson("openapi.json") as { paths: Record<string, unknown> };
    expect(openapi.paths["/api/health"]).toBeTruthy();
    expect(openapi.paths["/mcp"]).toBeTruthy();
    expect(openapi.paths["/oauth2/token"]).toBeTruthy();
    expect(openapi.paths["/oauth2/revoke"]).toBeTruthy();
    expect(openapi.paths["/oauth/authorize"]).toBeTruthy();
    expect(openapi.paths["/agent/identity"]).toBeTruthy();

    const skills = readPublicJson(".well-known/agent-skills/index.json") as {
      skills: { url: string; digest: string }[];
    };
    for (const skill of skills.skills) {
      const file = publicPath(skill.url);
      expect(existsSync(file), skill.url).toBe(true);
      expect(sha256File(file)).toBe(skill.digest);
      hrefs.push(`${ORIGIN}${skill.url}`);
    }

    const mcpHeaders = {
      "Content-Type": "application/json",
      Accept: MCP_ACCEPT,
    };
    const initialized = await handleRequest(
      new Request(`${ORIGIN}/mcp`, {
        method: "POST",
        headers: mcpHeaders,
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: {} }),
      }),
      env
    );
    expect(initialized.status).toBe(200);
    await handleRequest(
      new Request(`${ORIGIN}/mcp`, {
        method: "POST",
        headers: mcpHeaders,
        body: JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }),
      }),
      env
    );

    const discovery = await handleRequest(
      new Request(`${ORIGIN}/mcp`, {
        method: "POST",
        headers: mcpHeaders,
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 2,
          method: "tools/call",
          params: { name: "get_discovery_documents", arguments: {} },
        }),
      }),
      env
    );
    const tool = (await discovery.json()) as { result: { structuredContent: Record<string, string> } };
    hrefs.push(...Object.values(tool.result.structuredContent));

    const missing = [...new Set(hrefs)].filter((href) => !hrefIsImplemented(href));
    expect(missing).toEqual([]);
  });
});
