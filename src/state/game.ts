import { create } from "zustand";

interface Game {
  loading: boolean;
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
  loading: true,
  grabbed: [],
  grabbedFrom: "",
  hand: [],
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
