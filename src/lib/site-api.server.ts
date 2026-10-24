/**
 * Snaptapp studio site: MCP, health, and agent-registration endpoints.
 *
 * Static pages and well-known discovery documents live in ../public and are
 * served by the Asset Worker. This script only runs for the paths listed in
 * wrangler.jsonc `assets.run_worker_first`.
 */

import {
  ACCESS_TOKEN_TTL_SEC,
  ACCESS_TOKEN_USE,
  CATALOG_SCOPE,
  CLAIM_TOKEN_USE,
  CLIENT_AUTHENTICATED,
  GRANT_CLAIM,
  GRANT_CLIENT_CREDENTIALS,
  GRANT_JWT_BEARER,
  IDENTITY_ANONYMOUS,
  IDENTITY_ASSERTION,
  IDENTITY_SERVICE_AUTH,
  IDENTITY_TOKEN_USE,
  IDENTITY_TYPES,
  MCP_ACCEPT,
  ORIGIN,
  TOKEN_CLASS,
} from "./catalog-contract";
import {
  SigningConfigurationError,
  signEs256Jwt,
  signingPublicJwk,
  verifyEs256Jwt,
} from "./signing.server";

export interface Env {
  TOKEN_SIGNING_JWK?: string;
  ENVIRONMENT?: string;
  CORS_ALLOWED_ORIGINS?: string;
}

const SERVER_NAME = "snaptapp-site";
const SERVER_VERSION = "1.0.0";
const MCP_PROTOCOL = "2025-03-26";

export const DEFAULT_ALLOWED_ORIGINS = [
  "https://snaptapp.us",
  "https://www.snaptapp.us",
  "https://moreorless.snaptapp.us",
  "https://more-or-less.snaptapp.us",
];

export function parseAllowedOrigins(raw?: string): string[] {
  if (!raw?.trim()) return [...DEFAULT_ALLOWED_ORIGINS];
  const parsed = raw
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .filter((entry) => entry !== "*");
  return parsed.length > 0 ? parsed : [...DEFAULT_ALLOWED_ORIGINS];
}

function isLocalhostOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    return (
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "[::1]" ||
      url.hostname === "::1"
    );
  } catch {
    return false;
  }
}

export function corsHeaders(
  request?: Request,
  env?: { CORS_ALLOWED_ORIGINS?: string }
): Record<string, string> {
  const allowed = parseAllowedOrigins(env?.CORS_ALLOWED_ORIGINS);
  const origin = request?.headers.get("Origin")?.trim() ?? "";
  const allowOrigin =
    origin && (allowed.includes(origin) || isLocalhostOrigin(origin))
      ? origin
      : allowed[0];

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, MCP-Protocol-Version, MCP-Session-Id",
    "Access-Control-Expose-Headers": "MCP-Session-Id, WWW-Authenticate",
    Vary: "Origin",
  };
}

const STUDIO = {
  name: "Snaptapp",
  url: ORIGIN,
  description:
    "Snaptapp LLC is an independent US studio that designs, builds, and operates original AI-native cross-platform games powered by Google Cloud, Gemini Enterprise Agent Platform (Gemini 3.5 Flash Lite, Gemini 3.8 Flash, and Gemma 2 9B SFT), Google Search Grounding, Cloud Run, Cloud Firestore, Firebase, and real-time edge infrastructure. Its first title, More or Less, is live.",
  founded: "2026",
  country: "United States",
  businessModel: "Own products only; Snaptapp does not take client work.",
  responseTime: "General, press, licensing, and support enquiries are answered within two business days.",
  products: [
    {
      name: "More or Less",
      status: "live",
      url: "https://moreorless.snaptapp.us",
      tagline: "One fake number. Is the real answer more or less?",
      description:
        "A party trivia game about numbers. Every round presents a claim, a plausible but deliberately incorrect number, and a countdown. Players decide whether the real figure is higher or lower before time runs out.",
      category: "Party trivia",
      platforms: {
        web: "live",
        ios: "in development",
        android: "in development",
      },
      players: "1–10 per room",
      price: "Free to play",
      modes: ["Standard", "Cutthroat", "Daily challenge", "Pass and play", "Multiplayer"],
      technology: [
        "Gemini Enterprise Agent Platform (Gemini 3.5 Flash Lite for custom topic decks, Gemini 3.8 Flash for the fact dispute ombudsman)",
        "Google Search Grounding",
        "Gemini Enterprise Agent Platform Supervised Fine-Tuning & Gemma 2 9B LoRA",
        "Google Cloud Run (Go GenAI Agent)",
        "Cloud Firestore & Firebase (Functions v2, Auth, App Check)",
        "Flutter",
        "Cloudflare Workers & Durable Objects",
      ],
    },
  ],
  contacts: {
    general: {
      email: "hello@snaptapp.us",
      purpose: "General enquiries, press, review builds, and licensing for Snaptapp titles.",
      responseTime: "Within two business days",
    },
    support: {
      email: "support@snaptapp.us",
      purpose: "Product bugs, account problems, and billing questions.",
      responseTime: "Within two business days",
    },
    press: {
      email: "press@snaptapp.us",
      purpose: "Interviews, review builds, and media asset requests.",
      responseTime: "Include the deadline with the request",
    },
    privacy: {
      email: "privacy@snaptapp.us",
      purpose: "Access, correction, or deletion of personal data.",
      responseTime: "Within 30 days, usually sooner",
    },
    security: {
      email: "security@snaptapp.us",
      purpose: "Responsible vulnerability disclosure.",
      policy: `${ORIGIN}/.well-known/security.txt`,
      responseTime: "Acknowledged within three business days",
    },
    legal: {
      email: "legal@snaptapp.us",
      purpose: "Contracts, copyright, and formal correspondence relating to the terms of service.",
    },
  },
};

