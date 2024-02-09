import { useGame } from "@/state/game";
import { FC, useEffect } from "react";
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
  const grabbed = useGame((state) => state.grabbed);

  useEffect(() => {
    if (!cards.length || grabbed.length) return;
    if (cards[cards.length - 1].facing === "down")
      useGame.setState({
        [id]: cards.map((c, i) =>
          i === cards.length - 1 ? { ...c, facing: "up" } : c
        ),
      });
  }, [cards, grabbed.length, id]);

  return (
    <div className="relative">
      <CardStack
        spread
        cards={cards}
        onDrop={() => moveCards("grabbed", id)}
        onGrab={(origin: Card) => moveCards(id, "grabbed", origin)}
      />
    </div>
  );
};
