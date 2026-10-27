import { createFileRoute } from "@tanstack/react-router";

import { siteApiHandlers } from "@/lib/site-api-handlers";

// RFC 9727 linkset built per request so the advertised hrefs follow the
// serving origin instead of the redirecting apex.
export const Route = createFileRoute("/.well-known/api-catalog")({
  server: { handlers: siteApiHandlers },
});
