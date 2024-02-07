import { FC, useMemo } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

const ANIMATION_DURATION = 500;

export const Hand: FC<{ cards: CardStack }> = ({ cards }) => {
  const hand = [...cards];
  const stackId = useMemo(() => crypto.randomUUID(), []);

  return (
    <div className="relative w-[104px] h-[132px]">
      {hand.map((card, index) => (
        <div
          className={cn(
            "absolute inset-0 w-[104px] h-[132px]",
            // style top card for hover effect
            index === hand.length - 1 ? "group" : ""
          )}
          style={{
            transform: `translateY(-${index / 3}px) translateX(${index % 3}px)`,
          }}
        >
          <Card
            animationDelay={index * (ANIMATION_DURATION / hand.length)}
            card={card}
            key={`stack-${stackId}-${index}`}
          />
        </div>
      ))}
    </div>
  );
};
