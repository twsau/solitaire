interface Card {
  suit: CardSuit;
  value: number;
  facing: CardFacing;
}

type CardStack = Card[];
type CardSuit = "hearts" | "clubs" | "spades" | "diamonds";
type CardFacing = "up" | "down";