const MCP_TOOLS = [
  {
    name: "get_studio_overview",
    description:
      "Return a short overview of Snaptapp: what the studio is, when it was founded, and how to reach it.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
  {
    name: "list_products",
    description:
      "List Snaptapp products with status, platforms, and canonical URLs. More or Less is the live title.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
  {
    name: "get_contact_channels",
    description:
      "Return Snaptapp email channels for press, licensing, support, privacy, security, and legal.",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
  {
    name: "get_discovery_documents",
    description:
      "List machine-readable discovery URLs on snaptapp.us (API catalog, OpenAPI, MCP card, ARD, OAuth, skills).",
    inputSchema: { type: "object", additionalProperties: false, properties: {} },
  },
] as const;

type JsonRpcId = string | number | null;

interface JsonRpcRequest {
  jsonrpc?: string;
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown>;
}

function json(body: unknown, status = 200, extra: Record<string, string> = {}, request?: Request, env?: Env): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...corsHeaders(request, env), ...extra },
  });
}

function acceptTypes(header: string): string[] {
  return header
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase() ?? "")
    .filter(Boolean);
}

/** Streamable HTTP POST must list JSON and SSE (MCP 2025-03-26). A wildcard Accept is not enough. */
function acceptsMcpJsonAndSse(header: string): boolean {
  const types = acceptTypes(header);
  return types.includes("application/json") && types.includes("text/event-stream");
}

function text(body: string, status = 200, extra: Record<string, string> = {}, request?: Request, env?: Env): Response {
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8", ...corsHeaders(request, env), ...extra },
  });
}

function resourceMetadataHeader(): string {
  return `Bearer resource_metadata="${ORIGIN}/.well-known/oauth-protected-resource"`;
}

function mcpServerCard() {
  return {
    $schema: "https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json",
    name: "us.snaptapp/studio",
    version: SERVER_VERSION,
    protocolVersion: MCP_PROTOCOL,
    serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
    description: "Studio MCP tools for Snaptapp products, contacts, and discovery docs.",
    transport: { type: "streamable-http", url: `${ORIGIN}/mcp` },
    remotes: [
      {
        type: "streamable-http",
        url: `${ORIGIN}/mcp`,
        supportedProtocolVersions: [MCP_PROTOCOL],
      },
    ],
    capabilities: { tools: {}, resources: {}, prompts: {} },
  };
}

function cardJson(body: unknown, status = 200, request?: Request, env?: Env): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/mcp-server-card+json; charset=utf-8", ...corsHeaders(request, env) },
  });
}

