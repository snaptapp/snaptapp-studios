import { createFileRoute } from "@tanstack/react-router";

import { useSiteBehaviour } from "@/lib/use-site-behaviour";

export const Route = createFileRoute("/questions-with-numerical-answers")({
  head: () => ({
    meta: [
      {
        title: "Questions with numerical answers — Snaptapp",
      },
      {
        name: "description",
        content:
          "Real trivia questions with numerical answers, each with its verified value — and the game that turns them into fast MORE or LESS rounds.",
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
        content: "Questions with numerical answers — Snaptapp",
      },
      {
        property: "og:description",
        content:
          "Example trivia questions with numerical answers and their real values. Play them as fast MORE or LESS rounds.",
      },
      {
        property: "og:url",
        content: "https://snaptapp.us/questions-with-numerical-answers/",
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
        href: "https://snaptapp.us/questions-with-numerical-answers/",
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
  component: PageNumericalQuestions,
});

function PageNumericalQuestions() {
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
              <li>Questions with numerical answers</li>
            </ol>
            <h1>Questions with numerical answers</h1>
            <p className="lede">
              Ten real numerical trivia questions with their verified values — the kind of
              facts that power More or Less, our fast trivia game about numbers.
            </p>
          </div>
        </section>

        <section className="section section--tight">
          <div className="shell">
            <div className="prose">
              <p>
                The best trivia questions have a number for an answer. A number can be checked,
                argued over, and turned into a bet &mdash; which is exactly what More or Less does:
                every round shows you a claim with a believable but incorrect number, and you have
                to decide whether the real answer is <strong>more</strong> or <strong>less</strong>{" "}
                before the clock runs out.
              </p>
              <p>
                Below are ten questions with numerical answers from the game&rsquo;s topics, each
                with its real value. Try calling each one before you read the answer &mdash;
                that is the whole game.
              </p>

              <h2>Example questions and their real values</h2>

              <table>
                <thead>
                  <tr>
                    <th scope="col">Question</th>
                    <th scope="col">Real answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>How fast can a cheetah sprint at top speed?</td>
                    <td>About 70 mph</td>
                  </tr>
                  <tr>
                    <td>How many bones are in the adult human body?</td>
                    <td>206</td>
                  </tr>
                  <tr>
                    <td>How far is the Moon from Earth, on average?</td>
                    <td>About 384,400 km</td>
                  </tr>
                  <tr>
                    <td>How tall is Mount Everest above sea level?</td>
                    <td>8,849 m</td>
                  </tr>
                  <tr>
                    <td>How long is a year on Mars, in Earth days?</td>
                    <td>687 Earth days</td>
                  </tr>
                  <tr>
                    <td>How tall is the Eiffel Tower, including its antennas?</td>
                    <td>About 330 m</td>
                  </tr>
                  <tr>
                    <td>How many times does the human heart beat per day?</td>
                    <td>Roughly 100,000</td>
                  </tr>
                  <tr>
                    <td>How tall was the Great Pyramid of Giza when completed?</td>
                    <td>About 146.6 m</td>
                  </tr>
                  <tr>
                    <td>How long is one rotation of Venus, in Earth days?</td>
                    <td>243 Earth days</td>
                  </tr>
                  <tr>
                    <td>How long is the Golden Gate Bridge&rsquo;s main span?</td>
                    <td>About 1,280 m</td>
                  </tr>
                </tbody>
              </table>

              <p className="small muted">
                Values are kept to the accuracy the game serves; a few of these change with
                better measurement, which is why every curated fact is verified before it is
                shown to players.
              </p>

              <h3>Why the wrong number matters</h3>
              <p>
                In More or Less, you never type an answer. The question arrives with a number
                already filled in &mdash; one that sounds plausible. A cheetah claim might show
                40 mph. If the real answer is higher, you press <strong>MORE</strong>; if it is
                lower, you press <strong>LESS</strong>. That single decision, made against a
                ticking clock, is what makes numerical trivia fast to play and hard to put down.
              </p>

              <h3>Where the questions come from</h3>
              <p>
                Curated rounds are drawn from a verified fact bank &mdash; each claim checked,
                each number sourced, before it reaches a player. Custom topics are generated on
                demand and checked in the same way, so a round about your favourite subject plays
                by the same rules as one about cheetahs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--edge">
          <div className="shell">
            <div className="section-head reveal">
              <p className="eyebrow">More or Less</p>
              <h2>Play these as real rounds</h2>
            </div>
            <p className="prose reveal">
              More or Less is free to play in your browser, solo or with up to ten players in a
              room. Pick a topic, make your calls, and see how many numbers you really know.
            </p>
            <p className="mt-md reveal">
              <a className="btn btn--primary" href="https://moreorless.snaptapp.us">Play More or Less
                <svg className="btn__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
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
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
