import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/site";

export const Route = createFileRoute("/player-faq")({
  head: () => ({
    meta: [
      {
        title: "Player FAQ — More or Less — Snaptapp",
      },
      {
        name: "description",
        content:
          "How to start a game as a guest, what happens in each round, the shot clock and scoring, and what happens to the answers you give.",
      },
      { property: "og:title", content: "Player FAQ — More or Less" },
      {
        property: "og:description",
        content:
          "Play as a guest with no account, learn the round format and shot clock, and see how your answers are handled.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://snaptapp.us/player-faq/" },
      {
        property: "og:image",
        content: "https://snaptapp.us/assets/img/og-default.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Snaptapp — original games, built and run in-house",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:image",
        content: "https://snaptapp.us/assets/img/og-default.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://snaptapp.us/player-faq/",
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
  component: PagePlayerFaq,
});

function PagePlayerFaq() {
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
            <a href="/products/">Products</a>
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
              <li>
                <a href="/support/">Support</a>
              </li>
              <li>Player FAQ</li>
            </ol>
            <h1>Player FAQ</h1>
            <p className="lede">
              Everything you need before your first round of{" "}
              <strong>More or Less</strong>: how to play as a guest, how a round
              runs, and what happens to the answers you give.
            </p>
          </div>
        </section>

        <section className="section section--tight reading-section">
          <div className="shell">
            <div className="prose reveal">
              <div className="callout">
                <p>
                  <strong>You do not need an account to play.</strong> The
                  game&rsquo;s opening screen has a{" "}
                  <strong>PLAY AS GUEST</strong> button. Tap it and you are in
                  the arcade with no email and no password.
                </p>
              </div>

              <div className="toc">
                <p className="card-label">On this page</p>
                <ul>
                  <li>
                    <a href="#guest">Playing as a guest</a>
                  </li>
                  <li>
                    <a href="#rounds">How a round works</a>
                  </li>
                  <li>
                    <a href="#modes">Modes at a glance</a>
                  </li>
                  <li>
                    <a href="#answers">What happens to my answers</a>
                  </li>
                  <li>
                    <a href="#report">A number looks wrong</a>
                  </li>
                  <li>
                    <a href="#rights">Your choices</a>
                  </li>
                </ul>
              </div>

              <h2 id="guest">Playing as a guest</h2>

              <h3>How do I start without signing up?</h3>
              <p>
                Open <a href="https://moreorless.snaptapp.us">the game</a> and
                choose <strong>PLAY AS GUEST</strong>. You land straight in the
                arcade, where the modes are listed. Nothing else is asked of
                you.
              </p>

              <h3>What is different about a guest game?</h3>
              <p>
                A guest starts at level&nbsp;1 with 0&nbsp;points, and the{" "}
                <strong>Vault</strong> and <strong>Profile</strong> sections in
                the sidebar are locked. The rounds themselves are the same:
                same claims, same shot clock, same scoring.
              </p>

              <h3>Does my guest progress come back?</h3>
              <p>
                No. If you close the tab or reload the page, you are returned to
                the opening screen and a new guest run starts from level&nbsp;1.
                A guest run is a one-off.
              </p>

              <h3>How do I keep my progress?</h3>
              <p>
                Make an account from the same screen — <strong>REGISTER</strong>{" "}
                with an email address, or <strong>CONTINUE WITH GOOGLE</strong>.
                Your level, points and history are kept against the account
                rather than the browser tab.
              </p>

              <h3>Can I skip a question or stop a game?</h3>
              <p>
                Both. Each round has a <strong>Skip question</strong> button, and
                the header of the round screen has <strong>Quit match</strong>.
                Quitting ends the run; it does not charge you anything.
              </p>

              <h3>Is there a tutorial?</h3>
              <p>
                The first round of your first game opens a three-step walkthrough
                of the claim, the choice and the shot clock. It has a{" "}
                <strong>SKIP</strong> button, so you can get straight to playing.
              </p>

              <h2 id="rounds">How a round works</h2>
              <p>
                A standard game is <strong>five rounds on one topic</strong>.
                Each round puts a claim on screen with a number next to it. That
                number is not the real answer — it is a believable fake. Your
                job is to decide whether the true figure is higher or lower
                before the shot clock runs out.
              </p>

              <p>
                For example: <em>&ldquo;Orbital velocity of the International
                Space Station in mph&rdquo;</em> shown as{" "}
                <strong>7000.0&nbsp;MPH</strong>. You tap{" "}
                <strong>Guess MORE</strong> or <strong>Guess LESS</strong>. The
                real figure is 17,500&nbsp;mph, so MORE is correct.
              </p>

              <h3>The shot clock</h3>
              <p>
                A round is timed, and the clock is on screen the whole time
                (&ldquo;Shot clock: 12 seconds remaining&rdquo;). You pick the
                pace before the game starts:
              </p>
              <ul>
                <li>
                  <strong>FAST — 7 seconds</strong> for quick reflexes.
                </li>
                <li>
                  <strong>NORMAL — 12 seconds</strong>, the balanced read.
                </li>
                <li>
                  <strong>RELAXED — 30 seconds</strong> if you want time to
                  think.
                </li>
              </ul>
              <p>
                If the clock runs out before you answer, the round simply moves
                on.
              </p>

              <h3>What you see after you answer</h3>
              <p>
                The reveal tells you whether you were right, then shows the
                number you were given, the true number, and the points you
                scored — for instance &ldquo;CORRECT! THE ANSWER IS MORE.
                Presented: 7000.0 MPH, True number: 17,500.0 MPH. Points: +2,894
                PTS.&rdquo; Underneath is a short explanation of the fact, and a{" "}
                <strong>Report this fact</strong> button if something looks off.
              </p>
              <p>
                <strong>NEXT ROUND (2/5)</strong> moves you on; the{" "}
                <kbd>Enter</kbd> or <kbd>Space</kbd> key does the same thing.
              </p>

              <h3>Picking a topic</h3>
              <p>
                Before a standard game you choose a topic. Trending decks are
                listed — Space Records, Apex Predators, Fast Food Stats — and you
                can enter a custom topic instead. A topic costs 2 tokens, so a
                game is five rounds for one topic choice.
              </p>
              <p>
                Custom topics are generated on demand and checked before they
                reach the table. Curated topics draw on a verified fact bank. See{" "}
                <a href="/questions-with-numerical-answers/">
                  questions with numerical answers
                </a>{" "}
                for examples with their real values, and the{" "}
                <a href="/higher-lower-game/">higher lower game</a> page for the
                full format.
              </p>

              <h2 id="modes">Modes at a glance</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Mode</th>
                      <th>What it is</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard</td>
                      <td>
                        Five rounds on a topic you pick, against the shot clock
                        you pick.
                      </td>
                    </tr>
                    <tr>
                      <td>Today&rsquo;s Pack</td>
                      <td>
                        One shared pack for everyone, with a countdown to the
                        next one.
                      </td>
                    </tr>
                    <tr>
                      <td>Daily Blitz</td>
                      <td>The fast version of the daily challenge.</td>
                    </tr>
                    <tr>
                      <td>Solitaire</td>
                      <td>Play alone at your own pace.</td>
                    </tr>
                    <tr>
                      <td>Arena</td>
                      <td>Competitive play against other players.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Playing with other people in a room — up to 10 players — is
                described on the <a href="/products/">Products</a> page.
              </p>

              <h2 id="answers">What happens to my answers</h2>
              <p>
                More or Less is played online, so the round you are looking at
                was assembled and served by Snaptapp&rsquo;s servers. The full
                details are in the{" "}
                <a href="/legal/privacy/">Privacy Policy</a>; this section is the
                short version for a player.
              </p>

              <h3>What the game records</h3>
              <ul>
                <li>
                  Your score, which calls you got right and which you got wrong,
                  and how long you took.
                </li>
                <li>
                  Streaks, daily challenge results, head-to-head outcomes, and
                  leaderboard standings.
                </li>
                <li>
                  Topics you enter, and room membership while a session is
                  active.
                </li>
                <li>
                  Device and technical details: browser or device model,
                  operating system, app version, language and region, approximate
                  location from an IP address, crash reports and diagnostic
                  logs.
                </li>
              </ul>

              <h3>What the game does not do</h3>
              <ul>
                <li>
                  It does not read your precise GPS position, contacts, photo
                  library, microphone or camera.
                </li>
                <li>
                  Your answers are not used to train Snaptapp&rsquo;s own machine
                  learning models.
                </li>
                <li>
                  The web version does not show advertisements, so no advertising
                  identifiers are used in the browser.
                </li>
                <li>
                  Nothing about you is decided automatically in a way with legal
                  effect.
                </li>
              </ul>

              <h3>Playing as a guest</h3>
              <p>
                A guest run has no email address attached to it, because no
                account exists. The game still has to serve the round, so the
                technical data above — including the IP address the request came
                from — is processed by the edge network that delivers the game,
                for delivery, rate limiting and abuse prevention. Automated
                checks produce a pass-or-fail signal and a signed token; they are
                not used to build a profile of you.
              </p>

              <h3>If you type a custom topic</h3>
              <p>
                The topic text is checked by a content filter and may be sent to
                a Google model on Vertex AI with Snaptapp&rsquo;s instructions.
                Your identity is not sent with it. A round built for a custom
                topic can be cached and reused for other players who enter the
                same topic, so do not type anything you would not want repeated.
              </p>

              <h3>How long things are kept</h3>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Retention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gameplay history, streaks, leaderboard entries</td>
                      <td>Until the account is deleted</td>
                    </tr>
                    <tr>
                      <td>Crash reports</td>
                      <td>Up to 90 days</td>
                    </tr>
                    <tr>
                      <td>Diagnostic logs</td>
                      <td>Up to 30 days</td>
                    </tr>
                    <tr>
                      <td>Cached generated rounds</td>
                      <td>Up to 30 days, not linked to an account</td>
                    </tr>
                    <tr>
                      <td>Support emails</td>
                      <td>Up to 24 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Analytics on this website</h3>
              <p>
                The website you are reading now only counts clicks if you accept
                analytics cookies in the consent banner. Declining means nothing
                is counted. See the{" "}
                <a href="/legal/cookies/">Cookie Policy</a>.
              </p>

              <h2 id="report">A number looks wrong</h2>
              <p>
                Every reveal screen has a <strong>Report this fact</strong>{" "}
                button — use it and the claim goes to the moderation queue. If
                you would rather write to a person, email{" "}
                <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> with
                the topic, the claim, the number you were shown and what you
                think the real figure is.
              </p>

              <h2 id="rights">Your choices</h2>
              <p>
                You can ask for a copy of your data, have it corrected, have it
                deleted, or object to some of it. Email{" "}
                <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a> and
                Snaptapp responds within 30 days. Account holders can request
                deletion through the deletion form or by email; deletion is
                normally done within 7 days and always within 30. A guest run has
                no account to delete, so write to the same address if there is
                something you want removed.
              </p>
              <p>
                Full details, including how data is transferred and who it is
                shared with, are in the{" "}
                <a href="/legal/privacy/">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="shell">
            <div className="cta-panel">
              <div>
                <p className="eyebrow">Ready when you are</p>
                <h2>Start a five-round game</h2>
                <p>
                  Play as a guest in a few seconds, or make an account to keep
                  your progress.
                </p>
              </div>
              <div className="row">
                <a className="btn btn--primary" href="https://moreorless.snaptapp.us">
                  Play More or Less
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
                <a className="btn btn--ghost" href="/support/">
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="site-footer__top">
            <div className="site-footer__brand">
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
              <p>
                Snaptapp is an independent game studio. It designs, builds and
                runs its own original titles for web and mobile.
              </p>
            </div>
            <nav className="site-footer__col" aria-label="Products">
              <p className="card-label">Products</p>
              <a href="/products/">More or Less</a>
              <a href="https://moreorless.snaptapp.us">Play More or Less</a>
              <a href="/higher-lower-game/">Higher lower game</a>
              <a href="/player-faq/">Player FAQ</a>
            </nav>
            <nav className="site-footer__col" aria-label="Company">
              <p className="card-label">Company</p>
              <a href="/company/">About Snaptapp</a>
              <a href="/contact/">Contact</a>
              <a href="/support/">Support</a>
              <a href="/docs/api/">API &amp; agents</a>
            </nav>
            <nav className="site-footer__col" aria-label="Legal">
              <p className="card-label">Legal</p>
              <a href="/legal/privacy/">Privacy Policy</a>
              <a href="/legal/terms/">Terms of Service</a>
              <a href="/legal/cookies/">Cookie Policy</a>
            </nav>
          </div>
          <div className="site-footer__bottom">
            <p>
              &copy; 2026 Snaptapp LLC. All rights reserved. More or Less and the
              Snaptapp wordmark are trademarks of Snaptapp LLC.
            </p>
            <div className="site-footer__social">
              <a
                href="https://x.com/snaptapp"
                aria-label="Snaptapp on X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/snaptapp"
                aria-label="Snaptapp on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <a href="mailto:hello@snaptapp.us" aria-label="Email Snaptapp">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                  <path d="m3 6 9 6 9-6" />
                </svg>
              </a>
              <a href="/admin/insights/" aria-label="Admin">
                Admin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
