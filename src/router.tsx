import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // The live site's canonical URLs all end in a slash (/products/, /docs/api/).
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