function discoveryDocuments() {
  return {
    homepage: `${ORIGIN}/`,
    apiCatalog: `${ORIGIN}/.well-known/api-catalog`,
    openApi: `${ORIGIN}/openapi.json`,
    serviceDoc: `${ORIGIN}/docs/api/`,
    mcpServerCard: `${ORIGIN}/.well-known/mcp/server-card.json`,
    mcp: `${ORIGIN}/mcp`,
    ard: `${ORIGIN}/.well-known/ai-catalog.json`,
    agentSkills: `${ORIGIN}/.well-known/agent-skills/index.json`,
    oauthAuthorizationServer: `${ORIGIN}/.well-known/oauth-authorization-server`,
    oauthProtectedResource: `${ORIGIN}/.well-known/oauth-protected-resource`,
    openIdConfiguration: `${ORIGIN}/.well-known/openid-configuration`,
    jwks: `${ORIGIN}/.well-known/jwks.json`,
    authMd: `${ORIGIN}/auth.md`,
    security: `${ORIGIN}/.well-known/security.txt`,
    robots: `${ORIGIN}/robots.txt`,
    sitemap: `${ORIGIN}/sitemap.xml`,
    health: `${ORIGIN}/api/health`,
  };
}

export function callTool(name: string): unknown {
  switch (name) {
    case "get_studio_overview":
      return {
        name: STUDIO.name,
        url: STUDIO.url,
        description: STUDIO.description,
        founded: STUDIO.founded,
        country: STUDIO.country,
        businessModel: STUDIO.businessModel,
        responseTime: STUDIO.responseTime,
        productCount: STUDIO.products.length,
      };
    case "list_products":
      return { products: STUDIO.products };
    case "get_contact_channels":
      return { contactPage: `${ORIGIN}/contact/`, contacts: STUDIO.contacts };
    case "get_discovery_documents":
      return discoveryDocuments();
    default:
      return null;
  }
}

function toolResult(value: unknown) {
  return {
    content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
    structuredContent: value,
  };
}

function rpcResult(id: JsonRpcId | undefined, result: unknown) {
  return { jsonrpc: "2.0", id: id ?? null, result };
}

function rpcError(id: JsonRpcId | undefined, code: number, message: string, data?: unknown) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message, ...(data !== undefined ? { data } : {}) } };
}

function isJsonRpcRequest(item: unknown): item is JsonRpcRequest {
  if (item === null || typeof item !== "object" || Array.isArray(item)) return false;
  return typeof (item as JsonRpcRequest).method === "string" && Boolean((item as JsonRpcRequest).method);
}

function dispatchJsonRpc(item: unknown): unknown | null {
  if (!isJsonRpcRequest(item)) {
    return rpcError(null, -32600, "Invalid Request");
  }
  return handleJsonRpc(item);
}

