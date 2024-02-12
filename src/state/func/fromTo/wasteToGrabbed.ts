import { useGame } from "../../game";

export default function wasteToGrabbed() {
  useGame.setState((state) => ({
    grabbed: [state.waste[state.waste.length - 1]],
    grabbedFrom: "waste",
    waste: state.waste.slice(0, -1),
  }));
}
