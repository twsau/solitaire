interface Card {
  suit: CardSuit;
  value: CardValue;
  facing: CardFacing;
}

type CardStack = Card[];
type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type CardSuit = "hearts" | "clubs" | "spades" | "diamonds";
type CardFacing = "up" | "down";
