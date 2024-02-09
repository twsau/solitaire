import { useGame } from "@/state/game";
import moveCards from "./moveCards";
import canFoundationStack from "./canFoundationStack";

export default function attemptQuickMove() {
  const state = useGame.getState();

  // return if nothing grabbed
  if (state.grabbed.length !== 1) return;

  const topCard = state.grabbed[0];
  // iterate over the foundations until you find a match
  for (let i = 1; i < 5; i++) {
    const key = `foundation_${i}` as
      | "foundation_1"
      | "foundation_2"
      | "foundation_3"
      | "foundation_4";
    const foundation = state[key];

    if (!foundation.length && topCard.value === 1) {
      moveCards("grabbed", key);
      return;
    }

    const bottomCard = foundation[foundation.length - 1];
    if (canFoundationStack(topCard, bottomCard)) {
      moveCards("grabbed", key);
      return;
    }
  }
}
