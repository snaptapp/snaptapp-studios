export const ROUND_SECONDS = 12;

export type RoundFact = { topic: string; prompt: string; target: number; answer: number; unit: string; detail: string };

export const SAMPLE_DECK: RoundFact[] = [
  {
    topic: "Wildlife",
    prompt: "A cheetah's top sprint speed",
    target: 40,
    answer: 70,
    unit: "mph",
    detail: "Cheetahs can reach about 70 mph in short bursts. That is higher than the 40 mph shown in this round.",
  },
  {
    topic: "Space",
    prompt: "Orbits the ISS completes around Earth each day",
    target: 22,
    answer: 16,
    unit: "orbits",
    detail: "The station laps the planet about every 92 minutes, so the crew sees roughly 16 sunrises a day.",
  },
  {
    topic: "Ocean",
    prompt: "Number of hearts in a common octopus",
    target: 5,
    answer: 3,
    unit: "hearts",
    detail: "Two hearts pump blood through the gills and a third pumps it to the rest of the body.",
  },
];

export const SAMPLE_FACT = SAMPLE_DECK[0]!;

export type RoundChoice = "more" | "less";
export function correctChoice(fact: RoundFact): RoundChoice {
  return fact.answer > fact.target ? "more" : "less";
}
export function judgeRound(fact: RoundFact, choice: RoundChoice | null, remaining: number) {
  if (remaining <= 0 || choice === null) return "wrong";
  return choice === correctChoice(fact) ? "correct" : "wrong";
}
export function judgeSampleRound(choice: RoundChoice | null, remaining: number) {
  return judgeRound(SAMPLE_FACT, choice, remaining);
}

export function secondsRemaining(deadline: number, now: number) {
  return Math.max(0, Math.min(ROUND_SECONDS, (deadline - now) / 1000));
}
