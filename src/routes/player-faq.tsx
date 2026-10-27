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
      { property: "og:url", content: "https://snaptappllc.com/player-faq/" },
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
      { rel: "canonical", href: "https://snaptappllc.com/player-faq/" },
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
                  Solitaire keeps a personal Top 10 locally on your device. Those runs are
                  self-reported when synced online; Arena match history is server-verified.
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
              <p>Each question shows a claim and a believable but incorrect number. Decide whether the real answer is MORE or LESS. Both current modes are 60-second sprints, not fixed five-round games.</p>
              <p>For example: a cheetah’s top sprint speed shown as <strong>40 mph</strong>. The real figure is about 70 mph, so MORE is the right call.</p>

              <h3>The match clock</h3>
              <p>Solitaire uses an absolute 60-second wall clock: backgrounding grants no extra time. Arena uses a 60-second server match clock. Each question has a 1-second preview and a 750 ms feedback window; you advance at your own pace. Arena allows 2,000 ms client lag tolerance.</p>

              <h3>Scoring and skips</h3>
              <p>Correct answers earn up to 1,000 points, decaying by 1 point per 10 ms after the preview: <code>1000 − floor(max(0, responseMs − 1000) / 10)</code>. Wrong answers cost 500 points. Skips and unanswered questions earn 0.</p>
              <p>Solitaire allows unlimited permanent skips and never repeats skipped questions. Arena also allows skips. Feedback reveals whether your call was correct before you continue.</p>

              <h3>Where the deck comes from</h3>
              <p>Solitaire uses a 200-question offline qualified serving-snapshot deck generated via DDM-4. Arena gives every entrant the identical frozen deck, with independent progression over WebSockets. The studio website’s three-round sample has its own 12-second round timer; it is not a full-game mode.</p>

              <h2 id="modes">Modes at a glance</h2>
              <table>
                <thead><tr><th>Mode</th><th>What it is</th></tr></thead>
                <tbody>
                  <tr><td>Solitaire Mode</td><td>Client-authoritative offline solo speed-run. Personal Top 10 saved on device; self-reported runs sync to Firebase Functions when online.</td></tr>
                  <tr><td>Arena Mode</td><td>Server-authoritative multiplayer sprint, up to 100 entrants. Lobbies start 20 seconds after the first human joins or immediately at 100; bots fill to 8 if fewer than 8 humans join (easy 60%, medium 75%, hard 90%).</td></tr>
                </tbody>
              </table>
              <p>Arena standings sort by score descending, total answer time ascending, then entrant ID. Match persistence is server-verified. See the <a href="/products/">Products</a> page for the technology behind both modes.</p>

              <h2 id="answers">What happens to my answers</h2>
              <p>
                Solitaire runs offline from a serving-snapshot deck and keeps a local personal Top 10,
                syncing self-reported runs when online. Arena is server-authoritative and saves
                verified ranked matches. The full details are in the{" "}
                <a href="/legal/privacy/">Privacy Policy</a>; this is the short version for a
                player.
              </p>

              <h3>What the game records</h3>
              <ul>
                <li>
                  Your score, which calls you got right and which you got wrong, and how long you
                  took.
                </li>
                <li>Local Solitaire run history and server-verified Arena match results and standings.</li>
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
                A guest run has no email address attached to it, because no account exists. When the
                game makes online requests, the technical data above &mdash; including
                the IP address the request came from &mdash; is processed by the edge network that
                delivers the game, for delivery, rate limiting and abuse prevention. Automated
                checks produce a pass-or-fail signal and a signed token; they are not used to
                build a profile of you.
              </p>

              <h3>If you type a custom topic</h3>
              <p>
                The topic text is checked by a content filter and may be sent to a Google model on
                Gemini Enterprise Agent Platform with Snaptapp&rsquo;s instructions. Your identity is not sent with it. A
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
              <h2>Start a 60-second match</h2>
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
              <li><a href="https://snaptapp.us/auth">Admin</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