function handleJsonRpc(message: JsonRpcRequest): unknown | null {
  const method = String(message.method ?? "");
  const id = message.id;
  const isNotification = id === undefined;

  switch (method) {
    case "initialize":
      return rpcResult(id, {
        protocolVersion: MCP_PROTOCOL,
        capabilities: { tools: { listChanged: false } },
        serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
        instructions:
          "Snaptapp studio tools. Use get_studio_overview, list_products, get_contact_channels, and get_discovery_documents.",
      });
    case "notifications/initialized":
    case "notifications/cancelled":
      return isNotification ? null : rpcResult(id, {});
    case "ping":
      return rpcResult(id, {});
    case "tools/list":
      return rpcResult(id, { tools: MCP_TOOLS });
    case "tools/call": {
      const name = String(message.params?.name ?? "");
      const value = callTool(name);
      if (value === null) {
        return rpcError(id, -32602, `Unknown tool: ${name}`);
      }
      return rpcResult(id, toolResult(value));
    }
    case "resources/list":
      return rpcResult(id, { resources: [] });
    case "prompts/list":
      return rpcResult(id, { prompts: [] });
    default:
      if (isNotification) return null;
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

function audienceAllowed(aud: unknown): boolean {
  const values = Array.isArray(aud) ? aud : [aud];
  const allowed = new Set([ORIGIN, `${ORIGIN}/`, `${ORIGIN}/oauth2/token`, `${ORIGIN}/mcp`]);
  return values.some((value) => allowed.has(String(value)));
}

function signingConfigError(err: unknown, request?: Request, env?: Env): Response | null {
  if (err instanceof SigningConfigurationError) {
    console.error("snaptapp-site signing configuration:", err.message);
    return json({ error: "server_error", error_description: "The server could not complete this request." }, 500, {}, request, env);
  }
  return null;
}

async function verifyIssuedJwt(env: Env, token: string, expectedUse: string) {
  const claims = await verifyEs256Jwt(token, signingPublicJwk(env));
  if (!claims) return null;
  if (claims.iss !== ORIGIN) return null;
  if (!audienceAllowed(claims.aud)) return null;
  if (claims.token_use !== expectedUse) return null;
  if (typeof claims.sub !== "string" || !claims.sub) return null;
  return claims;
}

async function issueToken(env: Env, sub: string, scope = CATALOG_SCOPE) {
  const now = Math.floor(Date.now() / 1000);
  const access_token = await signEs256Jwt(
    {
      iss: ORIGIN,
      aud: ORIGIN,
      sub,
      scope,
      iat: now,
      nbf: now,
      exp: now + ACCESS_TOKEN_TTL_SEC,
      token_use: ACCESS_TOKEN_USE,
      token_class: TOKEN_CLASS,
      client_authenticated: CLIENT_AUTHENTICATED,
    },
    env
  );
  return {
    access_token,
    token_type: "Bearer" as const,
    expires_in: ACCESS_TOKEN_TTL_SEC,
    scope,
    resource: ORIGIN,
  };
}

async function identityAssertionJwt(env: Env, kind: string, subject: string) {
  const now = Math.floor(Date.now() / 1000);
  return signEs256Jwt(
    {
      iss: ORIGIN,
      aud: ORIGIN,
      sub: subject,
      iat: now,
      nbf: now,
      exp: now + 600,
      identity_type: kind,
      token_use: IDENTITY_TOKEN_USE,
    },
    env
  );
}

async function claimTokenJwt(env: Env, subject: string) {
  const now = Math.floor(Date.now() / 1000);
  return signEs256Jwt(
    {
      iss: ORIGIN,
      aud: ORIGIN,
      sub: subject,
      iat: now,
      nbf: now,
      exp: now + 86400,
      token_use: CLAIM_TOKEN_USE,
    },
    env
  );
}

function handleJwks(request: Request, env: Env): Response {
  try {
    return json({ keys: [signingPublicJwk(env)] }, 200, {}, request, env);
  } catch (err) {
    return signingConfigError(err, request, env) ?? json({ error: "server_error" }, 500, {}, request, env);
  }
}

async function handleMcp(request: Request, env: Env): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(request, env) });
  }

  if (request.method === "GET" || request.method === "HEAD") {
    const accept = request.headers.get("Accept") ?? "";
    if (accept.includes("text/event-stream")) {
      const headers = {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-store",
        ...corsHeaders(request, env),
      };
      if (request.method === "HEAD") {
        return new Response(null, { headers });
      }
      const stream = new ReadableStream({
        start(controller) {
          const encoder = new TextEncoder();
          controller.enqueue(encoder.encode(": snaptapp-site mcp\n\n"));
          controller.close();
        },
      });
      return new Response(stream, { headers });
    }
    const cardHeaders = {
      "Content-Type": "application/mcp-server-card+json; charset=utf-8",
      ...corsHeaders(request, env),
    };
    if (request.method === "HEAD") {
      return new Response(null, { headers: cardHeaders });
    }
    return cardJson(mcpServerCard(), 200, request, env);
  }

  if (request.method !== "POST") {
    return json({ error: "method_not_allowed" }, 405, {}, request, env);
  }

  const accept = request.headers.get("Accept") ?? "";
  if (!acceptsMcpJsonAndSse(accept)) {
    return json(
      {
        error: "not_acceptable",
        error_description: `POST /mcp requires Accept: ${MCP_ACCEPT}`,
      },
      406,
      {},
      request,
      env
    );
  }

  const payload = (await request.json().catch(() => null)) as JsonRpcRequest | JsonRpcRequest[] | null;
  if (payload === null) {
    return json(rpcError(null, -32700, "Parse error"), 400, {}, request, env);
  }

  if (Array.isArray(payload)) {
    if (payload.length === 0) {
      return new Response(null, { status: 202, headers: corsHeaders(request, env) });
    }
    const results = payload.map((item) => dispatchJsonRpc(item)).filter((item) => item !== null);
    if (results.length === 0) {
      return new Response(null, { status: 202, headers: corsHeaders(request, env) });
    }
    return json(results, 200, {}, request, env);
  }

  const result = dispatchJsonRpc(payload);
  if (result === null) {
    return new Response(null, { status: 202, headers: corsHeaders(request, env) });
  }
  return json(result, 200, {}, request, env);
}

