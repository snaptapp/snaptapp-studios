import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/docs/")({
  server: { handlers: redirectHandlers("/docs/api/", 301) },
});
