import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/docs/api")({
  head: () => ({
    meta: [
      {
            "title": "API for agents - Snaptapp"
      },
      {
            "name": "description",
            "content": "Machine-readable discovery for snaptapp.us: API catalog, OpenAPI, MCP, OAuth metadata, agent skills, and health."
      },
      {
            "name": "theme-color",
            "content": "#07080b"
      },
      {
            "name": "color-scheme",
            "content": "dark"
      },
      {
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:site_name",
            "content": "Snaptapp"
      },
      {
            "property": "og:title",
            "content": "API for agents - Snaptapp"
      },
      {
            "property": "og:description",
            "content": "Machine-readable discovery for snaptapp.us: API catalog, OpenAPI, MCP, OAuth metadata, agent skills, and health."
      },
      {
            "property": "og:url",
            "content": "https://snaptappllc.com/docs/api/"
      },
      {
            "property": "og:image",
            "content": "https://snaptapp.us/assets/img/og-default.png"
      },
      {
            "property": "og:image:width",
            "content": "1200"
      },
      {
            "property": "og:image:height",
            "content": "630"
      },
      {
            "property": "og:image:alt",
            "content": "Snaptapp independent studio"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://snaptappllc.com/docs/api/"
      },
      {
            "rel": "api-catalog",
            "href": "/.well-known/api-catalog"
      },
      {
            "rel": "service-doc",
            "href": "/docs/api/"
      },
      {
            "rel": "describedby",
            "href": "/.well-known/ai-catalog.json",
            "type": "application/json"
      }
],
  }),
  component: PageDocsApi,
});

function PageDocsApi() {
  useSiteBehaviour();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      
          <header className="site-header">
            <div className="shell site-header__inner">
              <a className="brand" href="/">
                <img className="brand__mark" src="/assets/img/snaptapp-mark.svg" alt="" width="30" height="30" />
                <span>Snaptapp</span>
                <span className="brand__sub">LLC</span>
              </a>
              <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
                <span></span>
              </button>
              <nav className="nav" id="primary-nav" aria-label="Primary">
                <a href="/products/">Products</a>
                <a href="/company/">Company</a>
                <a href="/support/">Support</a>
                <a href="/contact/">Contact</a>
                <a className="btn btn--primary btn--sm" href="https://moreorless.snaptapp.us">Play More or Less</a
                >
              </nav>
            </div>
          </header>
      
          <main id="main">
            <section className="page-head">
              <div className="shell">
                <ol className="breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li>API for agents</li>
                </ol>
                <h1>API for agents</h1>
                <p className="lede">
                  Discovery documents, a small MCP server, and optional OAuth metadata so agents
                  can find Snaptapp without scraping HTML.
                </p>
              </div>
            </section>
      
            <section className="section section--tight reading-section">
              <div className="shell">
                <div className="prose">
                  <div className="callout">
                    <strong>Public by default.</strong> Health, the API catalog, OpenAPI, and MCP
                    tools on this origin do not require a token. Agent registration is documented
                    in <a href="/auth.md">auth.md</a> for agents that want a catalog-scoped Bearer
                    token anyway.
                  </div>
      
                  <h2 id="catalog">API catalog</h2>
                  <p>
                    RFC 9727 catalog at{" "}
                    <a href="/.well-known/api-catalog"><code>/.well-known/api-catalog</code></a>
                    {" "}(<code>application/linkset+json</code>). OpenAPI is at{" "}
                    <a href="/openapi.json"><code>/openapi.json</code></a>. Health is{" "}
                    <a href="/api/health"><code>GET /api/health</code></a>.
                  </p>
      
                  <h2 id="mcp">MCP</h2>
                  <p>
                    Server card:{" "}
                    <a href="/.well-known/mcp/server-card.json"><code>/.well-known/mcp/server-card.json</code></a>.
                    Streamable HTTP endpoint: <code>POST https://snaptapp.us/mcp</code>.
                  </p>
                  <p>Tools: <code>get_studio_overview</code>, <code>list_products</code>, <code>get_contact_channels</code>, <code>get_discovery_documents</code>.</p>
      
                  <h2 id="oauth">OAuth and auth.md</h2>
                  <ul>
                    <li><a href="/.well-known/openid-configuration">OpenID Provider configuration</a></li>
                    <li><a href="/.well-known/oauth-authorization-server">OAuth authorization server metadata</a> (includes <code>agent_auth</code>)</li>
                    <li><a href="/.well-known/oauth-protected-resource">Protected resource metadata</a></li>
                    <li><a href="/auth.md">auth.md</a></li>
                  </ul>
      
                  <h2 id="skills">Skills and ARD</h2>
                  <ul>
                    <li>Skills index: <a href="/.well-known/agent-skills/index.json"><code>/.well-known/agent-skills/index.json</code></a></li>
                    <li>ARD catalog: <a href="/.well-known/ai-catalog.json"><code>/.well-known/ai-catalog.json</code></a></li>
                  </ul>
      
                  <h2 id="webmcp">WebMCP</h2>
                  <p>
                    HTML pages call <code>navigator.modelContext.provideContext()</code> (and{" "}
                    <code>registerTool</code> when that is what the browser exposes) so in-page
                    agents can read studio facts and navigate the site.
                  </p>
      
                  <h2 id="more-or-less">More or Less</h2>
                  <p>
                    The trivia game is a different origin:{" "}
                    <a href="https://moreorless.snaptapp.us">moreorless.snaptapp.us</a>. Player
                    APIs authenticate with Firebase ID tokens, not the catalog OAuth on this host.
                  </p>
                </div>
              </div>
            </section>
          </main>
      
          <footer className="site-footer">
            <div className="shell">
              <div className="footer-grid">
                <div className="footer-about">
                  <a className="brand" href="/">
                    <img className="brand__mark" src="/assets/img/snaptapp-mark.svg" alt="" width="30" height="30" />
                    <span>Snaptapp</span>
                  </a>
                   <p>An independent game studio building and operating its own titles.</p>
                </div>
      
                <div>
                  <h2>Products</h2>
                  <ul>
                    <li><a href="/products/">All products</a></li>
                    <li><a href="https://moreorless.snaptapp.us">More or Less</a></li>
                  </ul>
                </div>
      
                <div>
                  <h2>Company</h2>
                  <ul>
                    <li><a href="/company/">About</a></li>
                    <li><a href="/contact/">Contact</a></li>
                    <li><a href="/support/">Support</a></li>
                  </ul>
                </div>
      
                <div>
                  <h2>Legal</h2>
                  <ul>
                    <li><a href="/legal/privacy/">Privacy policy</a></li>
                  <li><a href="/legal/cookies/">Cookie policy</a></li>
                    <li><a href="/legal/terms/">Terms of service</a></li>
                    <li><a href="/.well-known/security.txt">Security contact</a></li>
                    <li><a href="/docs/api/">API for agents</a></li>
                  </ul>
                </div>
              </div>
      
              <div className="footer-bottom">
                <p>&copy; <span data-year="">2026</span> Snaptapp. All rights reserved.</p>
                <ul>
                  <li><a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a></li>
                  <li><a href="/legal/privacy/">Privacy</a></li>
                <li><a href="/legal/cookies/">Cookies</a></li>
                  <li><a href="/legal/terms/">Terms</a></li>
                <li><a href="https://snaptapp.us/auth">Admin</a></li>
                </ul>
              </div>
            </div>
          </footer>
    </>
  );
}
