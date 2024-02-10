import { useGame } from "../../game";

export default function grabbedToWaste() {
  const state = useGame.getState();

  if (state.grabbedFrom === "waste")
    useGame.setState((state) => ({
      grabbed: [],
      grabbedFrom: null,
      waste: [...state.waste, ...state.grabbed],
    }));
}
