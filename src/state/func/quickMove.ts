import { useGame } from "../game";
import { canFoundationStack } from "../util/canFoundationStack";
import moveCards from "./moveCards";

export default function quickMove(fallback: () => void) {
  const state = useGame.getState();

  const quickMoveInvalid =
    state.grabbed.length > 1 ||
    (state.grabbedFrom && state.grabbedFrom.includes("foundation"));

  if (quickMoveInvalid) {
    fallback();
    return;
  }

  const foundations: FoundationKey[] = [
    "foundation_1",
    "foundation_2",
    "foundation_3",
    "foundation_4",
  ];

  for (let i = 0; i < foundations.length; i++) {
    const key = foundations[i];
    const foundation = state[key];
    const topCard = state.grabbed[0];

    const aceToEmpty = foundation.length === 0 && topCard.value === 1;

    if (aceToEmpty) return moveCards("grabbed", key);
    if (!foundation.length) continue;

    const bottomCard = foundation[foundation.length - 1];

    if (canFoundationStack(topCard, bottomCard))
      return moveCards("grabbed", key);
  }

  fallback();
}
