import moveCards from "@/state/func/moveCards";
import newGame from "@/state/func/newGame";
import { useGame } from "@/state/game";
import { beforeEach, describe, expect, test } from "bun:test";

beforeEach(() => {
  useGame.setState(newGame());
});

describe("Tableau to grabbed", () => {
  const tableauKeys: TableauKey[] = [
    "tableau_1",
    "tableau_2",
    "tableau_3",
    "tableau_4",
    "tableau_5",
    "tableau_6",
    "tableau_7",
  ];

  tableauKeys.forEach((key) =>
    test(key, () => {
      const state = useGame.getState();

      moveCards("tableau_1", "grabbed", state.tableau_1[0]);
      const newState = useGame.getState();

      expect(
        newState.tableau_1.length === 0 && newState.grabbed.length === 1
      ).toBe(true);
    })
  );
});
