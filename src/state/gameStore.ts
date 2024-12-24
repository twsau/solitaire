import { create } from "zustand";
import { persist } from "zustand/middleware";
import { temporal } from "zundo";
import newGame from "@/utils/newGame";

interface GameState {
	grabbed: Card[];
	grabbedFrom: null;
	hand: Card[];
	waste: Card[];
	tableau_1: Card[];
	tableau_2: Card[];
	tableau_3: Card[];
	tableau_4: Card[];
	tableau_5: Card[];
	tableau_6: Card[];
	tableau_7: Card[];
	foundation_1: Card[];
	foundation_2: Card[];
	foundation_3: Card[];
	foundation_4: Card[];
}

const useGameStore = create<GameState>()(
	persist(
		temporal(
			() => ({
				grabbed: [] as Card[],
				grabbedFrom: null,
				hand: [] as Card[],
				waste: [] as Card[],
				tableau_1: [] as Card[],
				tableau_2: [] as Card[],
				tableau_3: [] as Card[],
				tableau_4: [] as Card[],
				tableau_5: [] as Card[],
				tableau_6: [] as Card[],
				tableau_7: [] as Card[],
				foundation_1: [] as Card[],
				foundation_2: [] as Card[],
				foundation_3: [] as Card[],
				foundation_4: [] as Card[],
			}),
			{ limit: 100 }, // maybe set this to something better?
		),
		{
			name: "solitaire-game",
		},
	),
);

export const gameStore = {
	useState: useGameStore,
	utils: {
		newGame,
	},
};
