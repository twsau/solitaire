import fullDeck from "../util/fullDeck";
import shuffleCards from "../util/shuffleCards";

export default function newGame(): Game {
  const hand = shuffleCards(fullDeck());
  const tableaux: Card[][] = [[], [], [], [], [], [], []];

  for (let i = 0; i < 7; i++) {
    const index = i % 7;
    const destination = tableaux[index];

    while (destination.length < index + 1) destination.push(hand.pop() as Card);

    const lastCard = destination[destination.length - 1];
    lastCard.facing = "up";
  }

  return {
    loading: false,
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
  };
}
