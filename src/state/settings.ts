import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Settings {
  deckStyle: number;
}

const initialState: Settings = {
  deckStyle: 7,
};

export const useSettings = create<Settings>()(
  persist(() => initialState, { name: "solitaire" })
);

export const setDeckStyle = (deckStyle: Settings["deckStyle"]) =>
  useSettings.setState({ deckStyle });
