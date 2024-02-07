export default function getFullDeck(): CardStack {
  const hand = new Set<Card>();

  // populate hand
  for (let i = 1; i < 14; i++) {
    ["hearts", "diamonds", "clubs", "spades"].forEach((s) => {
      const value = i as CardValue;
      const suit = s as CardSuit;

      hand.add({
        value,
        suit,
        facing: "down",
      });
    });
  }

  return hand;
}
