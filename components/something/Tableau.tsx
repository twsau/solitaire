import { FC, useCallback, useEffect } from "react";
import { CardStack } from "../CardStack";
import { useGame } from "@/state/game";
import moveCards from "@/state/func/moveCards";

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

  const handleGrab = (origin: Card) => {
    if (grabbed.length > 0) return;
    moveCards(id, "grabbed", origin);
  };

  const handleDrop = () => {
    if (grabbed.length < 1) return;
    moveCards("grabbed", id);
  };

  return (
    <div className="relative">
      <CardStack
        spread
        cards={cards}
        onDrop={() => handleDrop()}
        onGrab={(card: Card) => handleGrab(card)}
      />
    </div>
  );
};
