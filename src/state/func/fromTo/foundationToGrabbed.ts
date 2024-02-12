import { useGame } from "../../game";

export default function foundationToGrabbed(ref: number) {
  const state = useGame.getState();

  const key = `foundation_${ref}` as FoundationKey;
  const foundation = state[key];
  const card = foundation[foundation.length - 1];

  useGame.setState({
    grabbed: [card],
    grabbedFrom: key,
    [key]: foundation.filter((_, index) => index !== foundation.length - 1),
  });
}
