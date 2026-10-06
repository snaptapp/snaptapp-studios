import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
            "title": "Products — Snaptapp"
      },
      {
            "name": "description",
            "content": "Snaptapp games. More or Less is a fast trivia game about numbers, live on the web with iOS and Android versions in development."
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
            "content": "Products — Snaptapp"
      },
      {
            "property": "og:description",
            "content": "Snaptapp games. More or Less is a fast trivia game about numbers, live on the web with iOS and Android versions in development."
      },
      {
            "property": "og:url",
            "content": "https://snaptapp.us/products/"
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
            "href": "https://snaptapp.us/products/"
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
  component: PageProducts,
});

function PageProducts() {
  useSiteBehaviour();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      
          <header className="site-header">
            <div className="shell site-header__inner">
              <a className="brand" href="/">
                <img className="brand__mark" src="/assets/img/snaptapp-mark.svg" alt="" width="30" height="30" />
                <span>Snaptapp</span>
                <span className="brand__sub">Studio</span>
              </a>
              <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
                <span></span>
              </button>
              <nav className="nav" id="primary-nav" aria-label="Primary">
                <a href="/products/" aria-current="page">Products</a>
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
                  <li>Products</li>
                </ol>
                <h1>Products</h1>
                 <p className="lede">
                   More or Less is live on the web, with iOS and Android versions in development. A
                   second Snaptapp title is also in development.
                 </p>
              </div>
            </section>
      
            <section className="section section--tight">
              <div className="shell">
                <article className="product reveal" id="more-or-less">
                  <div className="product__art">
                    <img src="/assets/img/more-or-less-icon.png" alt="More or Less app icon" width="272" height="272" />
                  </div>
                  <div>
                    <div className="product__title">
                      <h2>More or Less</h2>
                      <span className="badge badge--live"><span className="dot"></span>Live</span>
                    </div>
                    <p className="product__tagline">
                      One fake number. Is the real answer more or less?
                    </p>
                    <p>
                      More or Less is a trivia game built around one simple decision: is the real
                      answer higher or lower than the number on screen? Every round gives you a
                      claim and a believable but incorrect number. Make your call before time runs
                      out, then see the actual figure.
                    </p>
                      <p>
                        Choose from curated topics or enter your own. Curated rounds use a verified
                        fact bank; custom topics are generated on demand and checked before they
                        appear. Want a preview first? Browse{" "}
                        <a href="/questions-with-numerical-answers/">questions with numerical answers</a>{" "}
                        with their real values.
                      </p>

      
                    <dl className="product__meta">
                      <div>
                        <dt>Status</dt>
                        <dd>Live on web</dd>
                      </div>
                      <div>
                        <dt>Mobile</dt>
                        <dd>iOS &amp; Android in development</dd>
                      </div>
                      <div>
                        <dt>Players</dt>
                        <dd>1–10 per room</dd>
                      </div>
                      <div>
                        <dt>Price</dt>
                        <dd>Free to play</dd>
                      </div>
                    </dl>
      
                    <div className="row">
                      <a className="btn btn--primary" href="https://moreorless.snaptapp.us">Play now
                        <svg className="btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <a className="btn btn--ghost" href="/support/">Get help</a>
                    </div>
                  </div>
                </article>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">More or Less</p>
                  <h2>Five ways to play</h2>
                </div>
      
                <div className="grid grid--3 reveal">
                  <div className="card">
                    <h3>Standard</h3>
                    <p>
                      Five rounds on a topic of your choice, with mixed difficulty and fast,
                      normal, or relaxed timing.
                    </p>
                  </div>
                  <div className="card">
                    <h3>Cutthroat</h3>
                    <p>
                      An endless sudden-death run drawn from the full fact bank. One wrong answer
                      ends the run.
                    </p>
                  </div>
                  <div className="card">
                    <h3>Daily Challenge</h3>
                    <p>
                      The same five rounds for everyone each day, with a fixed timer and streak
                      tracking.
                    </p>
                  </div>
                  <div className="card">
                    <h3>Versus 1v1</h3>
                    <p>
                      Challenge another player to the same set of rounds and compare results when
                      both have finished.
                    </p>
                  </div>
                  <div className="card">
                    <h3>Party Room</h3>
                    <p>
                      Up to ten players join the same room and play each round together on a shared
                      clock.
                    </p>
                  </div>
                  <div className="card card--empty">
                    <span className="badge badge--soon">More coming</span>
                    <p className="muted small mt-xs">Additional modes are planned alongside the mobile release.</p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">In development</p>
                  <h2>Next title</h2>
                   <p className="lede">
                     A second Snaptapp title is in development. More details will be shared later.
                   </p>
                </div>
                <p className="reveal">
                  <a className="link-arrow" href="/contact/">Interested in early access? Contact us
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </p>
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
                <li><a href="https://more-or-less-admin.lovable.app">Admin</a></li>
                </ul>
              </div>
            </div>
          </footer>
    </>
  );
}
