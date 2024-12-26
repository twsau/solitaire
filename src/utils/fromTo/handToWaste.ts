import { gameStore } from "@/state";

export default function handToWaste() {
	const state = gameStore.useState.getState();

	const endOfHand = !state.hand.length;

	if (endOfHand)
		return gameStore.useState.setState({
			hand: state.waste.map((c) => ({ ...c, facing: "down" })),
			waste: [],
		});
}
