// testing new game functionality
// no changes to state should be made in this file

import newGame from "@/state/func/newGame";
import { useGame } from "@/state/game";
import { describe, expect, test } from "bun:test";

useGame.setState(newGame());
const state = useGame.getState();

const foundations = [
  state.foundation_1,
  state.foundation_2,
  state.foundation_3,
  state.foundation_4,
];

const tableaux = [
  state.tableau_1,
  state.tableau_2,
  state.tableau_3,
  state.tableau_4,
  state.tableau_5,
  state.tableau_6,
  state.tableau_7,
];

const allStacks = [
  ...state.hand,
  ...state.waste,
  ...foundations.flat(),
  ...tableaux.flat(),
  ...state.grabbed,
];

describe("New game", () => {
  test("There are 52 cards", () => {
    expect(allStacks.length).toBe(52);
  });

  test("There are no duplicate cards", () => {
    const set = new Set(allStacks);

    expect(allStacks.length === set.size).toBe(true);
  });

  test("grabbedFrom is null on init", () => {
    expect(state.grabbedFrom === null).toBe(true);
  });

  test("Foundations are empty on init", () => {
    expect(foundations.every((foundation) => foundation.length === 0)).toBe(
      true
    );
  });

  test("Tableaux have the correct number of cards on init", () => {
    expect(
      tableaux.every((tableau, index) => (tableau.length = index + 1))
    ).toBe(true);
  });

  test("Waste is empty on init", () => {
    const state = useGame.getState();
    expect(state.waste.length === 0).toBe(true);
  });
});
