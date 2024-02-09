import { useGame } from "./state/game";

export default function devLog() {
  if (process.env.NODE_ENV !== "development") return;

  useGame.subscribe((state) => {
    const cardNum =
      state.foundation_1.length +
      state.foundation_2.length +
      state.foundation_3.length +
      state.foundation_4.length +
      state.grabbed.length +
      state.hand.length +
      state.tableau_1.length +
      state.tableau_2.length +
      state.tableau_3.length +
      state.tableau_4.length +
      state.tableau_5.length +
      state.tableau_6.length +
      state.tableau_7.length +
      state.waste.length;

    if (cardNum !== 52) console.error(`THERE ARE ${cardNum} CARDS!!!`);

    console.log({ cardNum });
  });
}
