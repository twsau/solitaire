import { gameStore } from "@/state";
import fullDeck from "./fullDeck";
import shuffleCards from "./shuffleCards";

export default function newGame() {
	const deck = fullDeck();
	const hand = shuffleCards(deck);
	const tableaux: Card[][] = [[], [], [], [], [], [], []];

	for (let i = 0; i < 7; i++) {
		const index = i % 7;
		const destination = tableaux[index];

		while (destination.length < index + 1) destination.push(hand.pop() as Card);

		const lastCard = destination[destination.length - 1];
		lastCard.facing = "up";
	}

	gameStore.useState.setState({
		hand,
		waste: [],
		foundation_1: [],
		foundation_2: [],
		foundation_3: [],
		foundation_4: [],
		grabbed: [],
		grabbedFrom: null,
		tableau_1: tableaux[0],
		tableau_2: tableaux[1],
		tableau_3: tableaux[2],
		tableau_4: tableaux[3],
		tableau_5: tableaux[4],
		tableau_6: tableaux[5],
		tableau_7: tableaux[6],
	});
}
