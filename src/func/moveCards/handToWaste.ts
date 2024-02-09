import { useGame } from "@/state";

export default function handToWaste() {
  useGame.setState((state) => {
    if (!state.hand.length) {
      return {
        hand: state.waste.map((card) => ({ ...card, facing: "down" })),
        waste: [],
      };
    }

    const card = state.hand.pop() as Card;
    return {
      hand: state.hand,
      waste: [...state.waste, { ...card, facing: "up" }],
    };
  });
}