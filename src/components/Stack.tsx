import { FC, useMemo } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface Props {
  cards: CardStack;
  spread?: boolean;
}

export const Stack: FC<Props> = ({ cards, spread = false }) => {
  const stackId = useMemo(() => crypto.randomUUID(), []);

  return (
    <div className="relative w-[52px] h-[67px]">
      {cards.map((card, index) => (
        <div
          className={cn(
            "absolute inset-0",
            // style top card for hover effect
            index === cards.length - 1 ? "group" : ""
          )}
          key={`stack-${stackId}-${index}`}
          style={{
            transform: `translateY(${
              spread ? `${index * 32}px` : `-${index / 3}px`
            })`,
          }}
        >
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};
