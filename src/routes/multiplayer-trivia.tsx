import { createFileRoute } from "@tanstack/react-router";
import { SampleRound } from "@/components/SampleRound";

import { gameUrl } from "@/lib/game-link";
import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/multiplayer-trivia")({
  head: () => ({
    meta: [
      {
        title: "Multiplayer Trivia Game: More or Less Arena — Snaptapp",
      },
      {
        name: "description",
        content:
          "More or Less Arena is a free live multiplayer trivia game about numbers: up to 100 players race the same 60-second deck, calling higher or lower on every claim.",
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
        content: "Multiplayer Trivia Game: More or Less Arena — Snaptapp",
      },
      {
        property: "og:description",
        content:
          "More or Less Arena is a free live multiplayer trivia game about numbers: up to 100 players race the same 60-second deck, calling higher or lower on every claim.",
      },
      {
        property: "og:url",
        content: "https://snaptappllc.com/multiplayer-trivia/",
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
        href: "https://snaptappllc.com/multiplayer-trivia/",
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
  component: PageMultiplayerTrivia,
});

function PageMultiplayerTrivia() {
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
              <li>Multiplayer trivia</li>
            </ol>
            <h1>Live multiplayer trivia about numbers</h1>
            <p className="lede">Arena Mode puts you in a live lobby with up to 100 players. Everyone gets the same deck and the same 60 seconds. Call each number higher or lower, faster than the field.</p>
          </div>
        </section>

        <section className="section section--tight">
          <div className="shell">
            <SampleRound placement="arena" />
            <div className="prose">
              <h2>How an Arena match works</h2>
              <ul>
                <li><strong>Join a lobby.</strong> Public lobbies open on demand and start 20 seconds after the first player joins, or immediately at 100 entrants.</li>
                <li><strong>Never play to an empty room.</strong> If fewer than 8 people join, seeded bots fill the lobby to 8.</li>
                <li><strong>Same deck, your pace.</strong> Every player gets the identical frozen deck and moves through it independently over a 60-second server clock.</li>
                <li><strong>Skip when unsure.</strong> Skips are allowed and score 0.</li>
              </ul>
              <h2>Scoring and standings</h2>
              <p>Each question has a 1-second preview and 750 ms of feedback. A correct answer earns up to 1,000 points, losing 1 point per 10 ms after the preview; a wrong answer costs 500. Standings rank by score, then by total answer time, so speed breaks ties. The sample above uses its own 12-second round clock.</p>
              <h2>Built for fair live play</h2>
              <p>Arena is server-authoritative: matches run on Cloudflare Workers Durable Objects over WebSockets, with a 2-second lag allowance and server-verified ranked results.</p>
              <h2>Prefer to play alone?</h2>
              <p>Try the <a href="/solo-trivia-speedrun/">solo trivia speed-run</a> in Solitaire Mode.</p>
            </div>
          </div>
        </section>

        <section className="section section--edge">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">More or Less</p>
              <h2>Join an Arena match</h2>
            </div>
            <p className="mt-md reveal">
              <a className="btn btn--primary" href={gameUrl("arena_landing")}>Play More or Less</a>
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
