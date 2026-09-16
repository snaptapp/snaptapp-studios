import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/tos")({
  server: { handlers: redirectHandlers("/legal/terms/", 301) },
});
