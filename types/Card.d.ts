interface Card {
  suit: CardSuit;
  value: number;
  facing: CardFacing;
}

type CardSuit = "hearts" | "clubs" | "spades" | "diamonds";

type CardFacing = "up" | "down";
