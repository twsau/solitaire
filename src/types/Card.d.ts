interface Card {
  suit: CardSuit;
  value: number;
  facing: CardFacing;
}

type CardStack = Card[];
type CardSuit = "hearts" | "clubs" | "spades" | "diamonds";
type CardFacing = "up" | "down";

type Stack =
  | "hand"
  | "waste"
  | "grabbed"
  | "tableau_1"
  | "tableau_2"
  | "tableau_3"
  | "tableau_4"
  | "tableau_5"
  | "tableau_6"
  | "tableau_7"
  | "foundation_1"
  | "foundation_2"
  | "foundation_3"
  | "foundation_4";

type ExcludeStack<T, U> = T extends U ? never : T;
