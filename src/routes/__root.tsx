import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { reportLovableError } from "../lib/lovable-error-reporting";
import { useSiteBehaviour } from "../lib/use-site-behaviour";
// Design system tokens (imported after the site stylesheet link below).
import "../styles.css";

function NotFoundComponent() {
  useSiteBehaviour();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="/">
            <img
              className="brand__mark"
              src="/assets/img/snaptapp-mark.svg"
              alt=""
              width="30"
              height="30"
            />
            <span>Snaptapp</span>
            <span className="brand__sub">Studio</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="primary-nav"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <nav className="nav" id="primary-nav" aria-label="Primary">
            <a href="/products/">Products</a>
            <a href="/company/">Company</a>
            <a href="/support/">Support</a>
            <a href="/contact/">Contact</a>
            <a className="btn btn--primary btn--sm" href="https://moreorless.snaptapp.us">
              Play More or Less
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="shell">
            <div className="hero__inner">
              <p className="eyebrow">Error 404</p>
              <h1>That page is not here.</h1>
              <p className="lede">
                The link is wrong, the page moved, or it never existed. Any of those is on us
                to explain, so if you followed a link from somewhere on this site, please{" "}
                <a href="mailto:support@snaptapp.us">tell us where</a>.
              </p>
              <div className="row hero__actions">
                <a className="btn btn--primary" href="/">
                  Back to home
                </a>
                <a className="btn btn--secondary" href="/products/">
                  See products
                </a>
              </div>

              <ul className="trust-strip">
                <li>
                  <a href="/company/">Company</a>
                </li>
                <li>
                  <a href="/support/">Support</a>
                </li>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
                <li>
                  <a href="/legal/privacy/">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-bottom">
            <p>
              &copy; <span data-year>2026</span> Snaptapp. All rights reserved.
            </p>
            <ul>
              <li>
                <a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a>
              </li>
              <li>
                <a href="/legal/privacy/">Privacy</a>
              </li>
              <li>
                <a href="/legal/terms/">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main id="main">
      <section className="hero">
        <div className="shell">
          <div className="hero__inner">
            <p className="eyebrow">Error</p>
            <h1>This page didn't load.</h1>
            <p className="lede">
              Something went wrong on our end. Try again, or head back to the homepage.
            </p>
            <div className="row hero__actions">
              <button
                className="btn btn--primary"
                onClick={() => {
                  router.invalidate();
                  reset();
                }}
              >
                Try again
              </button>
              <a className="btn btn--secondary" href="/">
                Back to home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "stylesheet", href: "/assets/css/site.css" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/assets/img/icon-180.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [{ src: "/assets/js/webmcp.js", defer: true }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="no-js">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
