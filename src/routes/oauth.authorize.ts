import { createFileRoute } from "@tanstack/react-router";

import { siteApiHandlers } from "@/lib/site-api-handlers";

export const Route = createFileRoute("/oauth/authorize")({
  server: { handlers: siteApiHandlers },
});
