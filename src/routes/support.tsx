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
                Answers to the things people actually write in about, plus the exact process for
                getting a copy of your data or deleting your account.
              </p>
            </div>
          </section>
      
          <section className="section section--tight">
            <div className="shell">
              <div className="prose">
                <div className="callout">
                  <strong>Need a human?</strong> Email
                  <a href="mailto:support@snaptapp.us">support@snaptapp.us</a>. We reply within
                  two business days. Include your platform, your app or browser version, and a
                  screenshot if anything looks wrong.
                </div>
      
                <h2 id="more-or-less">More or Less</h2>
      
                <dl>
                  <dt>Where do I play?</dt>
                  <dd>
                    In a browser at
                    <a href="https://moreorless.snaptapp.us">moreorless.snaptapp.us</a>. The iOS
                    and Android builds are in development; when they land they will be linked
                    from <a href="/products/">the products page</a>.
                  </dd>
      
                  <dt>I think a fact is wrong.</dt>
                  <dd>
                    Tell us and we will check it. Send the topic, the claim as it appeared, and
                    the number shown to <a href="mailto:support@snaptapp.us">support@snaptapp.us</a>.
                    Verified corrections are applied to the fact bank, and rounds that fail
                     review are pulled from rotation. Those details give us what we need to verify
                     the round and correct it.
                  </dd>
      
                  <dt>My topic was rejected.</dt>
                  <dd>
                    Custom topics run through a content filter before anything is generated.
                    Topics that are unsafe, targeted at real private individuals, or that cannot
                    produce a checkable number are declined. Try a broader subject with a
                    measurable quantity behind it.
                  </dd>
      
                  <dt>The timer feels out of sync in a party room.</dt>
                  <dd>
                    Every device in a room takes its clock from the same server session, so
                    genuine drift is a bug we want to see. Send the room code, roughly when it
                    happened, and how many players were connected.
                  </dd>
      
                  <dt>No sound in the browser.</dt>
                  <dd>
                    Browsers keep audio suspended until you interact with the page. Tap or press
                    a key once and audio starts. If it still does not, check that the tab is not
                    muted at the OS or browser level.
                  </dd>
      
                  <dt>I lost my streak or my match history.</dt>
                  <dd>
                    Progress is tied to the account you signed in with. Signing in with a
                    different method creates a separate profile. Email
                    <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> from the address
                    on the account and we will look it up.
                  </dd>
      
                  <dt>Why am I seeing ads?</dt>
                  <dd>
                    More or Less is free to play, and the mobile builds show advertising supplied
                    by Google AdMob to cover running costs. Ads are not shown in the web version.
                    What that means for your data is set out in our
                    <a href="/legal/privacy/#advertising">privacy policy</a>.
                  </dd>
                </dl>
      
                <h2 id="account">Your account and your data</h2>
      
                <h3 id="data-copy">Requesting a copy of your data</h3>
                <p>
                  Email <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a> from the
                  email address on your account with the subject
                  <code>Data access request</code>. We verify that the request comes from the
                  account holder, then send you a machine-readable export of the personal data
                  we hold. We respond within 30 days.
                </p>
      
                <h3 id="delete">Deleting your account and data</h3>
                <p>
                  The quickest way is our
                  <a href="https://forms.gle/jvzqpb9yCuDywtbT8" rel="noopener">account deletion request form</a>. Submit the
                  email address on your account and we take it from there. If you
                  would rather not use a form, email
                  <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a> from the email
                  address on your account with the subject <code>Delete my account</code>. No
                  retention offer, no phone call.
                </p>
                <p>What happens next:</p>
                <ol>
                  <li>
                    We confirm the request came from the account holder — usually by replying to
                    the address you submitted, which must match the one on the account.
                  </li>
                  <li>
                    Your authentication record, profile, display name, statistics, streaks, match
                    history, and any uploaded avatar are deleted.
                  </li>
                  <li>
                    We confirm in writing once it is done. Target is 7 days; the outside limit is
                    30 days.
                  </li>
                </ol>
                <p>
                  Two things survive deletion, and we would rather say so than surprise you.
                  Aggregated, non-identifying counts that no longer point back to you — for
                  example how many rounds a topic has been played — are kept, because they cannot
                  be traced to an individual. And records we are legally required to retain, such
                  as transaction records where a purchase was made, are kept for the statutory
                  period and nothing longer.
                </p>
                <div className="callout">
                  <strong>Deleting the app is not the same as deleting your account.</strong>
                  Removing the app from your device stops it collecting anything further, but the
                  server-side profile stays until you ask us to delete it using the process above.
                </div>
      
                <h2 id="security">Reporting a security issue</h2>
                <p>
                  Send vulnerability reports to
                  <a href="mailto:security@snaptapp.us">security@snaptapp.us</a>. We acknowledge
                  within three business days and will keep you updated until it is closed. Our
                  disclosure policy is published at
                  <a href="/.well-known/security.txt">/.well-known/security.txt</a>.
                </p>
                <p>
                  Please do not run automated scanning against our production systems, access
                  accounts that are not yours, or degrade service for other players while
                  testing. Report it and we will work with you.
                </p>
      
                <h2 id="status">Something is down</h2>
                <p>
                  If a product is unreachable, email
                  <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> with what you are
                  seeing and roughly when it started. We do not yet publish a public status page;
                  when we do, it will be linked from this page.
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
