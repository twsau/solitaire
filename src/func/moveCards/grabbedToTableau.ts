import { useGame } from "@/state";
import canTableauStack from "../canTableauStack";

export default function grabbedToTableau(ref: number) {
  useGame.setState((state) => {
    const key = `tableau_${ref}` as keyof typeof state;
    const tableau = state[key] as typeof state.tableau_1;

    if (
      state.grabbedFrom === key ||
      (tableau.length === 0 && state.grabbed[0].value === 13)
    )
      return {
        grabbed: [],
        grabbedFrom: "",
        [key]: [...tableau, ...state.grabbed],
      };

    const bottomCard = tableau[tableau.length - 1];
    const topCard = state.grabbed[0];

    if (canTableauStack(topCard, bottomCard))
      return {
        grabbed: [],
        [key]: [...tableau, ...state.grabbed],
      };

    return state;
  });
}
