interface Card {
  suit: "hearts" | "clubs" | "spades" | "diamonds";
  value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  facing: "up" | "down";
}

type Stack = Set<Card>;
