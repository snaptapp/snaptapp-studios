import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/terms")({
  server: { handlers: redirectHandlers("/legal/terms/", 301) },
});
