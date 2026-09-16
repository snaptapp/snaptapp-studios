/**
 * Shared server-route handlers for the machine-facing endpoints that the
 * Cloudflare Worker used to serve (/mcp, /api/health, /oauth*, /agent/*,
 * /.well-known/jwks.json). The implementation is loaded lazily inside each
 * handler so the server-only module never enters the client bundle.
 */

async function handle({ request }: { request: Request }): Promise<Response> {
  const { handleSiteApiRequest } = await import("./site-api.server");
  return handleSiteApiRequest(request);
}

export const siteApiHandlers = {
  GET: handle,
  HEAD: handle,
  POST: handle,
  OPTIONS: handle,
};
