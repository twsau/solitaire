import { FC, useMemo } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { useGame } from "@/state";
import findChained from "@/func/findCHained";

interface Props {
  cards: CardStack;
  onClick?: (stack: Card[], stackId: string) => void;
  onDrop?: (stack: Card[], stackId: string) => void;
  spread?: boolean;
}

export const Stack: FC<Props> = ({
  cards,
  onClick,
  onDrop,
  spread = false,
}) => {
  const { grabbed } = useGame();
  const stackId = useMemo(() => crypto.randomUUID(), []) as string;
  const [chained, unchained] = useMemo(() => findChained(cards), [cards]);

  return (
    <div
      className="relative w-[68px] h-[100px]"
      onClick={() => grabbed.length && onDrop && onDrop(cards, stackId)}
    >
      {unchained.map((card, index) => {
        const canGrab =
          chained.length === 0 && index === unchained.length - 1 && onClick;

        return (
          <div
            className="absolute inset-0"
            key={`stack-${stackId}-unchained-${index}`}
            onClick={() => canGrab && onClick([card], stackId)}
            style={{
              transform: spread
                ? `translateY(${index * 18}px)`
                : `translateY(-${index / 3}px)`,
            }}
          >
            <Card card={card} />
          </div>
        );
      })}
      {chained.map((card, index) => {
        const bottomCard = index === 0;
        const topCard = index === chained.length - 1;
        const canGrab = (topCard || bottomCard) && onClick;

        return (
          <div
            className={cn("absolute inset-0", topCard ? "group" : "")}
            key={`stack-${stackId}-chained-${index}`}
            onClick={() =>
              canGrab && onClick(bottomCard ? chained : [card], stackId)
            }
            style={{
              transform: `translateY(${
                spread
                  ? `${(index + unchained.length) * 18}px`
                  : `-${(index + unchained.length) / 3}px`
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
