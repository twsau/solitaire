import { useGame } from "@/state";

export default function wasteToGrabbed() {
  useGame.setState((state) => {
    const card = state.waste.pop();
    if (!card) return state;

    return {
      grabbed: [...state.grabbed, card],
      grabbedFrom: "waste",
      waste: state.waste,
    };
  });
}
