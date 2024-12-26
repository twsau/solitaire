import { gameStore } from "@/state";

export default function foundationToGrabbed(ref: number) {
	const state = gameStore.useState();

	const key = `foundation_${ref}` as FoundationKey;
	const foundation = state[key];
	const card = foundation[foundation.length - 1];

	gameStore.useState.setState({
		grabbed: [card],
		grabbedFrom: key,
		[key]: foundation.filter((_, index) => index !== foundation.length - 1),
	});
}
