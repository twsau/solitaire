import { useGame } from "@/state/game";
import moveCards from "../moveCards";
import { canFoundationStack } from "../fromTo/grabbedToFoundation";

export default function quickMove(fallback: () => void) {
  const state = useGame.getState();
  if (state.grabbed.length > 1 || state.grabbedFrom.includes("foundation"))
    return fallback();

  const foundations = [
    "foundation_1",
    "foundation_2",
    "foundation_3",
    "foundation_4",
  ];

  for (let i = 0; i < foundations.length; i++) {
    const key = foundations[i] as Exclude<Game["grabbedFrom"], "" | "grabbed">;
    const foundation = state[key];
    const topCard = state.grabbed[0];

    const aceToEmpty = foundation.length === 0 && topCard.value === 1;

    if (aceToEmpty) return moveCards("grabbed", key);

    const bottomCard = foundation[foundation.length - 1];

    if (canFoundationStack(topCard, bottomCard))
      return moveCards("grabbed", key);
  }

  fallback();
}
