import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/help")({
  server: { handlers: redirectHandlers("/support/", 301) },
});
