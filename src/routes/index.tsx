import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
            "title": "Snaptapp — Independent Game Studio"
      },
      {
            "name": "description",
            "content": "Independent game studio building cross-platform games on real-time edge infrastructure. First title: More or Less, a fast party trivia game about numbers."
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
            "content": "Snaptapp — Independent Game Studio"
      },
      {
            "property": "og:description",
            "content": "Independent game studio building cross-platform games on real-time edge infrastructure. First title: More or Less, a fast party trivia game about numbers."
      },
      {
            "property": "og:url",
            "content": "https://snaptapp.us/"
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
            "href": "https://snaptapp.us/"
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
    scripts: [{ type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://snaptapp.us/#organization\",\"name\":\"Snaptapp\",\"alternateName\":\"Snaptapp Studio\",\"url\":\"https://snaptapp.us/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://snaptapp.us/assets/img/icon-512.png\",\"width\":512,\"height\":512},\"image\":\"https://snaptapp.us/assets/img/og-default.png\",\"description\":\"Independent studio shipping its own cross-platform games on real-time edge infrastructure. First title: More or Less.\",\"foundingDate\":\"2026\",\"email\":\"hello@snaptapp.us\",\"address\":{\"@type\":\"PostalAddress\",\"addressCountry\":\"US\"},\"contactPoint\":[{\"@type\":\"ContactPoint\",\"contactType\":\"customer support\",\"email\":\"support@snaptapp.us\",\"availableLanguage\":\"English\"},{\"@type\":\"ContactPoint\",\"contactType\":\"press\",\"email\":\"hello@snaptapp.us\",\"availableLanguage\":\"English\"},{\"@type\":\"ContactPoint\",\"contactType\":\"technical support\",\"email\":\"security@snaptapp.us\",\"availableLanguage\":\"English\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://snaptapp.us/#website\",\"url\":\"https://snaptapp.us/\",\"name\":\"Snaptapp\",\"publisher\":{\"@id\":\"https://snaptapp.us/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"SoftwareApplication\",\"@id\":\"https://snaptapp.us/products/#more-or-less\",\"name\":\"More or Less\",\"url\":\"https://moreorless.snaptapp.us\",\"applicationCategory\":\"GameApplication\",\"applicationSubCategory\":\"Trivia\",\"operatingSystem\":\"Web, iOS, Android\",\"publisher\":{\"@id\":\"https://snaptapp.us/#organization\"},\"description\":\"A party trivia game about numbers: one fake figure, a shot clock, and a room full of people guessing whether the real answer is more or less.\"}]}" }],
  }),
  component: PageIndex,
});

