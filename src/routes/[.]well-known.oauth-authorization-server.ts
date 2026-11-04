import { createFileRoute } from "@tanstack/react-router";

import { siteApiHandlers } from "@/lib/site-api-handlers";

// Served from code rather than public/ so the issuer and endpoints match the
// host that answered (the apex redirects away).
export const Route = createFileRoute("/.well-known/oauth-authorization-server")({
  server: { handlers: siteApiHandlers },
});
