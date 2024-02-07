import { create } from "zustand";
import shuffleCards from "./func/shuffleCards";
import getFullDeck from "./func/getFullDeck";

interface Game {
  hand: CardStack;
  waste: CardStack;
  tableau: [
    CardStack,
    CardStack,
    CardStack,
    CardStack,
    CardStack,
    CardStack,
    CardStack
  ];
  foundations: [CardStack, CardStack, CardStack, CardStack];
}

const initialState: Game = {
  hand: shuffleCards(getFullDeck()),
  waste: [],
  tableau: [[], [], [], [], [], [], []],
  foundations: [[], [], [], []],
};

export const useGame = create<Game>()(() => initialState);
export const setGame = () => {
  const hand = useGame.getState().hand;
  const tableau = useGame.getState().tableau;

  for (let i = 0; i < 7; i++) {
    const index = i % 7;
    let destination = tableau[index];

    while (destination.length < index + 1) {
      destination.push(hand.pop() as Card);
    }

    destination[destination.length - 1].facing = "up";
  }

  useGame.setState({ hand, tableau });
};
