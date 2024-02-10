import { useGame } from "../../game";

export default function tableauToGrabbed(ref: number, origin?: Card) {
  if (!origin) return console.error("No origin found?!");

  const state = useGame.getState();

  const key = `tableau_${ref}` as TableauKey;
  const tableau = state[key];
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
