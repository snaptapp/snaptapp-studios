import { createFileRoute } from "@tanstack/react-router";

import { siteApiHandlers } from "@/lib/site-api-handlers";

// Served from code rather than public/ so the transport URL matches the host
// that answered (the apex redirects away).
export const Route = createFileRoute("/.well-known/mcp/server-card.json")({
  server: { handlers: siteApiHandlers },
});
