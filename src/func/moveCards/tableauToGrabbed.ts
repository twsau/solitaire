import { useGame } from "@/state/game";

export default function tableauToGrabbed(ref: number, origin?: Card) {
  useGame.setState((state) => {
    if (!origin) return state;

    const key = `tableau_${ref}` as keyof typeof state;
    const tableau = state[key] as typeof state.tableau_1;
    const originIndex = tableau.indexOf(origin);
    const lastCard = originIndex === tableau.length;

    if (lastCard) {
      if (tableau[tableau.length - 1].facing === "down")
        return {
          [key]: tableau.map((card, index) =>
            index === tableau.length - 1 ? { ...card, facing: "up" } : card
          ),
        };
      return {
        grabbed: [tableau[tableau.length - 1]],
        grabbedFrom: key,
        [key]: tableau.filter((_, index) => index !== tableau.length - 1),
      };
    } else {
      return {
        grabbed: tableau.splice(originIndex, tableau.length - originIndex),
        grabbedFrom: key,
        [key]: tableau.filter((_, index) => index < originIndex),
      };
    }
  });
}
