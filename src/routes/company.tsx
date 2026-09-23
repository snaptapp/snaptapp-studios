import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      {
            "title": "Company — Snaptapp"
      },
      {
            "name": "description",
            "content": "About Snaptapp, an independent US game studio founded in 2026 and creating original games for web and mobile."
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
            "content": "Company — Snaptapp"
      },
      {
            "property": "og:description",
            "content": "About Snaptapp, an independent US game studio founded in 2026 and creating original games for web and mobile."
      },
      {
            "property": "og:url",
            "content": "https://snaptapp.us/company/"
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
            "href": "https://snaptapp.us/company/"
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
  component: PageCompany,
});

function PageCompany() {
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
                <a href="/company/" aria-current="page">Company</a>
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
                  <li>Company</li>
                </ol>
                 <h1>About Snaptapp</h1>
                <p className="lede">
                   Snaptapp is an independent US game studio founded in 2026. We design, build, and
                   operate our own games across web and mobile.
                </p>
              </div>
            </section>
      
            <section className="section section--tight">
              <div className="shell">
                <div className="prose">
                  <p>
                    We keep product development close to the people building it. Game design,
                    client development, backend services, multiplayer systems, and operations are
                    handled within the studio, which lets us make product and technical decisions
                    together.
                  </p>
                  <p>
                    Our first title, More or Less, is live on the web, with iOS and Android versions
                    in development. A second Snaptapp title is also in development.
                  </p>
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">Operating principles</p>
                  <h2>How we work</h2>
                </div>
      
                <div className="grid grid--3 reveal">
                  <div className="card">
                    <span className="card__num">01</span>
                    <h3>Product first</h3>
                     <p>
                       Technical decisions are made around the game and the player experience, not
                       the other way around.
                     </p>
                  </div>
                  <div className="card">
                    <span className="card__num">02</span>
                    <h3>End-to-end ownership</h3>
                     <p>
                       Client, backend, multiplayer systems, and operations are developed together
                       so the product stays coherent across the full stack.
                     </p>
                  </div>
                  <div className="card">
                    <span className="card__num">03</span>
                    <h3>Verify generated content</h3>
                    <p>
                      When generative models are used, their output is grounded and checked before
                      it reaches players.
                    </p>
                  </div>
                  <div className="card">
                    <span className="card__num">04</span>
                    <h3>Collect only what's needed</h3>
                    <p>
                      We collect the data needed to operate the product and explain what we collect
                      in our <a href="/legal/privacy/">privacy policy</a>.
                    </p>
                  </div>
                  <div className="card">
                    <span className="card__num">05</span>
                    <h3>Direct support</h3>
                    <p>
                      Support requests go directly to the studio, with a two-business-day response
                      target.
                    </p>
                  </div>
                  <div className="card">
                    <span className="card__num">06</span>
                    <h3>Stay lightweight</h3>
                    <p>
                      A small team and managed infrastructure keep the studio flexible and
                      operating costs predictable.
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">Team</p>
                  <h2>The team</h2>
                </div>
                <div className="grid grid--3 reveal">
                  <div className="card">
                    <h3>Michael T. Anderson</h3>
                    <p className="product__tagline">Founder &amp; Studio Lead</p>
                    <p>Leads engineering, architecture, and game systems at Snaptapp.</p>
                    <p className="mt-sm">
                      <a className="link-arrow" href="mailto:michael@snaptapp.us">
                        michael@snaptapp.us
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </p>
                    <p className="mt-sm">
                      <a className="link-arrow" href="https://www.linkedin.com/in/andersonmichaelt/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">Company details</p>
                  <h2>Company information</h2>
                </div>
      
                {/* Once the entity is formally registered, add two rows here:
                     "Legal entity" (e.g. Snaptapp LLC) and "Jurisdiction"
                     (e.g. Washington, United States). Keep them consistent with the
                     same values in /legal/privacy/ and /legal/terms/. */}
                <div className="prose reveal">
                  <table>
                    <caption className="visually-hidden">
                      Snaptapp company details
                    </caption>
                    <tbody>
                      <tr>
                        <th scope="row">Studio name</th>
                        <td>Snaptapp</td>
                      </tr>
                      <tr>
                        <th scope="row">Founded</th>
                        <td>2026</td>
                      </tr>
                      <tr>
                        <th scope="row">Ownership</th>
                        <td>Independent, privately held by its founding partners</td>
                      </tr>
                      <tr>
                        <th scope="row">Operating region</th>
                        <td>United States</td>
                      </tr>
                      <tr>
                        <th scope="row">Primary domain</th>
                        <td><a href="https://snaptapp.us/">snaptapp.us</a></td>
                      </tr>
                      <tr>
                        <th scope="row">General enquiries</th>
                        <td><a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a></td>
                      </tr>
                      <tr>
                        <th scope="row">Product support</th>
                        <td><a href="mailto:support@snaptapp.us">support@snaptapp.us</a></td>
                      </tr>
                      <tr>
                        <th scope="row">Security reports</th>
                        <td>
                          <a href="mailto:security@snaptapp.us">security@snaptapp.us</a> —
                          see <a href="/.well-known/security.txt">security.txt</a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Live products</th>
                        <td><a href="/products/#more-or-less">More or Less</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
      
            <section className="section">
              <div className="shell">
                <div className="cta reveal">
                  <p className="eyebrow">Get in touch</p>
                  <h2>Contact the studio</h2>
                  <p className="lede">
                    For press, licensing, partnerships, or questions about Snaptapp and its games.
                  </p>
                  <div className="row mt-lg">
                    <a className="btn btn--primary" href="/contact/">Contact Snaptapp</a>
                    <a className="btn btn--ghost" href="/support/">Product support</a>
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
