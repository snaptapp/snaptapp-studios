export const ROUND_SECONDS = 12;
export const SAMPLE_FACT = {
  prompt: "A cheetah's top sprint speed",
  target: 40,
  answer: 70,
  unit: "mph",
  detail: "Cheetahs can reach about 70 mph in short bursts. That is higher than the 40 mph shown in this round.",
};

export type RoundChoice = "more" | "less";
export function judgeSampleRound(choice: RoundChoice | null, remaining: number) {
  if (remaining <= 0 || choice === null) return "wrong";
  return (choice === "more" ? SAMPLE_FACT.answer > SAMPLE_FACT.target : SAMPLE_FACT.answer < SAMPLE_FACT.target)
    ? "correct" : "wrong";
}

export function secondsRemaining(deadline: number, now: number) {
  return Math.max(0, Math.min(ROUND_SECONDS, (deadline - now) / 1000));
}