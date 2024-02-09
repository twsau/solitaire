import { useGame } from "@/state/game";

export default function grabbedToWaste() {
  const state = useGame.getState();

  if (state.grabbedFrom === "waste")
    useGame.setState((state) => ({
      grabbed: [],
      grabbedFrom: "",
      waste: [...state.waste, ...state.grabbed],
    }));
}
