import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { AnswerButton, Badge, Button, Card, CardLabel, CardTitle, ResultBanner, ShotClock, StatValue } from "@/design-system/more-or-less-design-system-8cbfc8";
import { useHaptics } from "@/design-system/more-or-less-design-system-8cbfc8/lib/motion";
import { judgeSampleRound, ROUND_SECONDS, SAMPLE_FACT, secondsRemaining, type RoundChoice } from "@/lib/sample-round";
import { trackEvent } from "@/lib/analytics-consent";
import "./sample-round.css";

export function SampleRound({ placement, variant = "card" }: { placement: "homepage" | "higher_lower"; variant?: "card" | "phone" }) {
  const [phase, setPhase] = useState<"ready" | "playing" | "revealed">("ready");
  const [remaining, setRemaining] = useState(ROUND_SECONDS);
  const [outcome, setOutcome] = useState<"correct" | "wrong">("wrong");
  const [timedOut, setTimedOut] = useState(false);
  const [sound, setSound] = useState(false);
  const deadline = useRef(0);
  const settled = useRef(true);
  const audio = useRef<AudioContext | null>(null);
  const haptic = useHaptics();

  // Optional browser-generated tones; no production game audio is bundled here.
  function cue(kind: "tick" | "confirm" | "error") {
    haptic(kind);
    if (!sound) return;
    try {
      const context = audio.current ?? new AudioContext();
      audio.current = context;
      void context.resume().catch(() => {});
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.setValueAtTime(kind === "confirm" ? 660 : kind === "error" ? 180 : 440, context.currentTime);
      gain.gain.setValueAtTime(0.08, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.18);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.2);
    } catch { /* Audio unavailable: the visual result still works. */ }
  }

  function finish(choice: RoundChoice | null) {
    if (settled.current) return;
    settled.current = true;
    const left = secondsRemaining(deadline.current, performance.now());
    const verdict = judgeSampleRound(choice, left);
    setRemaining(left);
    setTimedOut(left <= 0 || choice === null);
    setOutcome(verdict);
    setPhase("revealed");
    cue(verdict === "correct" ? "confirm" : "error");
    trackEvent("sample_round_answer", {
      location: placement,
      choice: choice ?? "timeout",
      result: verdict,
      seconds_left: left.toFixed(1),
    });
  }

  useEffect(() => {
    if (phase !== "playing") return;
    let frame = 0;
    function tick() {
      const left = secondsRemaining(deadline.current, performance.now());
      setRemaining(left);
      if (left <= 0) finish(null);
      else frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, sound]);

  useEffect(() => () => { void audio.current?.close().catch(() => {}); }, []);

  function start() {
    trackEvent(phase === "revealed" ? "sample_round_replay" : "sample_round_start", { location: placement });
    settled.current = false;
    deadline.current = performance.now() + ROUND_SECONDS * 1000;
    setRemaining(ROUND_SECONDS);
    setTimedOut(false);
    setPhase("playing");
    cue("tick");
  }

  if (variant === "phone") {
    return (
      <section className="sample-phone-wrap" aria-label="More or Less sample round">
        <div className="sample-phone">
          <div className="sample-phone-top">
            <Badge tone="lime">Sample round</Badge>
            <Button variant="ghost" size="sm" aria-label={sound ? "Mute sound" : "Enable sound"} aria-pressed={sound} title={sound ? "Mute sound" : "Enable sound"} onClick={() => setSound(!sound)}>
              {sound ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
            </Button>
          </div>
          {phase === "revealed" ? (
            <div className="sample-phone-reveal sample-round-reveal" aria-live="polite" aria-atomic="true">
              <ResultBanner outcome={outcome}>{timedOut ? "Time’s up — it's MORE" : outcome === "correct" ? "Correct! The answer is MORE" : "Wrong — the answer is MORE"}</ResultBanner>
              <div className="sample-phone-result">
                <s className="sample-phone-struck">{SAMPLE_FACT.target}</s>
                <StatValue value="≈70" unit="mph" tone={outcome} />
                <p className="sample-round-detail">{SAMPLE_FACT.detail}</p>
              </div>
              <Button size="lg" onClick={start}><RotateCcw aria-hidden="true" /> Play again</Button>
            </div>
          ) : (
            <>
              <ShotClock remaining={remaining} total={ROUND_SECONDS} label="Shot clock" />
              <div className="sample-phone-prompt">{SAMPLE_FACT.prompt}</div>
              <div className="sample-phone-dial">
                <span className="sample-phone-number">{SAMPLE_FACT.target}</span>
                <Badge tone="lime">{SAMPLE_FACT.unit}</Badge>
              </div>
              {phase === "ready" ? (
                <Button size="lg" onClick={start}><Play aria-hidden="true" /> Start round</Button>
              ) : (
                <div className="sample-round-answers sample-phone-answers">
                  <AnswerButton choice="more" onClick={() => finish("more")}>MORE</AnswerButton>
                  <AnswerButton choice="less" onClick={() => finish("less")}>LESS</AnswerButton>
                </div>
              )}
            </>
          )}
        </div>
        <Button variant="ghost" onClick={() => {
          trackEvent("outbound_click", { destination: "moreorless.snaptapp.us", location: `${placement}_sample_round` });
          window.location.assign("https://moreorless.snaptapp.us");
        }}>Play the full game <ExternalLink aria-hidden="true" /></Button>
      </section>
    );
  }

  return (
    <section className="sample-round-layout" aria-label="More or Less sample round">
      <div className="section-head">
        <p className="eyebrow">More or Less · Sample round</p>
        <h2>Make your call</h2>
      </div>
      <Card>
        <div className="sample-round-stack sample-round-body">
          <div className="sample-round-stack sample-round-question">
          <div className="sample-round-top">
            <Badge tone="amber">Wildlife</Badge>
            <Button variant="ghost" size="sm" aria-label={sound ? "Mute sound" : "Enable sound"} aria-pressed={sound} title={sound ? "Mute sound" : "Enable sound"} onClick={() => setSound(!sound)}>
              {sound ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}
            </Button>
          </div>
          <div>
            <CardLabel>Is the real answer more or less?</CardLabel>
            <CardTitle>{SAMPLE_FACT.prompt}</CardTitle>
            <p className="sample-round-number">{SAMPLE_FACT.target} {SAMPLE_FACT.unit}</p>
          </div>
          </div>
          <div className="sample-round-stack sample-round-controls">
          <ShotClock remaining={remaining} total={ROUND_SECONDS} label={phase === "ready" ? "12-second round" : "Shot clock"} />
          {phase === "ready" && <Button size="lg" onClick={start}><Play aria-hidden="true" /> Start round</Button>}
          {phase === "playing" && (
            <div className="sample-round-answers">
              <AnswerButton choice="more" onClick={() => finish("more")}>MORE</AnswerButton>
              <AnswerButton choice="less" onClick={() => finish("less")}>LESS</AnswerButton>
            </div>
          )}
          {phase === "revealed" && (
            <div className="sample-round-stack sample-round-reveal" aria-live="polite" aria-atomic="true">
              <ResultBanner outcome={outcome}>{timedOut ? "Time’s up — the answer is MORE" : outcome === "correct" ? "Correct — MORE!" : "Not quite — the answer is MORE"}</ResultBanner>
              <StatValue value="≈70" unit="mph" tone={outcome} />
              <p className="sample-round-detail">{SAMPLE_FACT.detail}</p>
              <div><Button variant="ghost" onClick={start}><RotateCcw aria-hidden="true" /> Replay round</Button></div>
            </div>
          )}
          </div>
        </div>
      </Card>
      <div className="sample-round-actions">
        <Button onClick={() => {
          trackEvent("outbound_click", { destination: "moreorless.snaptapp.us", location: `${placement}_sample_round` });
          window.location.assign("https://moreorless.snaptapp.us");
        }}>Play the full game <ExternalLink aria-hidden="true" /></Button>
      </div>
    </section>
  );
}