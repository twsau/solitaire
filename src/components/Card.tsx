import { cn } from "@/lib/utils";
import { useSettings } from "@/state/settings";
import { FC, useMemo } from "react";

interface Props {
  card: Card;
}

export const Card: FC<Props> = ({ card }) => {
  const deckStyle = useSettings((state) => state.deckStyle);

  const src = useMemo(
    () =>
      card.facing === "up"
        ? `/cards/${card.suit}/${card.value}.png`
        : `/cards/backs/${deckStyle}.png`,
    [card.facing, card.suit, card.value, deckStyle]
  );

  return (
    <button
      className={cn(
        "w-[68px] h-[100px] bg-cover select-none cursor-grab",
        card.facing === "up" ? "hover:scale-105 transition-transform" : ""
      )}
    >
      <img draggable={false} src={src} />
    </button>
  );
};
