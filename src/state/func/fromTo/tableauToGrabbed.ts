import { useGame } from "../../game";

export default function tableauToGrabbed(ref: number, origin?: Card) {
  if (!origin) throw new Error("Origin undefined!");

  const state = useGame.getState();

  const key = `tableau_${ref}` as TableauKey;
  const tableau = state[key];
  const originIndex = tableau.indexOf(origin);

  useGame.setState({
    grabbed: tableau.splice(originIndex, tableau.length - originIndex),
    grabbedFrom: key,
    [key]: tableau.filter((_, index) => index < originIndex),
  });
}
