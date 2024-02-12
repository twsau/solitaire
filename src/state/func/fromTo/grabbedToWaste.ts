import { useGame } from "../../game";

export default function grabbedToWaste() {
  const state = useGame.getState();

  if (!state.grabbed?.length || state.grabbedFrom !== "waste") return;

  useGame.setState((state) => ({
    grabbed: [],
    grabbedFrom: null,
    waste: [...state.waste, ...state.grabbed],
  }));
}
