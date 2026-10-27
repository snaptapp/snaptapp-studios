import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      {
            "title": "Cookie policy — Snaptapp"
      },
      {
            "name": "description",
            "content": "Which cookies and browser storage Snaptapp uses, what they are for, and how to change your analytics consent choice."
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
            "content": "article"
      },
      {
            "property": "og:site_name",
            "content": "Snaptapp"
      },
      {
            "property": "og:title",
            "content": "Cookie policy — Snaptapp"
      },
      {
            "property": "og:description",
            "content": "Which cookies and browser storage Snaptapp uses and how to change your analytics consent choice."
      },
      {
            "property": "og:url",
            "content": "https://snaptappllc.com/legal/cookies/"
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
            "content": "Snaptapp — Independent Game Studio"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://snaptappllc.com/legal/cookies/"
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
  component: PageLegalCookies,
});

function PageLegalCookies() {
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
              <a className="btn btn--primary btn--sm" href="https://moreorless.snaptapp.us">Play More or Less</a>
            </nav>
          </div>
        </header>

        <main id="main">
          <section className="page-head">
            <div className="shell">
              <ol className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Legal</li>
                <li>Cookie policy</li>
              </ol>
              <h1>Cookie policy</h1>
            </div>
          </section>

          <section className="section section--tight reading-section">
            <div className="shell">
              <div className="prose">
                <ul className="doc-meta">
                  <li>Effective 22 September 2026</li>
                  <li>Last updated 22 September 2026</li>
                  <li>Version 1.0</li>
                </ul>

                <p>
                  This page explains which cookies and browser storage Snaptapp uses on
                  snaptapp.us, what they are for, and how to change your choice. It covers the
                  studio website only; the More or Less game has its own data practices described
                  in the <a href="/legal/privacy/">privacy policy</a>.
                </p>

                <h2>What we store</h2>
                <p>
                  This site stores very little in your browser, and nothing tracks you before you
                  allow it.
                </p>
                <dl>
                  <dt>Your consent choice</dt>
                  <dd>
                    When you answer the cookie banner, your choice is saved in your browser's
                    local storage under the key <code>snaptapp:analytics-consent</code>. It is not
                    a cookie, it is never sent to our servers, and it exists only so the site
                    remembers your answer between visits.
                  </dd>
                  <dt>Google Analytics cookies</dt>
                  <dd>
                    If you choose &ldquo;Allow analytics&rdquo;, Google Analytics loads and sets
                    its own cookies (such as <code>_ga</code>) to distinguish visits and count
                    page views. These cookies are set by Google and are only created after you
                    opt in. If you decline, Google Analytics never loads and no analytics cookies
                    are set.
                  </dd>
                </dl>

                <h2>What we do not use</h2>
                <ul>
                  <li>No advertising or marketing cookies.</li>
                  <li>No cross-site tracking.</li>
                  <li>No analytics before you explicitly allow it.</li>
                </ul>

                <h2>Changing your choice</h2>
                <p>
                  Use the <strong>Cookie settings</strong> button at the bottom corner of any page
                  to reopen the banner and change your answer. Declining after previously allowing
                  stops analytics from that point on; you can also clear the cookies already set
                  through your browser's site settings.
                </p>

                <h2>Contact</h2>
                <p>
                  Questions about this policy:{" "}
                  <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a>.
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
