interface Game {
  loading: boolean;
  grabbed: Card[];
  grabbedFrom: StackKey | null;
  hand: Card[];
  waste: Card[];
  tableau_1: Card[];
  tableau_2: Card[];
  tableau_3: Card[];
  tableau_4: Card[];
  tableau_5: Card[];
  tableau_6: Card[];
  tableau_7: Card[];
  foundation_1: Card[];
  foundation_2: Card[];
  foundation_3: Card[];
  foundation_4: Card[];
}
