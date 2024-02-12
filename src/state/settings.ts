import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Settings {
  deckStyle: number;
  locale: SupportedLocale;
}

const initialState: Settings = {
  deckStyle: 4,
  locale: "en",
};

export const useSettings = create<Settings>()(
  persist(() => initialState, { name: "solitaire" })
);

export const setDeckStyle = (deckStyle: Settings["deckStyle"]) =>
  useSettings.setState({ deckStyle });

export const setLocale = (locale: SupportedLocale) =>
  useSettings.setState({ locale });
