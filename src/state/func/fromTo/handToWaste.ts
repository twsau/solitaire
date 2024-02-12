import { useGame } from "../../game";

export default function handToWaste() {
  const state = useGame.getState();

  const endOfHand = !state.hand.length;

  if (endOfHand)
    return useGame.setState({
      hand: state.waste.map((c) => ({ ...c, facing: "down" })),
      waste: [],
    });
  else
    useGame.setState({
      waste: [...state.waste, { ...state.hand[state.hand.length - 1] }].map(
        (c) => ({ ...c, facing: "up" })
      ),
      hand: state.hand.slice(0, -1),
    });
}
