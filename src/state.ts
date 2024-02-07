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
  waste: new Set<Card>(),
  tableau: [
    new Set<Card>(),
    new Set<Card>(),
    new Set<Card>(),
    new Set<Card>(),
    new Set<Card>(),
    new Set<Card>(),
    new Set<Card>(),
  ],
  foundations: [
    new Set<Card>(),
    new Set<Card>(),
    new Set<Card>(),
    new Set<Card>(),
  ],
};

export const useGame = create<Game>()(() => initialState);
