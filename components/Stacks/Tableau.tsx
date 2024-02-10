import { FC, useEffect } from "react";
import { CardStack } from "../CardStack";
import { useGame } from "@/app/state/game";
import moveCards from "@/app/state/func/moveCards";

interface Props {
  id: TableauKey;
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
