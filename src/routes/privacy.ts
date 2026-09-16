import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/privacy")({
  server: { handlers: redirectHandlers("/legal/privacy/", 301) },
});
