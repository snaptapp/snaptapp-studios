import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/higher-lower-game")({
  head: () => ({
    meta: [
      {
        title: "Higher Lower Game: More or Less — Snaptapp",
      },
      {
        name: "description",
        content:
          "More or Less is a free higher lower game about numbers: see a claim with a wrong number and call whether the real answer is higher or lower before time runs out.",
      },
      {
        name: "theme-color",
        content: "#07080b",
      },
      {
        name: "color-scheme",
        content: "dark",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:site_name",
        content: "Snaptapp",
      },
      {
        property: "og:title",
        content: "Higher Lower Game: More or Less — Snaptapp",
      },
      {
        property: "og:description",
        content:
          "A free higher lower trivia game about numbers. Play solo, daily, 1v1, or in a Party Room with up to 10 players.",
      },
      {
        property: "og:url",
        content: "https://snaptapp.us/higher-lower-game/",
      },
      {
        property: "og:image",
        content: "https://snaptapp.us/assets/img/og-default.png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Snaptapp — Independent Game Studio",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://snaptapp.us/higher-lower-game/",
      },
      {
        rel: "api-catalog",
        href: "/.well-known/api-catalog",
      },
      {
        rel: "service-doc",
        href: "/docs/api/",
      },
      {
        rel: "describedby",
        href: "/.well-known/ai-catalog.json",
        type: "application/json",
      },
    ],
  }),
  component: PageHigherLowerGame,
});

function PageHigherLowerGame() {
  useSiteBehaviour();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="/">
            <img className="brand__mark" src="/assets/img/snaptapp-mark.svg" alt="" width="30" height="30" />
            <span>Snaptapp</span>
            <span className="brand__sub">LLC</span>
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
              <li>Higher lower game</li>
            </ol>
            <h1>The higher lower game about numbers</h1>
            <p className="lede">
              More or Less is a higher lower trivia game. Every round shows a claim with a
              believable but wrong number. You call whether the real answer is higher or lower
              before time runs out.
            </p>
          </div>
        </section>

        <section className="section section--tight">
          <div className="shell">
            <div className="prose">
              <h2>How to play</h2>
              <p>
                A round might read: &ldquo;A cheetah can sprint at 40 mph.&rdquo; The real top
                speed is about 70 mph, so the right call is <strong>MORE</strong>. If the real
                number were lower than the claim, you would press <strong>LESS</strong>. No typing,
                no multiple choice &mdash; one decision against the shot clock.
              </p>

              <h2>Modes</h2>
              <ul>
                <li><strong>Standard</strong></li>
                <li><strong>Cutthroat</strong></li>
                <li><strong>Daily Challenge</strong></li>
                <li><strong>Versus 1v1</strong></li>
                <li><strong>Party Room</strong> &mdash; up to 10 players</li>
              </ul>

              <h2>Where the numbers come from</h2>
              <p>
                Curated rounds come from a verified fact bank. Custom topics can be generated on
                demand and are checked before they are shown. For examples, see these{" "}
                <a href="/questions-with-numerical-answers/">questions with numerical answers</a>.
              </p>

              <h2>Platforms</h2>
              <p>
                More or Less is live on the web and free to play in your browser. iOS and Android
                versions are in development.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--edge">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">More or Less</p>
              <h2>Play the higher lower game now</h2>
            </div>
            <p className="mt-md reveal">
              <a className="btn btn--primary" href="https://moreorless.snaptapp.us">Play More or Less</a>
              <a className="btn btn--ghost" href="/products/">About the game</a>
            </p>
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
