import { FC, useMemo } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { useGame } from "@/state";

interface Props {
  cards: CardStack;
  onClick?: (card: Card) => void;
  onDrop?: (stack: CardStack) => void;
  spread?: boolean;
}

export const Stack: FC<Props> = ({
  cards,
  onClick,
  onDrop,
  spread = false,
}) => {
  const { grabbed } = useGame();
  const stackId = useMemo(() => crypto.randomUUID(), []);

  return (
    <div
      className="relative w-[52px] h-[67px]"
      onClick={() => grabbed.length && onDrop && onDrop(cards)}
    >
      {cards.map((card, index) => {
        const topCard = index === cards.length - 1;

        return (
          <div
            className={cn(
              "absolute inset-0",
              // style top card for hover effect
              topCard ? "group" : ""
            )}
            key={`stack-${stackId}-${index}`}
            onClick={(e) => {
              if (!grabbed.length && onClick) {
                e.stopPropagation();
                !grabbed.length && onClick && onClick(card);
              }
            }}
            style={{
              transform: `translateY(${
                spread ? `${index * 32}px` : `-${index / 3}px`
              })`,
            }}
          >
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
};
