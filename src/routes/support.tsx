import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      {
            "title": "Support — Snaptapp"
      },
      {
            "name": "description",
            "content": "Support for Snaptapp products. Troubleshooting for More or Less, how to request your data, and how to delete your account."
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
            "content": "Support — Snaptapp"
      },
      {
            "property": "og:description",
            "content": "Troubleshooting for More or Less, how to request your data, and how to delete your account."
      },
      {
            "property": "og:url",
            "content": "https://snaptapp.us/support/"
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
            "href": "https://snaptapp.us/support/"
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
  component: PageSupport,
});

function PageSupport() {
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
              <a href="/support/" aria-current="page">Support</a>
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
                <li>Support</li>
              </ol>
              <h1>Support</h1>
              <p className="lede">
                Help with More or Less, account and data requests, security reports, and common
                troubleshooting.
              </p>
            </div>
          </section>
      
          <section className="section section--tight">
            <div className="shell">
              <div className="prose">
                <div className="callout">
                  <strong>Need a human?</strong> Email{" "}
                  <a href="mailto:support@snaptapp.us">support@snaptapp.us</a>. We typically
                  reply within two business days. Include your platform, app or browser version,
                  and a screenshot if it helps show the issue.
                </div>
      
                <h2 id="more-or-less">More or Less</h2>
      
                <dl>
                  <dt>Where do I play?</dt>
                  <dd>
                    In a browser at{" "}
                    <a href="https://moreorless.snaptapp.us">moreorless.snaptapp.us</a>. The iOS
                    and Android builds are in development; when they land they will be linked
                    from <a href="/products/">the products page</a>.
                  </dd>
      
                  <dt>I think a fact is wrong.</dt>
                  <dd>
                    Send the topic, the claim as it appeared, and the number shown to{" "}
                    <a href="mailto:support@snaptapp.us">support@snaptapp.us</a>. We review
                    reported rounds and correct or remove anything that is inaccurate.
                  </dd>
      
                  <dt>My topic was rejected.</dt>
                  <dd>
                    Custom topics are checked before a round is generated. Topics may be
                    declined if they are unsafe, target private individuals, or do not lead to a
                    clear numeric answer. Try a broader topic with a measurable result.
                  </dd>
      
                  <dt>The timer feels out of sync in a party room.</dt>
                  <dd>
                    Party Room players use the same server-managed round timer. If you notice a
                    timing problem, send us the room code, roughly when it happened, and how
                    many players were connected.
                  </dd>
      
                  <dt>No sound in the browser.</dt>
                  <dd>
                    Most browsers require an interaction before allowing audio. Click, tap, or
                    press a key once, then try again. If there is still no sound, check that the
                    tab and system audio are not muted.
                  </dd>
      
                  <dt>I lost my streak or my match history.</dt>
                  <dd>
                    Progress is tied to the account and sign-in method you used. If you signed
                    in another way, you may be looking at a separate profile. Email{" "}
                    <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> from the address
                    on the account and we can check.
                  </dd>
      
                  <dt>Why am I seeing ads?</dt>
                  <dd>
                    More or Less is free to play. The mobile versions use Google AdMob
                    advertising to help cover operating costs; the web version does not show
                    ads. See the <a href="/legal/privacy/#advertising">privacy policy</a> for
                    details about advertising and data.
                  </dd>
                </dl>
      
                <h2 id="account">Your account and your data</h2>
      
                <h3 id="data-copy">Requesting a copy of your data</h3>
                <p>
                  Email <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a> from the
                  address on your account with the subject
                  <code>Data access request</code>. After we verify the request, we will provide
                  a machine-readable copy of the personal data associated with your account. We
                  respond within 30 days.
                </p>
      
                <h3 id="delete">Deleting your account and data</h3>
                <p>
                  Use our{" "}
                  <a href="https://forms.gle/jvzqpb9yCuDywtbT8" rel="noopener">account deletion request form</a>, or email{" "}
                  <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a> from the address
                  on your account with the subject <code>Delete my account</code>. We will
                  verify the request before deleting the account.
                </p>
                <p>What happens next:</p>
                <ol>
                  <li>
                    We verify that the request came from the account holder.
                  </li>
                  <li>
                    We delete the authentication record, profile, display name, statistics,
                    streaks, match history, and uploaded avatar associated with the account.
                  </li>
                  <li>
                    We confirm when deletion is complete. Our target is 7 days, with a maximum
                    processing time of 30 days.
                  </li>
                </ol>
                <p>
                  Some information may remain after account deletion when it is no longer linked
                  to an identifiable person, such as aggregate usage counts. We may also retain
                  records when required by law, such as transaction records, for the required
                  retention period.
                </p>
                <div className="callout">
                  <strong>Deleting the app is not the same as deleting your account.</strong>
                  Removing the app stops use on that device, but it does not delete the account
                  or server-side profile. Use the deletion process above if you want the account
                  removed.
                </div>
      
                <h2 id="security">Reporting a security issue</h2>
                <p>
                  Send vulnerability reports to{" "}
                  <a href="mailto:security@snaptapp.us">security@snaptapp.us</a>. We acknowledge
                  reports within three business days and will provide updates as we investigate.
                  Our disclosure policy is published at{" "}
                  <a href="/.well-known/security.txt">/.well-known/security.txt</a>.
                </p>
                <p>
                  Please avoid automated scanning against production systems, accessing
                  accounts that are not yours, or disrupting service while testing.
                </p>
      
                <h2 id="status">Something is down</h2>
                <p>
                  If a product is unavailable, email{" "}
                  <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> with what you are
                  seeing and roughly when it started. We do not currently publish a public
                  status page.
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
