import { create } from "zustand";

export interface SettingsState {
	theme: "classic" | "royal" | "slate" | "sanguine" | "midnight";
}

const useSettingsStore = create<SettingsState>()(() => ({
	theme: "classic",
}));

export const settingsStore = {
	useState: useSettingsStore,
	utils: {
		theme: {
			setTheme: (theme: SettingsState["theme"]) =>
				useSettingsStore.setState({ theme }),
		},
	},
};
