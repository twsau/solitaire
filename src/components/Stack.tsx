import { FC, useEffect, useMemo, useState } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import { useGame } from "@/state";
import findChained from "@/func/findCHained";

interface Props {
  cards: CardStack;
  onClick?: (card: Card) => void;
  onClickStack?: (cards: CardStack) => void;
  onDrop?: (stack: CardStack) => void;
  spread?: boolean;
}

export const Stack: FC<Props> = ({
  cards,
  onClick,
  onClickStack,
  onDrop,
  spread = false,
}) => {
  const { grabbed } = useGame();
  const stackId = useMemo(() => crypto.randomUUID(), []);
  const [chained, unchained] = useMemo(() => findChained(cards), [cards]);

  // console.log({ chained, unchained });

  return (
    <div
      className="relative w-[68px] h-[100px]"
      onClick={() => grabbed.length && onDrop && onDrop(cards)}
    >
      {unchained.map((card, index) => (
        <div
          className="absolute inset-0"
          key={`stack-${stackId}-unchained-${index}`}
          onClick={() =>
            index === unchained.length - 1 && onClick && onClick(card)
          }
          style={{
            transform: `translateY(${
              spread ? `${index * 18}px` : `-${index / 3}px`
            })`,
          }}
        >
          <Card card={card} />
        </div>
      ))}
      {chained.map((card, index) => {
        const bottomCard = index === 0;
        const topCard = index === chained.length - 1;
        return (
          <div
            className={cn("absolute inset-0", topCard ? "group" : "")}
            key={`stack-${stackId}-chained-${index}`}
            onClick={() => {
              if (bottomCard && onClickStack) onClickStack(chained);
              if (topCard && onClick) onClick(card);
            }}
            style={{
              transform: `translateY(${
                spread
                  ? `${(index + chained.length - 2) * 18}px`
                  : `-${(index + chained.length - 2) / 3}px`
              })`,
            }}
          >
            <Card card={card} />
          </div>
        );
      })}
      {/* {cards.map((card, index) => {
        const topCard = index === cards.length - 1;

        return (
          <div
            className={cn(
              "absolute inset-0",
              // style top card for hover effect
              topCard ? "group" : "group-hover:scale-105"
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
                spread ? `${index * 18}px` : `-${index / 3}px`
              })`,
            }}
          >
            <Card card={card} />
          </div>
        );
      })} */}
    </div>
  );
};
