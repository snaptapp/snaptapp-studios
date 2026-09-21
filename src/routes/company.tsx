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
            "content": "Snaptapp is an independent studio founded in 2026. We ship our own games. Who we are, how we work, and how to reach us."
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
            "content": "An independent studio founded in 2026. We ship our own games. Who we are, how we work, and how to reach us."
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
                 <h1>We build our own games, end to end.</h1>
                <p className="lede">
                  Snaptapp is an independently owned studio, founded in 2026 and operating from
                  the United States. We make our own games. We do not take client work.
                </p>
              </div>
            </section>
      
            <section className="section section--tight">
              <div className="shell">
                <div className="prose">
                  <p>
                    Most mobile software fails in the seams — between the app and the API,
                    between the API and whatever it depends on, between the demo and the tenth
                    person joining at once. Snaptapp exists to own all of those seams on a small
                    number of products rather than hand any of them off.
                  </p>
                  <p>
                    In practice that means we write the client, the backend, and the edge layer
                    ourselves, on managed infrastructure we can reason about. It means we would
                    rather ship one mode that holds up under a full room than five that fall over.
                    And it means we publish what is actually live, on
                    <a href="/products/">one page</a>, rather than a roadmap dressed up as a
                    catalogue.
                  </p>
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">Operating principles</p>
                  <h2>How we actually work</h2>
                </div>
      
                <div className="grid grid--3 reveal">
                  <div className="card">
                    <span className="card__num">01</span>
                    <h3>Ship, then talk</h3>
                     <p>We announce products when people can play them.</p>
                  </div>
                  <div className="card">
                    <span className="card__num">02</span>
                    <h3>Own the whole path</h3>
                     <p>
                       Client, API, edge, and data model are built together, with clear ownership
                       across the entire product.
                     </p>
                  </div>
                  <div className="card">
                    <span className="card__num">03</span>
                    <h3>Verify machine output</h3>
                    <p>
                      Where we use generative models, output is grounded, then checked by
                      deterministic rules that can reject it. Nothing reaches a player on trust.
                    </p>
                  </div>
                  <div className="card">
                    <span className="card__num">04</span>
                    <h3>Collect the minimum</h3>
                    <p>
                      We take the data a product needs to function and say plainly what that is in
                      our <a href="/legal/privacy/">privacy policy</a>. No quiet expansion.
                    </p>
                  </div>
                  <div className="card">
                    <span className="card__num">05</span>
                    <h3>Answer people</h3>
                    <p>
                      Support reaches a human at the studio, not a queue. Two business days,
                      usually much less.
                    </p>
                  </div>
                  <div className="card">
                    <span className="card__num">06</span>
                    <h3>Stay small on purpose</h3>
                    <p>
                      Independently run, short decision path. That is why we can rewrite
                      something in an afternoon when it is wrong.
                    </p>
                  </div>
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">Team</p>
                  <h2>Who you are dealing with</h2>
                </div>
                <div className="grid grid--3 reveal">
                  <div className="card">
                    <h3>Michael T. Anderson</h3>
                    <p className="product__tagline">Founder &amp; Studio Lead</p>
                    <p>Leading engineering, architecture, and game systems at Snaptapp.</p>
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
                  <h2>The facts</h2>
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
                  <h2>Press, licensing, or a question about a title</h2>
                  <p className="lede">
                    Review builds, interviews, and anything about a Snaptapp product.
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
