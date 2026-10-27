import { createFileRoute } from "@tanstack/react-router";
import { SampleRound } from "@/components/SampleRound";

import { gameUrl } from "@/lib/game-link";
import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/solo-trivia-speedrun")({
  head: () => ({
    meta: [
      {
        title: "Solo Trivia Speed-Run: More or Less Solitaire — Snaptapp",
      },
      {
        name: "description",
        content:
          "More or Less Solitaire is a free 60-second solo trivia speed-run about numbers. Call higher or lower, skip freely and chase your personal Top 10 — even offline.",
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
        content: "Solo Trivia Speed-Run: More or Less Solitaire — Snaptapp",
      },
      {
        property: "og:description",
        content:
          "More or Less Solitaire is a free 60-second solo trivia speed-run about numbers. Call higher or lower, skip freely and chase your personal Top 10 — even offline.",
      },
      {
        property: "og:url",
        content: "https://snaptapp.us/solo-trivia-speedrun/",
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
        href: "https://snaptapp.us/solo-trivia-speedrun/",
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
  component: PageSoloTriviaSpeedrun,
});

function PageSoloTriviaSpeedrun() {
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
              <li>Solo trivia speed-run</li>
            </ol>
            <h1>A 60-second solo trivia speed-run</h1>
            <p className="lede">Solitaire Mode is you against the clock. Sixty seconds, as many numbers as you can call higher or lower, and a personal Top 10 to beat.</p>
          </div>
        </section>

        <section className="section section--tight">
          <div className="shell">
            <SampleRound placement="solitaire" />
            <div className="prose">
              <h2>How a Solitaire run works</h2>
              <ul>
                <li><strong>One clock.</strong> A 60-second wall clock that keeps running if you leave the app.</li>
                <li><strong>Self-paced.</strong> Answer as fast as you can read; every question has a 1-second preview and 750 ms of feedback.</li>
                <li><strong>Unlimited skips.</strong> Skip anything for 0 points; skipped questions never come back.</li>
                <li><strong>Plays offline.</strong> Runs draw from a 200-question offline deck, so no connection is needed to play.</li>
              </ul>
              <h2>Scoring</h2>
              <p>A correct answer earns up to 1,000 points, losing 1 point per 10 ms after the preview. A wrong answer costs 500, so guessing has a price. The sample above uses its own 12-second round clock.</p>
              <h2>Your Top 10</h2>
              <p>Your best ten runs are saved on your device and sync once you are back online.</p>
              <h2>Want competition?</h2>
              <p>Take on up to 100 players in <a href="/multiplayer-trivia/">live multiplayer trivia</a> with Arena Mode.</p>
            </div>
          </div>
        </section>

        <section className="section section--edge">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">More or Less</p>
              <h2>Start a Solitaire run</h2>
            </div>
            <p className="mt-md reveal">
              <a className="btn btn--primary" href={gameUrl("solitaire_landing")}>Play More or Less</a>
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
                <li><a href="https://snaptapp.us/auth">Admin</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
