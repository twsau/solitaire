import { create } from "zustand";
import shuffleCards from "./func/shuffleCards";
import getFullDeck from "./func/getFullDeck";

interface Game {
  grabbed: CardStack;
  grabbedFrom: string;
  hand: CardStack;
  waste: CardStack;
  tableau_1: CardStack;
  tableau_2: CardStack;
  tableau_3: CardStack;
  tableau_4: CardStack;
  tableau_5: CardStack;
  tableau_6: CardStack;
  tableau_7: CardStack;
  foundation_1: Card[];
  foundation_2: Card[];
  foundation_3: Card[];
  foundation_4: Card[];
}

const initialState: Game = {
  grabbed: [],
  grabbedFrom: "",
  hand: shuffleCards(getFullDeck()),
  waste: [],
  tableau_1: [],
  tableau_2: [],
  tableau_3: [],
  tableau_4: [],
  tableau_5: [],
  tableau_6: [],
  tableau_7: [],
  foundation_1: [],
  foundation_2: [],
  foundation_3: [],
  foundation_4: [],
};

export const useGame = create<Game>()(() => initialState);

export const setGame = () => {
  const hand = [...useGame.getState().hand];

  const stacks: Card[][] = [[], [], [], [], [], [], []];

  for (let i = 0; i < 7; i++) {
    const index = i % 7;
    const destination = stacks[index];

    while (destination.length < index + 1) destination.push(hand.pop() as Card);

    const lastCard = destination[destination.length - 1];
    lastCard.facing = "up";
  }

  useGame.setState({
    hand,
    tableau_1: stacks[0],
    tableau_2: stacks[1],
    tableau_3: stacks[2],
    tableau_4: stacks[3],
    tableau_5: stacks[4],
    tableau_6: stacks[5],
    tableau_7: stacks[6],
  });
};
