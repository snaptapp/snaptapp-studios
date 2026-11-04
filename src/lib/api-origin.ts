/**
 * The public origin a request is actually being served from.
 *
 * The apex `snaptapp.us` permanently redirects to snaptappllc.com, so the
 * machine-facing surface (catalog OAuth, agent registration, JWKS, health, and
 * the discovery documents) is served from a subdomain such as
 * `https://mcp.snaptapp.us`. Issuer, audience, and discovery URLs must follow
 * whichever host answered: hard-coding the apex would hand callers URLs that
 * immediately redirect somewhere else.
 */

export const CANONICAL_ORIGIN = "https://snaptapp.us";

const STUDIO_ZONE = "snaptapp.us";

function normalizedHost(hostname: string): string {
  return hostname.trim().toLowerCase().replace(/\.$/, "");
}

export function isLoopbackHost(hostname: string): boolean {
  const host = normalizedHost(hostname);
  return host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host === "::1";
}

/** `snaptapp.us`, `www.snaptapp.us`, and any other `*.snaptapp.us` host. */
export function isStudioHost(hostname: string): boolean {
  const host = normalizedHost(hostname);
  return host === STUDIO_ZONE || host.endsWith(`.${STUDIO_ZONE}`);
}

/**
 * Resolve the origin to advertise for this request.
 *
 * Only studio hosts and loopback are trusted, so a spoofed Host header cannot
 * steer the JWT `iss`/`aud` values or the discovery documents to a hostile
 * origin; anything else falls back to the canonical apex.
 */
export function resolvePublicOrigin(request: Request): string {
  try {
    const url = new URL(request.url);
    if (isStudioHost(url.hostname) || isLoopbackHost(url.hostname)) {
      return url.origin;
    }
  } catch {
    // Fall through to the canonical origin below.
  }
  return CANONICAL_ORIGIN;
}