async function handleToken(request: Request, env: Env): Promise<Response> {
  try {
    return await issueTokenResponse(request, env);
  } catch (err) {
    const response = signingConfigError(err, request, env);
    if (response) return response;
    // Security: log internal details server-side, never leak stack traces to client
    console.error("Token issuance failed:", err);
    return json({ error: "server_error", error_description: "An internal error occurred." }, 500, {}, request, env);
  }
}

async function issueTokenResponse(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "invalid_request", error_description: "POST required." }, 405, {}, request, env);
  }

  const contentType = request.headers.get("Content-Type") ?? "";
  let grantType = "";
  let assertion = "";
  let claimToken = "";
  let clientId = "public";

  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    grantType = String(body.grant_type ?? "");
    assertion = String(body.assertion ?? "");
    claimToken = String(body.claim_token ?? "");
    clientId = String(body.client_id ?? clientId);
  } else {
    const body = await request.formData().catch(() => null);
    grantType = String(body?.get("grant_type") ?? "");
    assertion = String(body?.get("assertion") ?? "");
    claimToken = String(body?.get("claim_token") ?? "");
    clientId = String(body?.get("client_id") ?? clientId);
  }

  if (grantType === GRANT_CLIENT_CREDENTIALS) {
    return json(await issueToken(env, `client:${clientId}`), 200, {}, request, env);
  }

  if (grantType === GRANT_JWT_BEARER) {
    if (!assertion) {
      return json({ error: "invalid_grant", error_description: "assertion is required." }, 400, {}, request, env);
    }
    const claims = await verifyIssuedJwt(env, assertion, IDENTITY_TOKEN_USE);
    if (!claims) {
      return json(
        {
          error: "invalid_grant",
          error_description: "assertion must be an ES256 identity JWT signed by this authorization server.",
        },
        400,
        {},
        request,
        env
      );
    }
    return json(await issueToken(env, claims.sub as string), 200, {}, request, env);
  }

  if (grantType === GRANT_CLAIM) {
    if (!claimToken) {
      return json({ error: "invalid_grant", error_description: "claim_token is required." }, 400, {}, request, env);
    }
    const claims = await verifyIssuedJwt(env, claimToken, CLAIM_TOKEN_USE);
    if (!claims) {
      return json(
        {
          error: "invalid_grant",
          error_description: "claim_token must be an ES256 claim JWT signed by this authorization server.",
        },
        400,
        {},
        request,
        env
      );
    }
    return json({ error: "authorization_pending", error_description: "User has not completed the claim ceremony." }, 400, {}, request, env);
  }

  return json(
    {
      error: "unsupported_grant_type",
      error_description: "Use client_credentials, jwt-bearer, or the auth.md claim grant.",
    },
    400,
    {},
    request,
    env
  );
}

async function handleIdentity(request: Request, path: string, env: Env): Promise<Response> {
  try {
    return await issueIdentityResponse(request, path, env);
  } catch (err) {
    const response = signingConfigError(err, request, env);
    if (response) return response;
    // Security: log internal details server-side, never leak stack traces to client
    console.error("Identity handling failed:", err);
    return json({ error: "server_error", error_description: "An internal error occurred." }, 500, {}, request, env);
  }
}

async function issueIdentityResponse(request: Request, path: string, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "invalid_request" }, 405, {}, request, env);
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const type = String(body.type ?? body.identity_type ?? "anonymous");

  if (path.endsWith("/claim") || path.endsWith("/claim/complete")) {
    return json({
      status: "authorization_pending",
      verification_uri: `${ORIGIN}/contact/`,
      verification_uri_complete: `${ORIGIN}/contact/`,
      interval: 5,
      message: "Email hello@snaptapp.us to complete a claimed agent registration. Catalog APIs stay public without a claim.",
    }, 200, {}, request, env);
  }

  if (type === IDENTITY_ANONYMOUS || type === IDENTITY_SERVICE_AUTH) {
    const subject = `anon:${crypto.randomUUID()}`;
    return json({
      identity_type: IDENTITY_ANONYMOUS,
      identity_assertion: await identityAssertionJwt(env, IDENTITY_ANONYMOUS, subject),
      claim_token: await claimTokenJwt(env, subject),
      claim_uri: `${ORIGIN}/agent/identity/claim`,
      scopes: CATALOG_SCOPE.split(" "),
    }, 200, {}, request, env);
  }

  if (type === IDENTITY_ASSERTION) {
    const assertion = String(body.assertion ?? "");
    if (!assertion) {
      return json({ error: "invalid_request", error_description: "assertion is required." }, 400, {}, request, env);
    }
    const claims = await verifyIssuedJwt(env, assertion, IDENTITY_TOKEN_USE);
    if (!claims) {
      return json(
        {
          error: "invalid_request",
          error_description: "assertion must be an ES256 JWT signed by this authorization server.",
        },
        400,
        {},
        request,
        env
      );
    }
    return json({
      identity_type: IDENTITY_ASSERTION,
      identity_assertion: await identityAssertionJwt(env, IDENTITY_ASSERTION, claims.sub as string),
      scopes: CATALOG_SCOPE.split(" "),
    }, 200, {}, request, env);
  }

  return json({
    error: "unsupported_identity_type",
    identity_types_supported: [...IDENTITY_TYPES],
  }, 400, {}, request, env);
}

