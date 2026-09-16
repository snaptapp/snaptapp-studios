import { createFileRoute } from "@tanstack/react-router";

import { siteApiHandlers } from "@/lib/site-api-handlers";

export const Route = createFileRoute("/mcp/$")({
  server: { handlers: siteApiHandlers },
});
