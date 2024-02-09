import { useGame } from "@/state/game";
import { FC } from "react";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";

interface Props {
  id:
    | "tableau_1"
    | "tableau_2"
    | "tableau_3"
    | "tableau_4"
    | "tableau_5"
    | "tableau_6"
    | "tableau_7";
}

export const Tableau: FC<Props> = ({ id }) => {
  const cards = useGame((state) => state[id]);

  return (
    <CardStack
      chainCards
      spread
      cards={cards}
      onDrop={() => moveCards("grabbed", id)}
      onGrab={(card: Card) => moveCards(id, "grabbed", card)}
    />
  );
};
