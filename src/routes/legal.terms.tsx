import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      {
            "title": "Terms of service — Snaptapp"
      },
      {
            "name": "description",
            "content": "The terms that govern your use of Snaptapp websites and applications, including acceptable use, generated content, purchases, and liability."
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
            "content": "Terms of service — Snaptapp"
      },
      {
            "property": "og:description",
            "content": "The terms that govern your use of Snaptapp websites and applications."
      },
      {
            "property": "og:url",
            "content": "https://snaptapp.us/legal/terms/"
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
            "href": "https://snaptapp.us/legal/terms/"
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
  component: PageLegalTerms,
});

function PageLegalTerms() {
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
                  <li>Legal</li>
                  <li>Terms of service</li>
                </ol>
                <h1>Terms of service</h1>
              </div>
            </section>
      
            <section className="section section--tight reading-section">
              <div className="shell">
                <div className="prose">
                  <ul className="doc-meta">
                    <li>Effective 31 August 2026</li>
                    <li>Last updated 31 August 2026</li>
                    <li>Version 1.0</li>
                  </ul>
      
                  {/* Once the entity is registered, replace "Snaptapp" below with the
                       full legal name and set the governing law in section 14 to the
                       state of formation. Keep both consistent with /legal/privacy/
                       and /company/. */}
                  <p>
                    These terms are an agreement between you and Snaptapp
                    (&ldquo;Snaptapp&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) covering your use
                    of our websites and applications, including{" "}
                    <a href="https://snaptapp.us/">snaptapp.us</a> and{" "}
                    <a href="https://moreorless.snaptapp.us">More or Less</a> (together, the
                    &ldquo;Services&rdquo;). By using the Services you accept these terms. If you
                    do not accept them, do not use the Services.
                  </p>
      
                  <div className="toc" aria-label="Contents">
                    <h2>Contents</h2>
                    <ol>
                      <li><a href="#eligibility">Eligibility</a></li>
                      <li><a href="#accounts">Your account</a></li>
                      <li><a href="#acceptable">Acceptable use</a></li>
                      <li><a href="#your-content">Content you submit</a></li>
                      <li><a href="#generated">Generated content and accuracy</a></li>
                      <li><a href="#ads">Advertising</a></li>
                      <li><a href="#purchases">Purchases and virtual items</a></li>
                      <li><a href="#ip">Our intellectual property</a></li>
                      <li><a href="#copyright">Copyright complaints</a></li>
                      <li><a href="#availability">Availability and changes</a></li>
                      <li><a href="#termination">Suspension and termination</a></li>
                      <li><a href="#warranty">Disclaimer of warranties</a></li>
                      <li><a href="#liability">Limitation of liability</a></li>
                      <li><a href="#law">Governing law and disputes</a></li>
                      <li><a href="#general">General</a></li>
                      <li><a href="#contact">Contact</a></li>
                    </ol>
                  </div>
      
                  <h2 id="eligibility">1. Eligibility</h2>
                  <p>
                    You must be at least 13 years old to use the Services. If the law where you live
                    sets a higher minimum age for agreeing to terms like these or for consenting to
                    data processing, that age applies to you instead. If you are under the age of
                    majority in your jurisdiction, you may only use the Services with the involvement
                    of a parent or legal guardian, who agrees to be bound by these terms.
                  </p>
      
                  <h2 id="accounts">2. Your account</h2>
                  <p>
                    Some features need an account. You agree to give accurate information, to keep
                    your credentials to yourself, and to tell us promptly at{" "}
                    <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> if you think someone
                    else has access. You are responsible for activity under your account.
                  </p>
                  <p>
                    One person, one account. Do not create accounts by automated means, sell or
                    transfer an account, or use someone else's.
                  </p>
                  <p>
                    You can close your account at any time using the process on our{" "}
                    <a href="/support/#delete">support page</a>.
                  </p>
      
                  <h2 id="acceptable">3. Acceptable use</h2>
                  <p>You agree not to:</p>
                  <ul>
                    <li>
                      Break the law, infringe anyone's rights, or use the Services to harass,
                      threaten, or defame anyone
                    </li>
                    <li>
                      Submit topics or content that are hateful, sexually explicit, that target a
                      private individual, or that promote self-harm or violence
                    </li>
                    <li>
                      Cheat, manipulate scores or leaderboards, automate gameplay, or use modified
                      clients
                    </li>
                    <li>
                      Probe, scan, or stress-test our systems without written permission; circumvent
                      rate limits, quotas, attestation, or bot checks
                    </li>
                    <li>
                      Scrape, bulk-download, resell, or redistribute our content, including our fact
                      bank, or use it to train a machine-learning model
                    </li>
                    <li>
                      Reverse engineer, decompile, or attempt to extract source code except to the
                      extent that applicable law expressly permits it
                    </li>
                    <li>
                      Interfere with other players' use of the Services, including in multiplayer
                      rooms
                    </li>
                  </ul>
                  <p>
                    Custom topic input is filtered automatically before anything is generated.
                    Attempting to defeat that filter is a breach of these terms.
                  </p>
      
                  <h2 id="your-content">4. Content you submit</h2>
                  <p>
                    You keep ownership of what you submit — display names, avatars, topics, messages,
                    and feedback. You grant us a worldwide, non-exclusive, royalty-free licence to
                    host, store, reproduce, and display that content solely to operate, secure, and
                    improve the Services, and to display your display name and results to other
                    players where the feature obviously requires it, such as leaderboards and
                    multiplayer rooms.
                  </p>
                  <p>
                    You confirm you have the rights to what you submit. We may remove content that
                    breaches these terms, and we may keep a record of a removal for enforcement
                    purposes.
                  </p>
                  <p>
                    If you send us a suggestion, we may act on it without obligation or payment. We
                    would still like to hear it.
                  </p>
      
                  <h2 id="generated">5. Generated content and accuracy</h2>
                  <p>
                    More or Less draws on a curated fact bank and, for topics outside it, on
                    automatically generated rounds that are grounded against web search and screened
                    by deterministic checks. Those checks reject a lot, but they do not catch
                    everything.
                  </p>
                  <p>
                    <strong>The Services are entertainment. Nothing in them is professional, medical,
                      financial, or legal advice, and no figure presented should be relied on for any
                      decision that matters.</strong
                    >{" "}
                    If you spot something wrong, tell us at{" "}
                    <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> and we will check it.
                  </p>
      
                  <h2 id="ads">6. Advertising</h2>
                  <p>
                    The mobile applications are free to play and supported by advertising. We are not
                    responsible for the content of third-party advertisements or for anything you buy
                    from an advertiser. How advertising affects your data is described in our{" "}
                    <a href="/legal/privacy/#advertising">privacy policy</a>.
                  </p>
      
                  <h2 id="purchases">7. Purchases and virtual items</h2>
                  <p>
                    We do not currently sell anything inside the Services. If we introduce purchases,
                    they will be processed by the Apple App Store, Google Play, or a named payment
                    processor — never by us directly — and the following will apply:
                  </p>
                  <ul>
                    <li>
                      Virtual items and passes are a limited, revocable, non-transferable licence to
                      use a feature. They are not property, they have no cash value, and they cannot
                      be exchanged for money.
                    </li>
                    <li>
                      Refunds are handled by the store that took the payment, under its policy. Where
                      you have a statutory right of withdrawal or refund, that right is unaffected by
                      anything in these terms.
                    </li>
                    <li>
                      Prices may change prospectively. If the Services are discontinued, we will give
                      reasonable notice and will not charge for periods after the shutdown date.
                    </li>
                  </ul>
      
                  <h2 id="ip">8. Our intellectual property</h2>
                  <p>
                    The Services, including their software, design, text, artwork, audio, and the
                    Snaptapp and More or Less names and logos, are owned by us or our licensors and
                    protected by intellectual property law. We grant you a personal, revocable,
                    non-exclusive, non-transferable licence to use the Services for your own
                    non-commercial entertainment, subject to these terms. Nothing else is granted.
                  </p>
      
                  <h2 id="copyright">9. Copyright complaints</h2>
                  <p>
                    If you believe material in the Services infringes your copyright, send a notice to{" "}
                    <a href="mailto:legal@snaptapp.us">legal@snaptapp.us</a> that identifies the work,
                    identifies the material and where it appears, gives your contact details, states
                    that you have a good-faith belief the use is unauthorised and that the information
                    in your notice is accurate, and is signed. We will investigate, remove infringing
                    material where appropriate, and may terminate repeat infringers.
                  </p>
      
                  <h2 id="availability">10. Availability and changes</h2>
                  <p>
                    We aim to keep the Services available but we do not promise uninterrupted service.
                    We may change, suspend, or discontinue features, and we may add or remove game
                    modes. For changes that materially reduce functionality you rely on, we will give
                    reasonable notice where we can.
                  </p>
                  <p>
                    We may update these terms. When we do, we change the effective date at the top of
                    this page, and for material changes we give notice in the product or by email
                    before they take effect. Continuing to use the Services after that means you accept
                    the updated terms.
                  </p>
      
                  <h2 id="termination">11. Suspension and termination</h2>
                  <p>
                    We may suspend or terminate your access if you breach these terms, if your use puts
                    the Services or other users at risk, or if we are required to by law. Where the
                    circumstances allow it, we will tell you why and give you a chance to put it right.
                  </p>
                  <p>
                    You may stop using the Services at any time. Sections 4, 5, 8, 12, 13, 14, and 15
                    survive termination.
                  </p>
      
                  <h2 id="warranty">12. Disclaimer of warranties</h2>
                  <p>
                    The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To
                    the fullest extent permitted by law, we disclaim all warranties, express or
                    implied, including merchantability, fitness for a particular purpose,
                    non-infringement, accuracy, and uninterrupted or error-free operation.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion of certain warranties. Where that is
                    the case, the exclusions above apply only to the extent permitted, and nothing in
                    these terms affects your non-excludable statutory rights as a consumer.
                  </p>
      
                  <h2 id="liability">13. Limitation of liability</h2>
                  <p>
                    To the fullest extent permitted by law, Snaptapp and its partners will not be
                    liable for indirect, incidental, special, consequential, exemplary, or punitive
                    damages, or for lost profits, lost data, or loss of goodwill, arising out of or
                    relating to your use of the Services.
                  </p>
                  <p>
                    Our total aggregate liability for all claims relating to the Services is limited to
                    the greater of the amount you paid us in the twelve months before the claim arose,
                    or twenty-five United States dollars.
                  </p>
                  <p>
                    Nothing in these terms limits liability for death or personal injury caused by
                    negligence, for fraud or fraudulent misrepresentation, or for anything else that
                    cannot lawfully be limited.
                  </p>
      
                  <h2 id="law">14. Governing law and disputes</h2>
                  {/* Set the governing state below to your state of formation once the
                       entity is registered, and keep it consistent with /company/. */}
                  <p>
                    These terms are governed by the laws of the United States and the state in which
                    Snaptapp is established, without regard to conflict-of-laws rules. If you are a
                    consumer resident in the UK, the EEA, or another jurisdiction whose law gives you
                    the right to bring proceedings locally, nothing here removes that right.
                  </p>
                   <p>
                     Before starting formal proceedings, please email{" "}
                     <a href="mailto:legal@snaptapp.us">legal@snaptapp.us</a> with the details so we
                     have an opportunity to resolve the issue informally.
                   </p>
      
                  <h2 id="general">15. General</h2>
                  <p>
                    These terms, together with our{" "}
                    <a href="/legal/privacy/">privacy policy</a>, are the entire agreement between us
                    about the Services. If any provision is found unenforceable, the rest stays in
                    force. Our failure to enforce a provision is not a waiver of it. You may not assign
                    these terms; we may assign them as part of a merger, acquisition, or sale of
                    assets, on notice to you.
                  </p>
      
                  <h2 id="contact">16. Contact</h2>
                  <p>
                    Legal notices: <a href="mailto:legal@snaptapp.us">legal@snaptapp.us</a><br />
                    Support: <a href="mailto:support@snaptapp.us">support@snaptapp.us</a><br />
                    General: <a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a>
                  </p>
                  <p className="muted small">
                    These terms are written in plain language and describe our actual practice. They
                    are not legal advice, and they are not a substitute for review by a qualified
                    lawyer in your jurisdiction.
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