async function handleRevoke(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "invalid_request", error_description: "POST required." }, 405, {}, request, env);
  }

  const contentType = request.headers.get("Content-Type") ?? "";
  let token = "";
  if (contentType.includes("application/json")) {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    token = String(body.token ?? "");
  } else {
    const body = await request.formData().catch(() => null);
    token = String(body?.get("token") ?? "");
  }

  if (!token) {
    return json({ error: "invalid_request", error_description: "token is required." }, 400, {}, request, env);
  }

  return json({
    revoked: true,
    note: "Catalog tokens are not persisted. This acknowledgement is a no-op; wait for expiry or discard the JWT.",
  }, 200, {}, request, env);
}

function handleAuthorize(request?: Request, env?: Env): Response {
  const body = [
    "# Snaptapp agent authorization",
    "",
    "This authorization endpoint does not run a browser login form.",
    "Public catalog, health, and MCP tools on snaptapp.us do not require a token.",
    `Tokens from POST /oauth2/token are unauthenticated catalog hints (token_class=${TOKEN_CLASS}).`,
    "They are not client identity and are not valid on moreorless.snaptapp.us.",
    "",
    "Agent registration: https://snaptapp.us/auth.md",
    `Token endpoint: POST https://snaptapp.us/oauth2/token (grant_type=${GRANT_CLIENT_CREDENTIALS})`,
    "Contact: hello@snaptapp.us",
    "",
  ].join("\n");
  return text(body, 200, {}, request, env);
}

export async function handleRequest(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(request, env) });
  }

  if (path === "/api/health") {
    const payload = {
      status: "ok",
      service: SERVER_NAME,
      version: SERVER_VERSION,
      timestamp: new Date().toISOString(),
    };
    if (request.method === "HEAD") {
      return new Response(null, { headers: { "Content-Type": "application/json; charset=utf-8", ...corsHeaders(request, env) } });
    }
    return json(payload, 200, {}, request, env);
  }

  if (path === "/mcp") {
    return handleMcp(request, env);
  }

  if (path === "/oauth/authorize") {
    return handleAuthorize(request, env);
  }

  if (path === "/oauth2/token") {
    return handleToken(request, env);
  }

  if (path === "/.well-known/jwks.json") {
    return handleJwks(request, env);
  }

  if (path === "/oauth2/revoke") {
    return handleRevoke(request, env);
  }

  if (path === "/agent/identity" || path.startsWith("/agent/identity/")) {
    return handleIdentity(request, path, env);
  }

  if (path.startsWith("/agent/") || path.startsWith("/oauth") || path.startsWith("/mcp")) {
    return json(
      { error: "not_found", path },
      404,
      { "WWW-Authenticate": resourceMetadataHeader() },
      request,
      env
    );
  }

  return json({ error: "not_found", path }, 404, {}, request, env);
}

/**
 * Reads the signing/CORS configuration from the runtime environment.
 * Must be called inside a request handler: env is injected per request.
 */
export function siteApiEnv(): Env {
  const env: Env = {};
  const signingJwk = process.env["TOKEN_SIGNING_JWK"];
  const environment = process.env["ENVIRONMENT"];
  const corsOrigins = process.env["CORS_ALLOWED_ORIGINS"];
  if (signingJwk) env.TOKEN_SIGNING_JWK = signingJwk;
  if (environment) env.ENVIRONMENT = environment;
  if (corsOrigins) env.CORS_ALLOWED_ORIGINS = corsOrigins;
  return env;
}

/** Entry point used by every server route that mirrors a Worker path. */
export function handleSiteApiRequest(request: Request): Promise<Response> {
  return handleRequest(request, siteApiEnv());
}
