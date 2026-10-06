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
            "content": "Contact Snaptapp for support, press, licensing, privacy, security, and legal enquiries."
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
            "content": "Contact Snaptapp for support, press, licensing, privacy, security, and legal enquiries."
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
                  Choose the contact address that best matches your request.
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
                      General questions and licensing enquiries about Snaptapp and its games.
                      Typical response time is two business days.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                    <p className="contact-card__label">Product support</p>
                    <a href="mailto:support@snaptapp.us">support@snaptapp.us</a>
                    <p>
                      Bugs, account issues, and gameplay support. The{" "}
                      <a href="/support/">support page</a> covers common questions and
                      troubleshooting.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                     <p className="contact-card__label">Privacy &amp; data</p>
                    <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a>
                    <p>
                      Requests to access, correct, or delete personal data. We respond within 30
                      days.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                     <p className="contact-card__label">Security</p>
                    <a href="mailto:security@snaptapp.us">security@snaptapp.us</a>
                    <p>
                      Vulnerability reports and security-related enquiries. See{" "}
                      <a href="/.well-known/security.txt">security.txt</a> for reporting
                      guidance.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                    <p className="contact-card__label">Press &amp; media</p>
                    <a href="mailto:press@snaptapp.us">press@snaptapp.us</a>
                    <p>
                      Interview requests, review access, media enquiries, and press assets.
                      Include your deadline when relevant.
                    </p>
                  </div>
      
                  <div className="card contact-card">
                     <p className="contact-card__label">Legal</p>
                    <a href="mailto:legal@snaptapp.us">legal@snaptapp.us</a>
                    <p>
                      Contracts, copyright matters, and formal legal correspondence relating to
                      Snaptapp's <a href="/legal/terms/">terms of service</a>.
                    </p>
                  </div>
                </div>
      
                <div className="callout reveal mt-lg">
                  <strong>Response times.</strong> General and support enquiries are typically
                  answered within two business days. Security reports are acknowledged within
                  three business days. Privacy requests are handled within 30 days.
                </div>
              </div>
            </section>
      
            <section className="section section--edge">
              <div className="shell">
                <div className="section-head reveal">
                  <p className="eyebrow">Before you write</p>
                  <h2>What to include</h2>
                </div>
                <div className="prose reveal">
                  <ul>
                    <li>
                      <strong>Product.</strong> Tell us which Snaptapp product the request is
                      about.
                    </li>
                    <li>
                      <strong>Platform and version.</strong> Include your browser and version,
                      or your device model and OS version.
                    </li>
                    <li>
                      <strong>What happened.</strong> A short description of what you expected
                      and what happened instead.
                    </li>
                    <li>
                      <strong>Screenshot.</strong> Include one when it helps show the issue.
                    </li>
                    <li>
                      <strong>Account email.</strong> Include it for account-specific issues,
                      but never send your password.
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
