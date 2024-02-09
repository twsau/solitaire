import { useGame } from "@/state";

export default function grabbedToWaste() {
  useGame.setState((state) => {
    if (state.grabbed.length !== 1 || state.grabbedFrom !== "waste")
      return state;

    const card = state.grabbed.pop();
    if (!card) return state;

    return {
      grabbed: [],
      grabbedFrom: "",
      waste: [...state.waste, card],
    };
  });
}
