import { createFileRoute } from "@tanstack/react-router";

import { siteApiHandlers } from "@/lib/site-api-handlers";

export const Route = createFileRoute("/.well-known/jwks.json")({
  server: { handlers: siteApiHandlers },
});
