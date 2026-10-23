import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      {
            "title": "Privacy policy — Snaptapp"
      },
      {
            "name": "description",
            "content": "How Snaptapp collects, uses, shares, and retains personal data across its products, including the processors we rely on and how to exercise your rights."
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
            "content": "Privacy policy — Snaptapp"
      },
      {
            "property": "og:description",
            "content": "How Snaptapp collects, uses, shares, and retains personal data across its products."
      },
      {
            "property": "og:url",
            "content": "https://snaptapp.us/legal/privacy/"
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
            "href": "https://snaptapp.us/legal/privacy/"
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
  component: PageLegalPrivacy,
});

function PageLegalPrivacy() {
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
          <section className="page-head">
            <div className="shell">
              <ol className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Legal</li>
                <li>Privacy policy</li>
              </ol>
              <h1>Privacy policy</h1>
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
      
                {/* Once the entity is registered, replace "Snaptapp" in the first
                       sentence below with the full legal name, e.g.
                       "Snaptapp LLC, a Washington limited liability company". */}
                <p>
                  This policy explains what personal data Snaptapp LLC, a Washington limited liability company (&ldquo;Snaptapp&rdquo;,
                  &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when you use our websites and
                  applications, why we collect it, who processes it on our behalf, and what you
                  can do about it. It applies to{" "}
                  <a href="https://snaptapp.us/">snaptapp.us</a>, to{" "}
                  <a href="https://moreorless.snaptapp.us">More or Less</a>, and to any future
                  Snaptapp product that links to this page.
                </p>
      
                <div className="callout">
                  <strong>The short version.</strong> We collect the account details you give
                  us, the gameplay results the product needs to function, and technical
                  diagnostics. On mobile we serve advertising through Google AdMob, which uses a
                  device advertising identifier. We do not sell your personal data. You can ask
                  us to delete everything at any time and we will.
                </div>
      
                <div className="toc" aria-label="Contents">
                  <h2>Contents</h2>
                  <ol>
                    <li><a href="#controller">Who is responsible</a></li>
                    <li><a href="#collect">Data we collect</a></li>
                    <li><a href="#why">Why we use it</a></li>
                    <li><a href="#bases">Legal bases</a></li>
                    <li><a href="#processors">Who we share it with</a></li>
                    <li><a href="#advertising">Advertising</a></li>
                    <li><a href="#ai">Custom topics and generated content</a></li>
                    <li><a href="#staff">Staff sign-in and admin tools</a></li>
                    <li><a href="#retention">How long we keep it</a></li>
                    <li><a href="#rights">Your rights</a></li>
                    <li><a href="#children">Children</a></li>
                    <li><a href="#transfers">International transfers</a></li>
                    <li><a href="#security">Security</a></li>
                    <li><a href="#changes">Changes</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ol>
                </div>
      
                <h2 id="controller">1. Who is responsible</h2>
                <p>
                  Snaptapp is the data controller for the personal data described in this policy.
                  For any privacy matter, write to{" "}
                  <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a>. We do not
                  currently operate in a jurisdiction that requires us to appoint a data
                  protection officer; the founding partners handle privacy requests directly.
                </p>
      
                <h2 id="collect">2. Data we collect</h2>
      
                <h3>Account data</h3>
                <p>
                  If you create an account, we collect the email address and password hash held by
                  our authentication provider, or — if you sign in with Google — the email
                  address, display name, and profile image URL that Google returns. We also store
                  the display name you choose in the product and any avatar you upload.
                </p>
      
                <h3>Gameplay data</h3>
                <p>
                  Scores, correct and incorrect answers, response times, streaks, daily challenge
                  results, head-to-head challenge outcomes, leaderboard standings, room membership
                  while a multiplayer session is active, and the topics you enter. This is the data
                  the product is made of; without it there is no streak to continue and no
                  leaderboard to appear on.
                </p>
      
                <h3>Device and technical data</h3>
                <p>
                  Device or browser model, operating system version, app version, language and
                  region settings, coarse location inferred from your IP address at the network
                  level, crash reports and stack traces, performance traces such as start-up and
                  network timings, and diagnostic logs. IP addresses are processed by our edge
                  network for delivery, rate limiting, and abuse prevention.
                </p>
      
                <h3>Advertising identifiers</h3>
                <p>
                  On iOS and Android only, the advertising SDK we use may access your device
                  advertising identifier and limited device signals in order to select and measure
                  ads. See <a href="#advertising">section 6</a>. The web version of More or Less
                  does not serve advertising.
                </p>
      
                <h3>Anti-abuse signals</h3>
                <p>
                  We use device attestation and bot-detection services to confirm that requests
                  come from a genuine app or browser rather than a script. These produce a signed
                  token and a pass or fail result; they are not used to build a profile of you.
                </p>
      
                <h3>What we do not collect</h3>
                <p>
                  We do not collect precise GPS location, contacts, photos beyond an avatar you
                  deliberately upload, microphone or camera input, health data, or biometric data.
                  We do not ask for payment card numbers — see{" "}
                  <a href="#processors">section 5</a>.
                </p>
      
                <h2 id="why">3. Why we use it</h2>
                <table>
                  <caption className="visually-hidden">
                    Purposes for processing personal data
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Purpose</th>
                      <th scope="col">Data used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create and authenticate your account</td>
                      <td>Account data</td>
                    </tr>
                    <tr>
                      <td>Run games, rooms, streaks, and leaderboards</td>
                      <td>Account data, gameplay data</td>
                    </tr>
                    <tr>
                      <td>Generate rounds for a custom topic you type</td>
                      <td>The topic text you entered</td>
                    </tr>
                    <tr>
                      <td>Diagnose crashes and fix defects</td>
                      <td>Device and technical data</td>
                    </tr>
                    <tr>
                      <td>Measure which features are used, in aggregate</td>
                      <td>Analytics events, device data</td>
                    </tr>
                    <tr>
                      <td>Prevent abuse, cheating, and quota exhaustion</td>
                      <td>Anti-abuse signals, IP address, account identifier</td>
                    </tr>
                    <tr>
                      <td>Serve and measure advertising on mobile</td>
                      <td>Advertising identifier, device signals</td>
                    </tr>
                    <tr>
                      <td>Answer your support and privacy requests</td>
                      <td>Your email and the contents of your message</td>
                    </tr>
                    <tr>
                      <td>Meet legal and tax obligations</td>
                      <td>Transaction records, where applicable</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  We do not use your personal data to train our own machine-learning models, and
                  we do not make automated decisions that have legal effects on you.
                </p>
      
                <h2 id="bases">4. Legal bases</h2>
                <p>
                  If you are in the United Kingdom, the European Economic Area, or another region
                  with equivalent law, we rely on the following bases:
                </p>
                <ul>
                  <li>
                    <strong>Contract</strong> — providing the product you asked for: accounts,
                    gameplay, rooms, leaderboards, and support.
                  </li>
                  <li>
                    <strong>Legitimate interests</strong> — keeping the service secure and
                    available, preventing abuse, fixing defects, and understanding aggregate
                    feature use.
                  </li>
                  <li>
                    <strong>Consent</strong> — personalised advertising and any optional analytics
                    where consent is required. You can withdraw it at any time in your device
                    settings or by contacting us.
                  </li>
                  <li>
                    <strong>Legal obligation</strong> — retaining records we are required to keep.
                  </li>
                </ul>
      
                <h2 id="processors">5. Who we share it with</h2>
                <p>
                  We do not sell personal data and we do not share it for cross-context behavioural
                  advertising outside the advertising described in{" "}
                  <a href="#advertising">section 6</a>. We use the following processors and service
                  providers, each under contract and each limited to the purpose listed:
                </p>
                <table>
                  <caption className="visually-hidden">
                    Processors and service providers
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Provider</th>
                      <th scope="col">What it does for us</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Google Cloud
                        (<a href="https://cloud.google.com/terms/cloud-privacy-notice" rel="noopener">privacy</a>)
                      </td>
                      <td>
                        Authentication, profile and gameplay database, file storage, analytics,
                        crash reporting and performance monitoring on mobile, remote
                        configuration, in-app messaging, and app attestation
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Google Cloud — Vertex AI
                        (<a href="https://cloud.google.com/terms/cloud-privacy-notice" rel="noopener">privacy</a>)
                      </td>
                      <td>
                        Generating trivia rounds from a custom topic, and hosting the service that
                        does it
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Lovable
                        (<a href="https://lovable.dev/privacy" rel="noopener">privacy</a>)
                      </td>
                      <td>
                        Hosting this website, staff account sign-in, and routing staff requests to
                        AI models for the internal insights tool
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Google AdMob
                        (<a href="https://support.google.com/admob/answer/6128543" rel="noopener">policy</a>)
                      </td>
                      <td>Serving and measuring advertising in the mobile apps</td>
                    </tr>
                    <tr>
                      <td>
                        Cloudflare
                        (<a href="https://www.cloudflare.com/privacypolicy/" rel="noopener">privacy</a>)
                      </td>
                      <td>
                        Website and API delivery, edge caching, real-time multiplayer sessions,
                        bot detection, cookieless website analytics, and email routing for our
                        published addresses
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Sentry
                        (<a href="https://sentry.io/privacy/" rel="noopener">privacy</a>)
                      </td>
                      <td>Crash and error reporting for the web version</td>
                    </tr>
                    <tr>
                      <td>
                        Bugfender
                        (<a href="https://bugfender.com/privacy-policy/" rel="noopener">privacy</a>)
                      </td>
                      <td>Remote diagnostic logging from the app during faults</td>
                    </tr>
                    <tr>
                      <td>
                        Apple and Google app stores
                      </td>
                      <td>
                        Distributing the mobile apps and, where a purchase is offered, processing
                        payment. We never receive your card details
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  We may also disclose data where we are legally required to, to enforce our{" "}
                  <a href="/legal/terms/">terms of service</a>, or to protect the rights and
                  safety of our users. If Snaptapp is ever involved in a merger or acquisition, we
                  will give notice on this page before personal data becomes subject to a different
                  policy.
                </p>
      
                <h2 id="advertising">6. Advertising</h2>
                <p>
                  More or Less is free to play. The iOS and Android builds show interstitial and
                  rewarded advertising supplied by <strong>Google AdMob</strong> to cover running
                  costs. The web version does not serve ads.
                </p>
                <p>You control this:</p>
                <ul>
                  <li>
                    <strong>iOS</strong> — Settings &rsaquo; Privacy &amp; Security &rsaquo;
                    Tracking. Declining App Tracking Transparency limits ads to non-personalised.
                  </li>
                  <li>
                    <strong>Android</strong> — Settings &rsaquo; Google &rsaquo; Ads, where you can
                    delete or opt out of the advertising ID.
                  </li>
                  <li>
                    <strong>Anywhere</strong> — Google's own controls at{" "}
                    <a href="https://adssettings.google.com/" rel="noopener">adssettings.google.com</a>.
                  </li>
                </ul>
                <p>
                  Opting out does not remove advertising; it makes the advertising you see
                  non-personalised.
                </p>
      
                <h2 id="ai">7. Custom topics and generated content</h2>
                <p>
                  When you type a custom topic, that text is checked by a content filter and, if it
                  is not already covered by our curated fact bank, sent to a Google generative model
                  on Vertex AI together with instructions to produce trivia rounds. The model is
                  also permitted to run web searches to ground the numbers it returns.
                </p>
                <p>
                  We send the topic text and nothing about your identity. We do not send your email
                  address, account identifier, or device identifiers to the model. Generated rounds
                  may be cached at our edge and reused for other players who enter the same topic.
                </p>
                <p>
                  Generated facts are checked automatically and rejected when they fail our rules,
                  but no automated check is perfect. If you spot an error, please{" "}
                  <a href="/support/#more-or-less">tell us</a>.
                </p>
      
                <h2 id="staff">8. Staff sign-in and admin tools</h2>
                <p>
                  The sign-in page on this website is for Snaptapp staff only. Accounts can only be
                  created with a confirmed @snaptapp.us email address. We store the email address,
                  a securely hashed password, and sign-in records needed to keep the account secure.
                  Players do not sign in here, and nothing about a player account is stored on this
                  website.
                </p>
                <p>
                  After signing in, staff use our admin portal at ops.snaptapp.us to manage game
                  content, review player reports, and view aggregate statistics. Access requires an
                  admin role, and the portal processes player data only as described in this policy.
                </p>
                <p>
                  The AI insights tool in the admin portal lets staff enter a date range and
                  aggregate click counts for parts of this website. Those totals are sent to an AI
                  model to summarize trends and suggest improvements. The tool does not send
                  personal data, and click counts are only collected from visitors who accept
                  analytics cookies.
                </p>

                <h2 id="retention">8. How long we keep it</h2>
                <table>
                  <caption className="visually-hidden">
                    Retention periods
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Data</th>
                      <th scope="col">Kept for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Account and profile</td>
                      <td>Until you delete your account</td>
                    </tr>
                    <tr>
                      <td>Gameplay history, streaks, leaderboard entries</td>
                      <td>Until you delete your account</td>
                    </tr>
                    <tr>
                      <td>Crash reports and performance traces</td>
                      <td>Up to 90 days</td>
                    </tr>
                    <tr>
                      <td>Diagnostic logs</td>
                      <td>Up to 30 days</td>
                    </tr>
                    <tr>
                      <td>Cached generated rounds</td>
                      <td>Up to 30 days, and not linked to any account</td>
                    </tr>
                    <tr>
                      <td>Support and privacy correspondence</td>
                      <td>Up to 24 months</td>
                    </tr>
                    <tr>
                      <td>Records required by law</td>
                      <td>The statutory period and no longer</td>
                    </tr>
                  </tbody>
                </table>
      
                <h2 id="rights">9. Your rights</h2>
                <p>Depending on where you live, you have some or all of the following rights:</p>
                <ul>
                  <li>Know what personal data we hold and get a copy of it</li>
                  <li>Correct data that is wrong</li>
                  <li>Delete your data</li>
                  <li>Restrict or object to certain processing</li>
                  <li>Withdraw consent you previously gave</li>
                  <li>Receive your data in a portable format</li>
                  <li>Not be discriminated against for exercising any of these rights</li>
                </ul>
                <p>
                  To exercise any of them, email{" "}
                  <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a> from the address on
                  your account. The step-by-step process for access and deletion is on our{" "}
                  <a href="/support/#account">support page</a>. We respond within 30 days. There is
                  no charge, and we will not ask you to create an account in order to make a
                  request.
                </p>
                <p>
                  California residents: we do not sell or share personal information as those terms
                  are defined by the CCPA as amended by the CPRA, and we do not process sensitive
                  personal information for the purpose of inferring characteristics. You may use an
                  authorised agent, and we will verify their authority before acting.
                </p>
                 <p>
                   If you are in the UK or EEA and you think we have got this wrong, you can complain
                   to your national supervisory authority.
                 </p>
      
                <h2 id="children">10. Children</h2>
                <p>
                  Our products are not directed to children under 13, and we do not knowingly
                  collect personal data from them. Where local law sets a higher age for consent to
                  data processing — 16 in parts of the EEA — that age applies instead. If you believe
                  a child has given us personal data, email{" "}
                  <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a> and we will delete the
                  account and its data promptly.
                </p>
      
                <h2 id="transfers">11. International transfers</h2>
                <p>
                  We operate from the United States and our providers run globally distributed
                  infrastructure, so your data may be processed outside your country. Where data
                  leaves the UK or EEA, our providers rely on the European Commission's standard
                  contractual clauses or another approved transfer mechanism. You can ask us which
                  one applies to a particular provider.
                </p>
      
                <h2 id="security">12. Security</h2>
                <p>
                  All traffic to our sites and APIs is encrypted in transit with TLS. Access to
                  production data is limited to the founding partners and protected by
                  multi-factor authentication. Server-side rules restrict every account to reading
                  and writing only its own records, and requests are attested and rate limited before
                  they reach our services.
                </p>
                <p>
                  No system is perfect. If you find a weakness, please report it to{" "}
                  <a href="mailto:security@snaptapp.us">security@snaptapp.us</a> — our policy is at{" "}
                  <a href="/.well-known/security.txt">/.well-known/security.txt</a>. If a breach ever
                  affects your personal data, we will notify you and any required regulator within the
                  legally mandated timeframe.
                </p>
      
                <h2 id="changes">13. Changes</h2>
                <p>
                  When this policy changes we update the effective date and the version at the top of
                  this page. For changes that materially reduce your rights or expand what we collect,
                  we will give notice in the product or by email before they take effect. Previous
                  versions are available on request.
                </p>
      
                <h2 id="contact">14. Contact</h2>
                <p>
                  Privacy and data requests:{" "}
                  <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a><br />
                  General enquiries: <a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a><br />
                  Security: <a href="mailto:security@snaptapp.us">security@snaptapp.us</a>
                </p>
                <p className="muted small">
                  This policy is provided in good faith and describes our actual practice. It is not
                  legal advice, and it is not a substitute for review by a qualified lawyer in your
                  jurisdiction.
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
                <li><a href="https://ops.snaptapp.us/admin">Admin</a></li>
              </ul>
            </div>
          </div>
        </footer>
    </>
  );
}
