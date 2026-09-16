import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

/**
 * Port of public/_headers: the security headers, discovery Link header, and
 * content types the Cloudflare asset Worker used to add.
 */
const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Strict-Transport-Security": "max-age=31536000",
};

const HOME_LINK_HEADER =
  '</.well-known/api-catalog>; rel="api-catalog", </docs/api/>; rel="service-doc", ' +
  '</openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json", ' +
  '</.well-known/ai-catalog.json>; rel="describedby"; type="application/json", ' +
  '</.well-known/mcp/server-card.json>; rel="alternate"; type="application/mcp-server-card+json"';

const CONTENT_TYPES: Record<string, string> = {
  "/.well-known/security.txt": "text/plain; charset=utf-8",
  "/.well-known/api-catalog": "application/linkset+json",
  "/.well-known/openid-configuration": "application/json; charset=utf-8",
  "/.well-known/oauth-authorization-server": "application/json; charset=utf-8",
  "/.well-known/oauth-protected-resource": "application/json; charset=utf-8",
  "/.well-known/mcp/server-card.json": "application/mcp-server-card+json; charset=utf-8",
  "/.well-known/agent-skills/index.json": "application/json; charset=utf-8",
  "/.well-known/ai-catalog.json": "application/json; charset=utf-8",
  "/auth.md": "text/markdown; charset=utf-8",
  "/openapi.json": "application/vnd.oai.openapi+json; charset=utf-8",
};

const PUBLIC_CORS_PATHS = new Set(Object.keys(CONTENT_TYPES).filter((p) => p !== "/.well-known/security.txt"));

function applySiteHeaders(request: Request, response: Response): Response {
  const { pathname } = new URL(request.url);
  const headers = new Headers(response.headers);

  for (const [key, value] of Object.entries(SECURITY_HEADERS)) headers.set(key, value);

  if (pathname === "/") headers.set("Link", HOME_LINK_HEADER);

  const contentType = CONTENT_TYPES[pathname];
  if (contentType) headers.set("Content-Type", contentType);
  if (PUBLIC_CORS_PATHS.has(pathname)) headers.set("Access-Control-Allow-Origin", "*");

  if (pathname.startsWith("/assets/img/") || pathname === "/favicon.svg") {
    headers.set("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return applySiteHeaders(request, await normalizeCatastrophicSsrResponse(response));
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
