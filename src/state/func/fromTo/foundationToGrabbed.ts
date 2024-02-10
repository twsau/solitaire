import { useGame } from "@/state/game";

export default function foundationToGrabbed(ref: number) {
  const state = useGame.getState();

  const key = `foundation_${ref}` as Exclude<Game["grabbedFrom"], "">;
  const foundation = state[key] as typeof state.foundation_1;
  const card = foundation[foundation.length - 1];

  useGame.setState({
    grabbed: [card],
    grabbedFrom: key,
    [key]: foundation.filter((_, index) => index !== foundation.length - 1),
  });
}
