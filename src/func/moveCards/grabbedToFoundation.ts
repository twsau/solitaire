import { useGame } from "@/state";
import canFoundationStack from "../canFoundationStack";

export default function grabbedToFoundation(ref: number) {
  useGame.setState((state) => {
    const key = `foundation_${ref}` as keyof typeof state;
    const foundation = state[key] as typeof state.foundation_1;

    if (state.grabbed.length > 1) return state;

    const topCard = state.grabbed[0];
    if (!foundation.length && topCard.value === 1)
      return {
        grabbed: [],
        grabbedFrom: "",
        [key]: state.grabbed,
      };

    const bottomCard = foundation[foundation.length - 1];
    if (canFoundationStack(topCard, bottomCard))
      return {
        grabbed: [],
        grabbedFrom: "",
        [key]: [...foundation, ...state.grabbed],
      };

    return state;
  });
}
