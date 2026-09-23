import { useEffect, useState } from "react";

import {
  applyStoredConsent,
  readConsent,
  setConsent,
  type ConsentChoice,
} from "../lib/analytics-consent";

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setChoice(stored);
    setOpen(stored === null);
    applyStoredConsent();
    setReady(true);
  }, []);

  function decide(next: ConsentChoice) {
    setConsent(next);
    setChoice(next);
    setOpen(false);
  }

  if (!ready) return null;

  if (!open) {
    return (
      <button className="cookie-reopen" type="button" onClick={() => setOpen(true)}>
        Cookie settings
      </button>
    );
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie settings" aria-live="polite">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <p className="eyebrow">Cookies</p>
          <p>
            We use analytics cookies to see which pages people visit. They only run if you
            allow them. Details are in our <a href="/legal/privacy/">privacy policy</a> and{" "}
            <a href="/legal/cookies/">cookie policy</a>.
          </p>
        </div>
        <div className="row cookie-banner__actions">
          <button className="btn btn--primary btn--sm" type="button" onClick={() => decide("granted")}>
            Allow analytics
          </button>
          <button className="btn btn--secondary btn--sm" type="button" onClick={() => decide("denied")}>
            Decline
          </button>
        </div>
        {choice ? (
          <p className="cookie-banner__status">
            Current setting: analytics {choice === "granted" ? "allowed" : "declined"}.
          </p>
        ) : null}
      </div>
    </div>
  );
}
