import { useSettings } from "@/state/settings";
import { cn } from "@/lib/utils";
import { FC, memo } from "react";

interface Props {
  card: Card;
}

export const Card: FC<Props> = memo(({ card }) => {
  const deckStyle = useSettings((state) => state.deckStyle);

  return (
    <button
      className={cn(
        "w-[68px] h-[100px] bg-cover select-none cursor-grab",
        card.facing === "up" ? "hover:scale-105 transition-transform" : ""
      )}
    >
      <img
        alt={`${card.value} of ${card.suit}`}
        draggable={false}
        height={100}
        src={
          card.facing === "up"
            ? `/cards/${card.suit}/${card.value}.png`
            : `/cards/backs/${deckStyle}.png`
        }
        width={68}
      />
    </button>
  );
});

Card.displayName = "Card";
