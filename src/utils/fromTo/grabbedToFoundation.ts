import { gameStore } from "@/state";
import { canFoundationStack } from "../canFoundationStack";

export default function grabbedToFoundation(ref: number) {
	const game = gameStore.useState();

	if (game.grabbed.length > 1) return;

	const key = `foundation_${ref}` as keyof typeof game;
	const foundation = game[key] as typeof game.foundation_1;

	const swap = () =>
		gameStore.useState.setState({
			grabbed: [],
			grabbedFrom: "",
			[key]: [...foundation, ...game.grabbed],
		});

	const topCard = game.grabbed[0];
	const aceToEmpty = !foundation.length && topCard.value === 1;

	if (aceToEmpty) return swap();
	if (!foundation.length && topCard.value !== 1) return;

	const bottomCard = foundation[foundation.length - 1];

	if (canFoundationStack(topCard, bottomCard)) return swap();
}
