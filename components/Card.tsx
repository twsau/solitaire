import { useSettings } from "@/app/state/settings";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
      <Image
        alt={`${card.value} of ${card.suit}`}
        draggable={false}
        height={100}
        loading="eager"
        priority
        src={src}
        width={68}
      />
    </button>
  );
};
