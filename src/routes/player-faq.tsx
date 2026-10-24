import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

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
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://snaptapp.us/assets/img/og-default.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://snaptapp.us/player-faq/" },
      { rel: "api-catalog", href: "/.well-known/api-catalog" },
      { rel: "service-doc", href: "/docs/api/" },
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
              <li><a href="/support/">Support</a></li>
              <li>Player FAQ</li>
            </ol>
            <h1>Player FAQ</h1>
            <p className="lede">
              Everything you need before your first round of More or Less: how to start a game
              as a guest, how a round runs, and what happens to the answers you give.
            </p>
          </div>
        </section>

        <section className="section section--tight reading-section">
          <div className="shell">
            <div className="prose">
              <div className="callout">
                <strong>You do not need an account to play.</strong> The game&rsquo;s opening
                screen has a <strong>PLAY AS GUEST</strong> button. Tap it and you are in the
                arcade with no email and no password.
              </div>

              <div className="toc" aria-label="Contents">
                <h2>Contents</h2>
                <ol>
                  <li><a href="#guest">Playing as a guest</a></li>
                  <li><a href="#rounds">How a round works</a></li>
                  <li><a href="#modes">Modes at a glance</a></li>
                  <li><a href="#answers">What happens to my answers</a></li>
                  <li><a href="#report">A number looks wrong</a></li>
                  <li><a href="#rights">Your choices</a></li>
                </ol>
              </div>

              <h2 id="guest">Playing as a guest</h2>

              <dl>
                <dt>How do I start without signing up?</dt>
                <dd>
                  Open <a href="https://moreorless.snaptapp.us">the game</a> and choose{" "}
                  <strong>PLAY AS GUEST</strong>. You land straight in the arcade, where the
                  modes are listed. Nothing else is asked of you.
                </dd>

                <dt>What is different about a guest game?</dt>
                <dd>
                  A guest starts at level 1 with 0 points, and the <strong>Vault</strong> and{" "}
                  <strong>Profile</strong> sections in the sidebar are locked. The rounds
                  themselves are the same: same claims, same shot clock, same scoring.
                </dd>

                <dt>Does my guest progress come back?</dt>
                <dd>
                  No. If you close the tab or reload the page, you are returned to the opening
                  screen and a new guest run starts from level 1. A guest run is a one-off.
                </dd>

                <dt>How do I keep my progress?</dt>
                <dd>
                  Make an account from the same screen &mdash; <strong>REGISTER</strong> with an
                  email address, or <strong>CONTINUE WITH GOOGLE</strong>. Your level, points and
                  history are kept against the account rather than the browser tab.
                </dd>

                <dt>Can I skip a question or stop a game?</dt>
                <dd>
                  Both. Every round has a <strong>Skip question</strong> button, and the top of
                  the round screen has <strong>Quit match</strong>. Quitting ends the run; it
                  does not charge you anything.
                </dd>

                <dt>Is there a tutorial?</dt>
                <dd>
                  The first round of your first game opens a three-step walkthrough of the claim,
                  the choice and the shot clock. It has a <strong>SKIP</strong> button, so you can
                  get straight to playing.
                </dd>
              </dl>

              <h2 id="rounds">How a round works</h2>
              <p>
                A standard game is <strong>five rounds on one topic</strong>. Each round puts a
                claim on screen with a number next to it. That number is not the real answer
                &mdash; it is a believable fake. Your job is to decide whether the true figure is
                higher or lower before the shot clock runs out.
              </p>
              <p>
                For example: &ldquo;Orbital velocity of the International Space Station in
                mph&rdquo; shown as <strong>7000.0 MPH</strong>. You tap{" "}
                <strong>Guess MORE</strong> or <strong>Guess LESS</strong>. The real figure is
                17,500 mph, so MORE is the right call.
              </p>

              <h3>The shot clock</h3>
              <p>
                A round is timed and the clock is on screen the whole time (&ldquo;Shot clock: 12
                seconds remaining&rdquo;). You pick the pace before the game starts:
              </p>
              <ul>
                <li><strong>FAST &mdash; 7 seconds</strong> for quick reflexes.</li>
                <li><strong>NORMAL &mdash; 12 seconds</strong>, the balanced read.</li>
                <li>
                  <strong>RELAXED &mdash; 30 seconds</strong> if you want time to think.
                </li>
              </ul>
              <p>If the clock runs out before you answer, the round simply moves on.</p>

              <h3>What you see after you answer</h3>
              <p>
                The reveal tells you whether you were right, then shows the number you were
                given, the true number, and the points you scored &mdash; for instance
                &ldquo;CORRECT! THE ANSWER IS MORE. Presented: 7000.0 MPH, True number: 17,500.0
                MPH. Points: +2,894 PTS.&rdquo; Underneath is a short explanation of the fact, and
                a <strong>Report this fact</strong> button if something looks off.
              </p>
              <p>
                <strong>NEXT ROUND (2/5)</strong> moves you on; the <kbd>Enter</kbd> or{" "}
                <kbd>Space</kbd> key does the same thing.
              </p>

              <h3>Picking a topic</h3>
              <p>
                Before a standard game you choose a topic. Trending decks are listed &mdash; Space
                Records, Apex Predators, Fast Food Stats &mdash; and you can enter a custom topic
                instead. A topic costs 2 tokens, and one choice runs all five rounds.
              </p>
              <p>
                Custom topics are generated on demand and checked before they reach the table.
                Curated topics draw on a verified fact bank. See these{" "}
                <a href="/questions-with-numerical-answers/">
                  questions with numerical answers
                </a>{" "}
                for examples with their real values, or the{" "}
                <a href="/higher-lower-game/">higher lower game</a> page for the format.
              </p>

              <h2 id="modes">Modes at a glance</h2>
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
                    <td>Five rounds on a topic you pick, against the shot clock you pick.</td>
                  </tr>
                  <tr>
                    <td>Today&rsquo;s Pack</td>
                    <td>One shared pack for everyone, with a countdown to the next one.</td>
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
              <p>
                Playing with other people in a room &mdash; up to 10 players &mdash; is described
                on the <a href="/products/">Products</a> page.
              </p>

              <h2 id="answers">What happens to my answers</h2>
              <p>
                More or Less is played online, so the round you are looking at was assembled and
                served by Snaptapp&rsquo;s servers. The full details are in the{" "}
                <a href="/legal/privacy/">Privacy Policy</a>; this is the short version for a
                player.
              </p>

              <h3>What the game records</h3>
              <ul>
                <li>
                  Your score, which calls you got right and which you got wrong, and how long you
                  took.
                </li>
                <li>Streaks, daily challenge results, head-to-head outcomes, leaderboard standings.</li>
                <li>Topics you enter, and room membership while a session is active.</li>
                <li>
                  Device and technical details: browser or device model, operating system, app
                  version, language and region, approximate location from an IP address, crash
                  reports and diagnostic logs.
                </li>
              </ul>

              <h3>What the game does not do</h3>
              <ul>
                <li>
                  It does not read your precise GPS position, contacts, photo library, microphone
                  or camera.
                </li>
                <li>Your answers are not used to train Snaptapp&rsquo;s own machine learning models.</li>
                <li>
                  The web version does not show advertisements, so no advertising identifiers are
                  used in the browser.
                </li>
                <li>Nothing about you is decided automatically in a way with legal effect.</li>
              </ul>

              <h3>Playing as a guest</h3>
              <p>
                A guest run has no email address attached to it, because no account exists. The
                game still has to serve the round, so the technical data above &mdash; including
                the IP address the request came from &mdash; is processed by the edge network that
                delivers the game, for delivery, rate limiting and abuse prevention. Automated
                checks produce a pass-or-fail signal and a signed token; they are not used to
                build a profile of you.
              </p>

              <h3>If you type a custom topic</h3>
              <p>
                The topic text is checked by a content filter and may be sent to a Google model on
                Vertex AI with Snaptapp&rsquo;s instructions. Your identity is not sent with it. A
                round built for a custom topic can be cached and reused for other players who
                enter the same topic, so do not type anything you would not want repeated.
              </p>

              <h3>How long things are kept</h3>
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

              <h3>Analytics on this website</h3>
              <p>
                The website you are reading now only counts clicks if you accept analytics cookies
                in the consent banner. Declining means nothing is counted. See the{" "}
                <a href="/legal/cookies/">Cookie Policy</a>.
              </p>

              <h2 id="report">A number looks wrong</h2>
              <p>
                Every reveal screen has a <strong>Report this fact</strong> button &mdash; use it
                and the claim goes to the moderation queue. If you would rather write to a person,
                email <a href="mailto:support@snaptapp.us">support@snaptapp.us</a> with the topic,
                the claim, the number you were shown and what you think the real figure is.
              </p>

              <h2 id="rights">Your choices</h2>
              <p>
                You can ask for a copy of your data, have it corrected, have it deleted, or object
                to some of it. Email <a href="mailto:privacy@snaptapp.us">privacy@snaptapp.us</a>{" "}
                and Snaptapp responds within 30 days. Account holders can request deletion through
                the deletion form or by email; deletion is normally done within 7 days and always
                within 30. A guest run has no account to delete, so write to the same address if
                there is something you want removed.
              </p>
              <p>
                Full details, including how data is transferred and who it is shared with, are in
                the <a href="/legal/privacy/">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--edge">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">More or Less</p>
              <h2>Start a five-round game</h2>
            </div>
            <p className="mt-md reveal">
              <a className="btn btn--primary" href="https://moreorless.snaptapp.us">Play More or Less</a>
              <a className="btn btn--ghost" href="/support/">Contact support</a>
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
                <li><a href="/player-faq/">Player FAQ</a></li>
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
