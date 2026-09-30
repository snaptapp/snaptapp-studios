import { createFileRoute } from "@tanstack/react-router";

import { trackEvent } from "@/lib/analytics-consent";
import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
            "title": "Snaptapp — Independent Game Studio"
      },
      {
            "name": "description",
            "content": "Independent game studio creating original games for web and mobile. Our first title, More or Less, is live on the web."
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
            "content": "Independent game studio creating original games for web and mobile. Our first title, More or Less, is live on the web."
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
    scripts: [{ type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://snaptapp.us/#organization\",\"name\":\"Snaptapp\",\"alternateName\":\"Snaptapp Studio\",\"url\":\"https://snaptapp.us/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://snaptapp.us/assets/img/icon-512.png\",\"width\":512,\"height\":512},\"image\":\"https://snaptapp.us/assets/img/og-default.png\",\"description\":\"Independent game studio creating original games for web and mobile. First title: More or Less.\",\"foundingDate\":\"2026\",\"email\":\"hello@snaptapp.us\",\"address\":{\"@type\":\"PostalAddress\",\"addressCountry\":\"US\"},\"contactPoint\":[{\"@type\":\"ContactPoint\",\"contactType\":\"customer support\",\"email\":\"support@snaptapp.us\",\"availableLanguage\":\"English\"},{\"@type\":\"ContactPoint\",\"contactType\":\"press\",\"email\":\"press@snaptapp.us\",\"availableLanguage\":\"English\"},{\"@type\":\"ContactPoint\",\"contactType\":\"technical support\",\"email\":\"security@snaptapp.us\",\"availableLanguage\":\"English\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://snaptapp.us/#website\",\"url\":\"https://snaptapp.us/\",\"name\":\"Snaptapp\",\"publisher\":{\"@id\":\"https://snaptapp.us/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"SoftwareApplication\",\"@id\":\"https://snaptapp.us/products/#more-or-less\",\"name\":\"More or Less\",\"url\":\"https://moreorless.snaptapp.us\",\"applicationCategory\":\"GameApplication\",\"applicationSubCategory\":\"Trivia\",\"operatingSystem\":\"Web, iOS, Android\",\"publisher\":{\"@id\":\"https://snaptapp.us/#organization\"},\"description\":\"A party trivia game about numbers: one fake figure, a shot clock, and a room full of people guessing whether the real answer is more or less.\"}]}" }],
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
              <a className="btn btn--primary btn--sm" href="https://moreorless.snaptapp.us" onClick={() => trackEvent("outbound_click", { destination: "moreorless.snaptapp.us", location: "header" })}>Play More or Less</a>
            </nav>
          </div>
        </header>
      
        <main id="main">
          {/* ---------------- Hero ---------------- */}
          <section className="hero">
            <div className="shell">
              <div className="hero__inner">
                <p className="eyebrow">Independent game studio</p>
                <h1>Original games for web and mobile.</h1>
                <p className="lede">
                  Snaptapp is an independent US game studio. We design, build, and operate our own
                  games across web and mobile. Our first title, More or Less, is live now.
                </p>
                <div className="row hero__actions">
                  <a className="btn btn--primary" href="/products/" onClick={() => trackEvent("cta_click", { cta: "explore_games", location: "hero" })}>
                    Explore our games
                    <svg className="btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="btn btn--secondary" href="https://moreorless.snaptapp.us" onClick={() => trackEvent("outbound_click", { destination: "moreorless.snaptapp.us", location: "hero" })}>Play More or Less</a>
                </div>

              </div>
            </div>
          </section>
      
          {/* ---------------- Products ---------------- */}
          <section className="section section--edge" id="products">
            <div className="shell">
              <div className="section-head reveal">
                <p className="eyebrow">Products</p>
                <h2>Our games</h2>
                <p className="lede">
                  More or Less is live on the web, with iOS and Android versions in development. A
                  second Snaptapp title is also in development.
                </p>
              </div>
      
              <article className="product reveal">
                <div className="product__media">
                  <div className="product__art">
                    <img src="/assets/img/more-or-less-icon.png" alt="More or Less app icon" width="272" height="272" loading="lazy" />
                  </div>
                  <img
                    className="product__screenshot"
                    src="/assets/img/more-or-less-home.png"
                    alt="More or Less game home screen showing play modes"
                    loading="lazy"
                  />
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
                    More or Less is a fast trivia game built around one simple question: is the
                    real answer higher or lower? Every round gives you a claim and a believable
                    but incorrect number. Make your call before time runs out, then see the actual
                    figure. Play solo, take on the daily challenge, or compete with up to ten
                    players in a room.
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
      
                  <p className="mt-md">
                    <a className="link-arrow" href="https://moreorless.snaptapp.us" onClick={() => trackEvent("outbound_click", { destination: "moreorless.snaptapp.us", location: "product_card" })}>
                      Play at moreorless.snaptapp.us
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </p>
                  <p className="mt-xs">
                    <a className="link-arrow" href="/questions-with-numerical-answers/">
                      Try example questions with numerical answers
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
                    A second Snaptapp title is in development. Details will be announced later.
                  </p>
                </div>
                <div className="card card--hover">
                  <h3>Press and licensing</h3>
                  <p>
                    For review access, interviews, licensing, or media requests, contact the
                    studio.
                  </p>
                  <p className="mt-sm">
                    <a className="link-arrow" href="/contact/" onClick={() => trackEvent("cta_click", { cta: "contact_studio", location: "products_section" })}>Contact the studio
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
                <h2>How the games are built</h2>
              </div>
      
              <div className="grid grid--2 reveal">
                <div className="card card--hover">
                  <div className="card__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M10 2v4m0 8v4m-8-8h4m8 0h4M5.6 5.6l2.8 2.8m3.2 3.2 2.8 2.8m0-8.8-2.8 2.8m-3.2 3.2-2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="card__num">01</span>
                  <h3>Real-time multiplayer</h3>
                  <p>
                    Party Room sessions use Cloudflare Durable Objects and WebSockets to keep
                    every player on the same round and clock.
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
                  <h3>Cross-platform development</h3>
                  <p>
                    More or Less is built in Flutter for web, iOS, and Android, keeping core
                    gameplay and interface code shared across platforms.
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
                  <h3>Generated content, checked before play</h3>
                  <p>
                    Curated rounds come from a verified fact bank. Custom topics can be generated
                    on demand, with search grounding and automated checks before a round is shown.
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
                  <h3>Safety and reliability</h3>
                  <p>
                    Content filtering, device attestation, bot protection, and account-level
                    limits help protect the service from abuse.
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
                  Our current stack uses managed services so a small team can run the product
                  reliably without maintaining unnecessary infrastructure.
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
                <h2>Questions, press, or support?</h2>
                <p className="lede">
                  Use the contact page to reach the right inbox. Support and general enquiries are
                  typically answered within two business days.
                </p>
                <div className="row mt-lg">
                  <a className="btn btn--primary" href="/contact/" onClick={() => trackEvent("cta_click", { cta: "contact_snaptapp", location: "footer_cta" })}>Contact Snaptapp</a>
                  <a className="btn btn--ghost" href="mailto:hello@snaptapp.us" onClick={() => trackEvent("cta_click", { cta: "email_hello", location: "footer_cta" })}>hello@snaptapp.us</a>
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
                  <li><a href="https://moreorless.snaptapp.us" onClick={() => trackEvent("outbound_click", { destination: "moreorless.snaptapp.us", location: "footer" })}>More or Less</a></li>
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
              </ul>
            </div>
          </div>
        </footer>
    </>
  );
}