function PageIndex() {
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
              <a href="/products/">Products</a>
              <a href="/company/">Company</a>
              <a href="/support/">Support</a>
              <a href="/contact/">Contact</a>
              <a className="btn btn--primary btn--sm" href="https://moreorless.snaptapp.us">Play More or Less</a>
            </nav>
          </div>
        </header>
      
        <main id="main">
          {/* ---------------- Hero ---------------- */}
          <section className="hero">
            <div className="shell">
              <div className="hero__inner">
                <p className="eyebrow">Independent studio</p>
                <h1>We build and run our own games.</h1>
                <p className="lede">
                  Snaptapp is an independent US game studio building original games for web and
                  mobile. We develop and operate them end to end, from the client to the
                  infrastructure behind it. Our first title, More or Less, is live now.
                </p>
                <div className="row hero__actions">
                  <a className="btn btn--primary" href="/products/">
                    See what we build
                    <svg className="btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="btn btn--secondary" href="https://moreorless.snaptapp.us">Play More or Less</a>
                </div>
      
                <ul className="trust-strip">
                  <li>Founded 2026</li>
                  <li>United States</li>
                  <li>iOS · Android · Web</li>
                  <li>1 product live</li>
                </ul>
              </div>
            </div>
          </section>
      
          {/* ---------------- Products ---------------- */}
          <section className="section section--edge" id="products">
            <div className="shell">
              <div className="section-head reveal">
                <p className="eyebrow">Products</p>
                <h2>What we ship</h2>
                <p className="lede">
                  We would rather run a small number of products properly than announce a
                  catalogue we cannot support. Here is the honest state of the shelf.
                </p>
              </div>
      
              <article className="product reveal">
                <div className="product__art">
                  <img src="/assets/img/more-or-less-icon.png" alt="More or Less app icon" width="272" height="272" loading="lazy" />
                </div>
                <div>
                  <div className="product__title">
                    <h3>More or Less</h3>
                    <span className="badge badge--live"><span className="dot"></span>Live</span>
                  </div>
                  <p className="product__tagline">
                    One fake number. Is the real answer more or less?
                  </p>
                  <p>
                    A party trivia game about numbers. You get a claim and a plausible-looking
                    figure, and a shot clock. Guess whether the real number is higher or lower
                    before it runs out. Play solo, run an endless sudden-death streak, take the
                    daily challenge, or put up to ten phones in the same room and let them
                    fight it out over a synchronised clock.
                  </p>
      
                  <dl className="product__meta">
                    <div>
                      <dt>Platforms</dt>
                      <dd>Web now · iOS &amp; Android in development</dd>
                    </div>
                    <div>
                      <dt>Category</dt>
                      <dd>Party trivia</dd>
                    </div>
                    <div>
                      <dt>Multiplayer</dt>
                      <dd>Up to 10 players per room</dd>
                    </div>
                  </dl>
      
                  <ul className="chips" aria-label="Technology used by More or Less">
                    <li className="chip">Flutter</li>
                    <li className="chip">Cloudflare Durable Objects</li>
                    <li className="chip">Cloudflare Workers</li>
                    <li className="chip">Gemini on Vertex AI</li>
                    <li className="chip">Firebase</li>
                  </ul>
      
                  <p className="mt-md">
                    <a className="link-arrow" href="https://moreorless.snaptapp.us">
                      Play at moreorless.snaptapp.us
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </p>
                </div>
              </article>
      
              <div className="grid grid--2 reveal mt-gap">
                <div className="card card--empty">
                  <span className="badge badge--soon">In development</span>
                  <p className="muted small mt-xs">
                    Product two is in build. We announce things when they are playable, not
                    when they are pitched.
                  </p>
                </div>
                <div className="card card--hover">
                  <h3>Press and licensing</h3>
                  <p>
                    Review builds, interviews, and licensing for Snaptapp titles. We make our
                    own games. We do not take client work.
                  </p>
                  <p className="mt-sm">
                    <a className="link-arrow" href="/contact/">Contact the studio
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
      
          {/* ---------------- How we build ---------------- */}
          <section className="section section--edge" id="approach">
            <div className="shell">
              <div className="section-head reveal">
                <p className="eyebrow">How we build</p>
                <h2>Four decisions we make on every product</h2>
              </div>
      
              <div className="grid grid--2 reveal">
                <div className="card card--hover">
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M10 2v4m0 8v4m-8-8h4m8 0h4M5.6 5.6l2.8 2.8m3.2 3.2 2.8 2.8m0-8.8-2.8 2.8m-3.2 3.2-2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="card__num">01</span>
                  <h3>Real time is the default, not a feature</h3>
                  <p>
                    Shared sessions run on Cloudflare Durable Objects over persistent
                    WebSockets, so every device in a room reads the same clock and the same
                    state. Latency is a design constraint from the first commit, not something
                    we try to patch in at the end.
                  </p>
                </div>
      
                <div className="card card--hover">
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <rect x="2.5" y="2.5" width="7" height="15" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="11.5" y="6.5" width="6" height="11" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="card__num">02</span>
                  <h3>One codebase, every screen</h3>
                  <p>
                    We build in Flutter and ship the same product to iOS, Android, and
                    the web. A fix lands once. A design system holds across phones, tablets,
                    and desktop instead of drifting into three half-maintained forks.
                  </p>
                </div>
      
                <div className="card card--hover">
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M10 2.5 17 6v5c0 3.4-2.9 5.9-7 6.5-4.1-.6-7-3.1-7-6.5V6l7-3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="m7.2 10 2 2 3.6-3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="card__num">03</span>
                  <h3>AI only where it is checkable</h3>
                  <p>
                    Generated content is not shipped on trust. In More or Less, hand-verified
                    facts are served first; anything the model produces is grounded against
                    search, then run through deterministic guardrails that reject it outright
                    if the numbers or the logic do not hold.
                  </p>
                </div>
      
                <div className="card card--hover">
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M10 6.2v4.4l3 1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="card__num">04</span>
                  <h3>Abuse controls before launch</h3>
                  <p>
                    Player-supplied input hits a deterministic content filter at every entry
                    point. Device attestation and bot checks sit in front of the API, and
                    per-account quotas keep one bad actor from spending the whole room's
                    budget.
                  </p>
                </div>
              </div>
            </div>
          </section>
      
          {/* ---------------- Stack ---------------- */}
          <section className="section section--edge" id="stack">
            <div className="shell">
              <div className="section-head reveal">
                <p className="eyebrow">Infrastructure</p>
                <h2>What we run on</h2>
                <p className="lede">
                  Managed, boring, and globally distributed. We would rather spend the budget
                  on the product than on operating our own metal.
                </p>
              </div>
      
              <dl className="stats reveal">
                <div>
                  <dt>Client</dt>
                  <dd>Flutter</dd>
                </div>
                <div>
                  <dt>Edge</dt>
                  <dd>Cloudflare Workers</dd>
                </div>
                <div>
                  <dt>Sessions</dt>
                  <dd>Durable Objects</dd>
                </div>
                <div>
                  <dt>Services</dt>
                  <dd>Google Cloud Run</dd>
                </div>
                <div>
                  <dt>App platform</dt>
                  <dd>Firebase</dd>
                </div>
              </dl>
            </div>
          </section>
      
          {/* ---------------- CTA ---------------- */}
          <section className="section">
            <div className="shell">
              <div className="cta reveal">
                <p className="eyebrow">Get in touch</p>
                <h2>Play, press, or a question about More or Less?</h2>
                <p className="lede">
                  Press, licensing, and support all reach a real person. We answer within two
                  business days.
                </p>
                <div className="row mt-lg">
                  <a className="btn btn--primary" href="/contact/">Contact Snaptapp</a>
                  <a className="btn btn--ghost" href="mailto:hello@snaptapp.us">hello@snaptapp.us</a>
                </div>
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
                <li><a href="/legal/terms/">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
    </>
  );
}
