import { create } from "zustand";

// the absolute state of this thing

const initialState: Game = {
  loading: true,
  grabbed: [],
  grabbedFrom: null,
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
