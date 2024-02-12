import moveCards from "@/state/func/moveCards";
import newGame from "@/state/func/newGame";
import { useGame } from "@/state/game";
import { beforeEach, describe, expect, test } from "bun:test";

const ACE_OF_HEARTS: Card = { facing: "up", suit: "hearts", value: 1 };
const TWO_OF_HEARTS: Card = { facing: "up", suit: "hearts", value: 2 };
const KING_OF_HEARTS: Card = { facing: "up", suit: "hearts", value: 13 };
const TWO_OF_CLUBS: Card = { facing: "up", suit: "clubs", value: 2 };
const QUEEN_OF_CLUBS: Card = { facing: "up", suit: "clubs", value: 12 };

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

  test("Error on origin not passed", () => {
    expect(() => moveCards("tableau_1", "grabbed")).toThrow(
      "Origin undefined!"
    );
  });
});

describe("Grabbed to foundation", () => {
  test("Stacks ace on empty", () => {
    useGame.setState({ grabbed: [ACE_OF_HEARTS] });

    moveCards("grabbed", "foundation_1");

    const newState = useGame.getState();

    expect(
      newState.foundation_1[0] === ACE_OF_HEARTS &&
        newState.grabbed.length === 0
    ).toBe(true);
  });

  test("Stacks two of hearts on ace of hearts", () => {
    useGame.setState({
      grabbed: [TWO_OF_HEARTS],
      foundation_1: [ACE_OF_HEARTS],
    });

    moveCards("grabbed", "foundation_1");

    const newState = useGame.getState();

    expect(
      newState.foundation_1[1] === TWO_OF_HEARTS &&
        newState.grabbed.length === 0
    ).toBe(true);
  });

  test("Doesn't stack mismatched suits", () => {
    useGame.setState({
      grabbed: [TWO_OF_CLUBS],
      foundation_1: [ACE_OF_HEARTS],
    });

    moveCards("grabbed", "foundation_1");

    const newState = useGame.getState();

    expect(
      newState.foundation_1.length === 1 && newState.grabbed[0] === TWO_OF_CLUBS
    ).toBe(true);
  });

  test("Doesn't stack mismatched values", () => {
    useGame.setState({
      grabbed: [KING_OF_HEARTS],
      foundation_1: [ACE_OF_HEARTS],
    });

    moveCards("grabbed", "foundation_1");

    const newState = useGame.getState();

    expect(
      newState.foundation_1.length === 1 &&
        newState.grabbed[0] === KING_OF_HEARTS
    ).toBe(true);
  });
});

describe("Hand to waste", () => {
  test("Card moved from hand to waste", () => {
    moveCards("hand", "waste");
    const newState = useGame.getState();

    expect(newState.hand.length).toBe(23);
    expect(newState.waste.length).toBe(1);
  });

  test("Flips waste to hand if hand is empty", () => {
    useGame.setState((state) => ({
      hand: [],
      waste: state.hand.map((c) => ({ ...c, facing: "up" })),
    }));

    moveCards("hand", "waste");
    const newState = useGame.getState();

    expect(newState.hand.length).toBe(24);
  });
});

describe("Foundation to Grabbed", () => {
  test("Can grab from foundation", () => {
    useGame.setState({ foundation_1: [ACE_OF_HEARTS] });

    moveCards("foundation_1", "grabbed");
    const newState = useGame.getState();

    expect(newState.grabbed.length).toBe(1);
    expect(newState.foundation_1.length).toBe(0);
  });
});

describe("Grabbed to Tableau", () => {
  test("King stacks on empty", () => {
    useGame.setState({ grabbed: [KING_OF_HEARTS], tableau_1: [] });

    moveCards("grabbed", "tableau_1");
    const newState = useGame.getState();

    expect(newState.tableau_1.length).toBe(1);
    expect(newState.grabbed.length).toBe(0);
  });

  test("Queen of clubs stacks on king of hearts", () => {
    useGame.setState({
      grabbed: [QUEEN_OF_CLUBS],
      tableau_1: [KING_OF_HEARTS],
    });

    moveCards("grabbed", "tableau_1");
    const newState = useGame.getState();

    expect(newState.tableau_1.length).toBe(2);
    expect(newState.grabbed.length).toBe(0);
  });

  test("King of hearts doesn't stack on queen of clubs", () => {
    useGame.setState({
      grabbed: [KING_OF_HEARTS],
      tableau_1: [QUEEN_OF_CLUBS],
    });

    moveCards("grabbed", "tableau_1");
    const newState = useGame.getState();

    expect(newState.tableau_1.length).toBe(1);
    expect(newState.grabbed.length).toBe(1);
  });
});

describe("Grabbed to waste", () => {
  test("Can return to sender", () => {
    useGame.setState({ grabbed: [TWO_OF_CLUBS], grabbedFrom: "waste" });

    moveCards("grabbed", "waste");
    const newState = useGame.getState();

    expect(newState.waste.length).toBe(1);
    expect(newState.grabbed.length).toBe(0);
  });

  test("Otherwise don't", () => {
    useGame.setState({ grabbed: [TWO_OF_CLUBS], grabbedFrom: "tableau_1" });

    moveCards("grabbed", "waste");
    const newState = useGame.getState();

    expect(newState.waste.length).toBe(0);
    expect(newState.grabbed.length).toBe(1);
  });
});

describe("Waste to grabbed", () => {
  test("it works", () => {
    useGame.setState((state) => ({
      hand: [],
      waste: state.hand.map((c) => ({ ...c, facing: "up" })),
    }));

    moveCards("waste", "grabbed");

    const newState = useGame.getState();

    expect(newState.grabbed.length).toBe(1);
    expect(newState.waste.length).toBe(23);
  });
});
