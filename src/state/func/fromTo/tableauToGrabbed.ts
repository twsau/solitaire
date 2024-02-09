import { useGame } from "@/state/game";

export default function tableauToGrabbed(ref: number, origin?: Card) {
  if (!origin) return console.error("No origin found?!");

  const state = useGame.getState();

  const key = `tableau_${ref}` as keyof typeof state;
  const tableau = state[key] as typeof state.tableau_1;
  const originIndex = tableau.indexOf(origin);
  const lastCard = originIndex === tableau.length;

  if (lastCard)
    return useGame.setState({
      grabbed: [tableau[tableau.length - 1]],
      grabbedFrom: key,
      [key]: tableau.filter((_, index) => index !== tableau.length - 1),
    });
  else
    return useGame.setState({
      grabbed: tableau.splice(originIndex, tableau.length - originIndex),
      grabbedFrom: key,
      [key]: tableau.filter((_, index) => index < originIndex),
    });
}
