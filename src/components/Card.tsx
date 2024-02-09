import { cn } from "@/lib/utils";
import { useSettings } from "@/state/settings";
import { FC } from "react";

interface Props {
  card: Card;
}

export const Card: FC<Props> = ({ card }) => {
  const deckStyle = useSettings((state) => state.deckStyle);

  return (
    <button
      className={cn(
        "w-[68px] h-[100px] bg-cover select-none cursor-grab",
        card.facing === "up" ? "hover:scale-105 transition-transform" : ""
      )}
    >
      <img
        draggable={false}
        src={
          card.facing === "up"
            ? `/cards/${card.suit}/${card.value}.png`
            : `/cards/backs/${deckStyle}.png`
        }
      />
    </button>
  );
};
