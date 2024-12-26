import { THEME_MAP } from "@/const";
import { cn } from "@/lib/utils";
import { settingsStore } from "@/state";
import { type FC, memo } from "react";

interface Props {
  card: Card;
}

export const Card: FC<Props> = memo(({ card }) => {
  const { theme } = settingsStore.useState();

  return (
    <button
      className={cn(
        "w-[68px] h-[100px] bg-cover select-none cursor-grab",
        card.facing === "up" ? "hover:scale-105 transition-transform" : ""
      )}
      type="button"
    >
      <img
        alt={
          card.facing === "up"
            ? `${card.value} of ${card.suit}`
            : "playing card"
        }
        className="mx-auto"
        draggable={false}
        height={card.facing === "up" ? 98 : 100}
        src={
          card.facing === "up"
            ? `/cards/${card.suit}/${card.value}.png`
            : `/cards/backs/${THEME_MAP[theme]}.png`
        }
        width={card.facing === "up" ? 66 : 68}
      />
    </button>
  );
});

Card.displayName = "Card";
