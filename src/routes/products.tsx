import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      {
        title: "More or Less, the Trivia Game About Numbers — Snaptapp Games",
      },
      {
        name: "description",
        content:
          "More or Less is a fast trivia game about numbers from SNAPTAPP LLC: decide if the real answer is more or less before time runs out. Solo, Daily Challenge, Versus, and Party Rooms for up to 10 players.",
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
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Snaptapp",
      },
      {
        property: "og:title",
        content: "More or Less, the Trivia Game About Numbers — Snaptapp Games",
      },
      {
        property: "og:description",
        content:
          "More or Less is a fast trivia game about numbers from SNAPTAPP LLC: decide if the real answer is more or less before time runs out. Solo, Daily Challenge, Versus, and Party Rooms for up to 10 players.",
      },
      {
        property: "og:url",
        content: "https://snaptapp.us/products/",
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
        href: "https://snaptapp.us/products/",
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
  component: PageProducts,
});

function PageProducts() {
  useSiteBehaviour();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="/">
            <img
              className="brand__mark"
              src="/assets/img/snaptapp-mark.svg"
              alt=""
              width="30"
              height="30"
            />
            <span>Snaptapp</span>
            <span className="brand__sub">LLC</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="primary-nav"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <nav className="nav" id="primary-nav" aria-label="Primary">
            <a href="/products/" aria-current="page">
              Products
            </a>
            <a href="/company/">Company</a>
            <a href="/support/">Support</a>
            <a href="/contact/">Contact</a>
            <a
              className="btn btn--primary btn--sm"
              href="https://moreorless.snaptapp.us"
            >
              Play More or Less
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="page-head">
          <div className="shell">
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Products</li>
            </ol>
            <h1>More or Less</h1>
            <p className="lede">
              A fast trivia game about numbers. Each round gives you a claim and a
              believable but wrong number; call MORE or LESS before time runs out.
              Modes include Standard, Cutthroat, Daily Challenge, Versus 1v1, and
              Party Room for up to 10 players. Live on the web, with iOS and Android
              versions in development.
            </p>
          </div>
        </section>

        <section className="section section--tight">
          <div className="shell">
            <article className="product reveal" id="more-or-less">
              <div className="product__art">
                <img
                  src="/assets/img/more-or-less-icon.png"
                  alt="More or Less app icon"
                  width="272"
                  height="272"
                />
              </div>
              <div>
                <div className="product__title">
                  <h2>More or Less</h2>
                  <span className="badge badge--live">
                    <span className="dot"></span>Live
                  </span>
                </div>
                <p className="product__tagline">
                  One fake number. Is the real answer more or less?
                </p>
                <p>
                  More or Less is a party trivia game built around one simple decision: is
                  the real answer higher or lower than the number on screen? Every round
                  gives you a claim and a believable but incorrect number. Make your call
                  before time runs out, then see the verified figure and source context.
                </p>
                <p>
                  Choose from curated topics or enter any custom topic on demand. Curated
                  rounds draw from our verified <strong>Cloud Firestore</strong> fact bank
                  (built by our <strong>Gemini 3.8 Flash</strong> Fact Foundry);
                  custom topics are generated live by our Go microservice (
                  <code>agent-go</code>) on <strong>Google Cloud Run</strong> using{" "}
                  <strong>Gemini 3.5 Flash Lite</strong> with mandatory{" "}
                  <strong>Google Search Grounding</strong> and deterministic{" "}
                  <strong>DDM-4</strong> distractor math. Want a preview first? Read how the{" "}
                  <a href="/higher-lower-game/">higher lower game</a> works, or start with the{" "}
                  <a href="/player-faq/">Player FAQ</a>.
                </p>

                <dl className="product__meta">
                  <div>
                    <dt>Status</dt>
                    <dd>Live on web · iOS &amp; Android in development</dd>
                  </div>
                  <div>
                    <dt>Google Cloud AI</dt>
                    <dd>Gemini Enterprise Agent Platform (Gemini 3.5 Flash Lite &amp; 3.8 Flash · Gemma 2 9B)</dd>
                  </div>
                  <div>
                    <dt>Backend &amp; Data</dt>
                    <dd>Cloud Run (Go) · Cloud Firestore · Firebase</dd>
                  </div>
                  <div>
                    <dt>Players &amp; Price</dt>
                    <dd>1–10 per room · Free to play</dd>
                  </div>
                </dl>

                <div className="row">
                  <a className="btn btn--primary" href="https://moreorless.snaptapp.us">
                    Play now
                    <svg
                      className="btn__arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="btn btn--ghost"
                    href="/assets/docs/Snaptapp_Google_Cloud_AI_Architecture_Brief.pdf"
                  >
                    Architecture Brief (PDF)
                  </a>
                  <a className="btn btn--ghost" href="/support/">
                    Get help
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section section--edge" id="ai-architecture">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">Google Cloud Project · more-or-less-505908</p>
              <h2>Google Cloud &amp; Gemini Enterprise Agent Platform pipeline</h2>
              <p className="lede">
                More or Less combines low-latency Gemini Enterprise Agent Platform inference and Google Search
                grounding with deterministic verification so generative rounds never
                hallucinate numbers.
              </p>
            </div>

            <div className="grid grid--3 reveal">
              <div className="card">
                <span className="card__num">01</span>
                <h3>Hot-Path Grounded Streaming</h3>
                <p>
                  Uncached custom topics route via OIDC to <code>agent-go</code> on{" "}
                  <strong>Google Cloud Run</strong>, invoking{" "}
                  <strong>Gemini 3.5 Flash Lite</strong> with{" "}
                  <code>google_search</code> grounding. Each stream emits a{" "}
                  <code>grounding_receipt</code> verifying web queries and support spans
                  before our deterministic <code>DDM-4</code> kernel derives the decoy
                  number.
                </p>
              </div>
              <div className="card">
                <span className="card__num">02</span>
                <h3>Fact Foundry &amp; Gemma 2 SFT</h3>
                <p>
                  Our offline <strong>Fact Foundry</strong> uses{" "}
                  <strong>Gemini 3.8 Flash</strong> to crawl topics, verify
                  claims against authoritative sources, precompute distractor sweeps, and
                  promote audited facts to <strong>Cloud Firestore</strong>. Active facts
                  export via <code>agent-go export-sft --format vertex</code> to fine-tune{" "}
                  <strong>Gemini</strong> and <strong>Gemma 2 9B</strong>{" "}
                  adapters.
                </p>
              </div>
              <div className="card">
                <span className="card__num">03</span>
                <h3>Fact Ombudsman &amp; Ops Copilots</h3>
                <p>
                  Player disputes trigger our <strong>Autonomous Fact Ombudsman</strong>{" "}
                  on Cloud Run + Gemini Enterprise Agent Platform to run adversarial Google Search checks and
                  evict debunked claims. Our ops console (<code>ops.snaptapp.us</code>) is
                  a <strong>TanStack Start</strong> app on <strong>Cloudflare Workers</strong>,
                  gated by <strong>Firebase Auth</strong> admin claims, with role-managed
                  server functions over <strong>Cloud Firestore</strong> fact curation and
                  dispute queues. <strong>Gemini 3.8 Flash</strong> powers the Daily Blitz
                  Strategist, Report Review Copilot, and Placement Insights copilots.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--edge">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">More or Less</p>
              <h2>Five ways to play</h2>
            </div>

            <div className="grid grid--3 reveal">
              <div className="card">
                <h3>Standard</h3>
                <p>
                  Five rounds on any curated or custom AI-generated topic, with
                  mixed difficulty and fast (7s), normal (12s), or relaxed (30s) timing.
                </p>
              </div>
              <div className="card">
                <h3>Cutthroat</h3>
                <p>
                  An endless sudden-death run drawn from the verified Cloud Firestore fact
                  bank. One wrong answer ends the run.
                </p>
              </div>
              <div className="card">
                <h3>Daily Challenge</h3>
                <p>
                  The same verified rounds for everyone each UTC day—planned with our
                  Gemini Daily Strategist—with a fixed timer and streak tracking.
                </p>
              </div>
              <div className="card">
                <h3>Versus 1v1</h3>
                <p>
                  Challenge another player to the same set of rounds and track live
                  round-by-round progress via Cloud Firestore and iOS Live Activities.
                </p>
              </div>
              <div className="card">
                <h3>Party Room</h3>
                <p>
                  Up to ten players join the same room and play each round together on a
                  synchronized sub-20ms WebSocket shot clock.
                </p>
              </div>
              <div className="card card--empty">
                <span className="badge badge--soon">60-Second Blitz</span>
                <p className="muted small mt-xs">
                  Rapid-fire 15-question daily time-attack mode alongside the mobile
                  release.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--edge">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">In development</p>
              <h2>Next title</h2>
              <p className="lede">
                A second Snaptapp title is in development on our Google Cloud &amp; Gemini Enterprise Agent Platform
                stack. More details will be shared later.
              </p>
            </div>
            <p className="reveal">
              <a className="link-arrow" href="/contact/">
                Interested in early access? Contact us
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-about">
              <a className="brand" href="/">
                <img
                  className="brand__mark"
                  src="/assets/img/snaptapp-mark.svg"
                  alt=""
                  width="30"
                  height="30"
                />
                <span>Snaptapp</span>
              </a>
              <p>
                An independent US game studio (Snaptapp LLC) building AI-native titles on
                Google Cloud, Gemini Enterprise Agent Platform, and Flutter.
              </p>
            </div>

            <div>
              <h2>Products</h2>
              <ul>
                <li>
                  <a href="/products/">All products</a>
                </li>
                <li>
                  <a href="https://moreorless.snaptapp.us">More or Less</a>
                </li>
                <li>
                  <a href="/assets/docs/Snaptapp_Google_Cloud_AI_Architecture_Brief.pdf">
                    Architecture Brief (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="/company/">About</a>
                </li>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
                <li>
                  <a href="/support/">Support</a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Legal</h2>
              <ul>
                <li>
                  <a href="/legal/privacy/">Privacy policy</a>
                </li>
                <li>
                  <a href="/legal/cookies/">Cookie policy</a>
                </li>
                <li>
                  <a href="/legal/terms/">Terms of service</a>
                </li>
                <li>
                  <a href="/.well-known/security.txt">Security contact</a>
                </li>
                <li>
                  <a href="/docs/api/">API for agents</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; <span data-year="">2026</span> Snaptapp LLC. All rights reserved.
            </p>
            <ul>
              <li>
                <a href="mailto:hello@snaptapp.us">hello@snaptapp.us</a>
              </li>
              <li>
                <a href="/legal/privacy/">Privacy</a>
              </li>
              <li>
                <a href="/legal/cookies/">Cookies</a>
              </li>
              <li>
                <a href="/legal/terms/">Terms</a>
              </li>
              <li>
                <a href="https://snaptapp.us/auth">Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
