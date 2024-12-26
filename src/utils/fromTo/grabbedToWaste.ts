import { gameStore } from "@/state";

export default function grabbedToWaste() {
	const state = gameStore.useState.getState();

	if (!state.grabbed?.length || state.grabbedFrom !== "waste") return;

	gameStore.useState.setState((state) => ({
		grabbed: [],
		grabbedFrom: "",
		waste: [...state.waste, ...state.grabbed],
	}));
}
