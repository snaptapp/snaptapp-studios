import { createFileRoute } from "@tanstack/react-router";

import { redirectHandlers } from "@/lib/redirect-route";

export const Route = createFileRoute("/security")({
  server: { handlers: redirectHandlers("/.well-known/security.txt", 302) },
});
