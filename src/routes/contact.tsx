import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
            "title": "Contact — Snaptapp"
      },
      {
            "name": "description",
            "content": "Contact Snaptapp. Support, press, licensing, privacy requests, and security reports. Each channel has a direct address and a stated response time."
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
            "content": "Contact — Snaptapp"
      },
      {
            "property": "og:description",
            "content": "Support, press, licensing, privacy requests, and security reports. Each channel has a direct address and a stated response time."
      },
      {
            "property": "og:url",
            "content": "https://snaptapp.us/contact/"
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
            "href": "https://snaptapp.us/contact/"
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
  component: PageContact,
});

function PageContact() {
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
                <a href="/contact/" aria-current="page">Contact</a>
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
                  <li>Contact</li>
                </ol>
                <h1>Contact Snaptapp</h1>
                <p className="lede">
                  Every address below goes to the studio and is read by a person. Pick the one
                  that matches what you need and you will skip a routing step.
                </p>
              </div>
            </section>
      
            <section className="section section--tight">
              <div className="shell">
                <div className="contact-grid reveal">
                  <div className="card contact-card">
                     <p className="contact-card__label">General &amp; licensing</p>
                    <a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a>
                    <p>
                       Licensing for Snaptapp titles and anything else about the studio. Replies
                       within two business days.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                    <p className="contact-card__label">Product support</p>
                    <a href="mailto:support@snaptapp.us">support@snaptapp.us</a>
                    <p>
                      Bugs, account problems, billing questions. Check
                      <a href="/support/">the support page</a> first — it covers the common ones.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                     <p className="contact-card__label">Privacy &amp; data</p>
                    <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a>
                    <p>
                      Access, correction, or deletion of your personal data. We respond within 30
                      days, usually far sooner.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                     <p className="contact-card__label">Security</p>
                    <a href="mailto:security@snaptapp.us">security@snaptapp.us</a>
                    <p>
                      Vulnerability reports. See
                      <a href="/.well-known/security.txt">security.txt</a> for our policy and
                      acknowledgement window.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                    <p className="contact-card__label">Press &amp; media</p>
                    <a href="mailto:press@snaptapp.us">press@snaptapp.us</a>
                    <p>
                      Interviews, review builds, and asset requests. Tell us your deadline and we
                      will work to it.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                     <p className="contact-card__label">Legal</p>
                    <a href="mailto:legal@snaptapp.us">legal@snaptapp.us</a>
                    <p>
                      Contracts, copyright, and formal correspondence relating to our
                      <a href="/legal/terms/">terms of service</a>.
                    </p>
                  </div>
                </div>
      
                <div className="callout reveal mt-lg">
                  <strong>Response times.</strong> Support and general enquiries: two business
                  days. Security reports: acknowledged within three business days. Privacy
                  requests: within 30 days, as required by applicable law. If you have not heard
                  back in that window, resend to
                  <a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a> — something has gone
                  wrong on our side and we want to know.
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">Before you write</p>
                  <h2>Things that will get you a faster answer</h2>
                </div>
                <div className="prose reveal">
                  <ul>
                    <li>
                      <strong>Which product.</strong> Right now that is More or Less, but say so
                      anyway.
                    </li>
                    <li>
                      <strong>Platform and version.</strong> Web browser and version, or the phone
                      model and OS version.
                    </li>
                    <li>
                      <strong>What you expected and what happened.</strong> One line each is
                      plenty.
                    </li>
                    <li>
                      <strong>A screenshot.</strong> For anything visual, this saves an entire
                      round trip.
                    </li>
                    <li>
                      <strong>Your account email</strong> if the issue involves your profile,
                      streak, or match history — but never your password. We will never ask for it.
                    </li>
                  </ul>
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
