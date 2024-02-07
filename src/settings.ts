import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Settings {
  deckStyle: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const initialState: Settings = {
  deckStyle: 1,
};

export const useSettings = create<Settings>()(
  persist(() => initialState, { name: "solitaire" })
);

export const chooseDeckStyle = (deckStyle: Settings["deckStyle"]) =>
  useSettings.setState({ deckStyle });
