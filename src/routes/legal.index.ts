import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/legal/")({
  server: { handlers: redirectHandlers("/legal/privacy/", 301) },
});
