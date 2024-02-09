export default function getFullDeck(): CardStack {
  const hand: Card[] = [];

  for (let v = 1; v < 14; v++) {
    const suits: CardSuit[] = ["hearts", "diamonds", "clubs", "spades"];

    for (let s = 0; s < suits.length; s++) {
      const value = v;
      const suit = suits[s];

      hand.push({
        value,
        suit,
        facing: "down",
      });
    }
  }

  return hand;
}
