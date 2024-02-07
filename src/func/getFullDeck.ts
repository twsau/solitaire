export default function getFullDeck(): CardStack {
  const hand = new Set<Card>();

  // populate hand
  for (let v = 1; v < 14; v++) {
    const suits: CardSuit[] = ["hearts", "diamonds", "clubs", "spades"];

    for (let s = 0; s < suits.length; s++) {
      const value = v as CardValue;
      const suit = suits[s];

      hand.add({
        value,
        suit,
        facing: "down",
      });
    }
  }

  return hand;
}
