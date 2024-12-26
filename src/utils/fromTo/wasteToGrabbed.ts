import { gameStore } from "@/state";

export default function wasteToGrabbed() {
	gameStore.useState.setState((state) => ({
		grabbed: [state.waste[state.waste.length - 1]],
		grabbedFrom: "waste",
		waste: state.waste.slice(0, -1),
	}));
}
