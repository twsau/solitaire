"use client";

import quickMove from "@/app/state/func/quickMove";
import { useGame } from "@/app/state/game";
import useDoubleClick from "@/hooks/useDoubleClick";
import { cn } from "@/lib/utils";
import { FC, useMemo } from "react";
import { Card } from "./Card";

const SPREAD_PIXELS = {
  DEFAULT: 1.5,
  SPREAD: 18,
};

interface Props {
  animate?: boolean;
  cards: Card[];
  onDrop?: () => void;
  onGrab?: (card: Card) => void;
  onEmpty?: () => void;
  spread?: boolean;
}

export const CardStack: FC<Props> = ({
  animate = true,
  cards,
  onDrop = () => {},
  onEmpty = () => {},
  onGrab = () => {},
  spread = false,
}) => {
  const grabbed = useGame((state) => state.grabbed);
  const cardStyle = useMemo(
    () => cn("absolute inset-0", animate ? " animate-card" : ""),
    [animate]
  );

  const doubleClick = useDoubleClick();

  return (
    <div
      className="relative w-[68px] h-[168px]"
      onClick={() => {
        if (!grabbed.length) return;
        doubleClick ? quickMove(onDrop) : onDrop();
      }}
    >
      {!cards.length && <div className={cardStyle} onClick={onEmpty}></div>}
      {cards.map((card, index) => (
        <div
          className={cardStyle}
          key={`${card.suit}-${card.value}-${index}`}
          onClick={() => {
            if (!grabbed.length) onGrab(card);
          }}
          style={{
            transform: spread
              ? `translateY(${index * SPREAD_PIXELS.SPREAD}px)`
              : `translateY(-${index * SPREAD_PIXELS.DEFAULT}px)`,
          }}
        >
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};
