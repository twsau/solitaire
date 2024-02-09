import { useGame } from "@/state/game";
import canTableauStack from "../canTableauStack";

export default function grabbedToTableau(ref: number) {
  useGame.setState((state) => {
    const key = `tableau_${ref}` as keyof typeof state;
    const tableau = state[key] as typeof state.tableau_1;
    const topCard = state.grabbed[0];

    if (!tableau.length && topCard.value !== 13) return state;

    if (
      state.grabbedFrom === key ||
      (tableau.length === 0 && topCard.value === 13)
    )
      return {
        grabbed: [],
        grabbedFrom: "",
        [key]: [...tableau, ...state.grabbed],
      };

    const bottomCard = tableau[tableau.length - 1];

    if (canTableauStack(topCard, bottomCard))
      return {
        grabbed: [],
        [key]: [...tableau, ...state.grabbed],
      };

    return state;
  });
}
