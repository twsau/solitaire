import { create } from "zustand";
import { persist } from "zustand/middleware";
import { temporal } from "zundo";

interface GameState {
	grabbed: [];
	grabbedFrom: null;
	hand: [];
	waste: [];
	tableau_1: [];
	tableau_2: [];
	tableau_3: [];
	tableau_4: [];
	tableau_5: [];
	tableau_6: [];
	tableau_7: [];
	foundation_1: [];
	foundation_2: [];
	foundation_3: [];
	foundation_4: [];
}

const useGameStore = create<GameState>()(
	persist(
		temporal(
			() => ({
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
	utils: {},
};
