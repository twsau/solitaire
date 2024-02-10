interface Game {
  loading: boolean;
  grabbed: CardStack;
  grabbedFrom: keyof Omit<Game, "loading" | "grabbedFrom"> | "";
  hand: CardStack;
  waste: CardStack;
  tableau_1: CardStack;
  tableau_2: CardStack;
  tableau_3: CardStack;
  tableau_4: CardStack;
  tableau_5: CardStack;
  tableau_6: CardStack;
  tableau_7: CardStack;
  foundation_1: Card[];
  foundation_2: Card[];
  foundation_3: Card[];
  foundation_4: Card[];
}
