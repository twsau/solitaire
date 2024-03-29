import quickMove from "@/state/func/quickMove";
import { useGame } from "@/state/game";
import useDoubleClick from "@/hooks/useDoubleClick";
import { cn } from "@/lib/utils";
import { FC, useMemo } from "react";
import { Card } from "./Card";

const SPREAD_PIXELS = {
  noSpread: -1.5,
  spread: 18,
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
  const doubleClick = useDoubleClick();
  const grabbed = useGame((state) => state.grabbed);
  const cardStyle = useMemo(
    () => cn("absolute inset-0", animate ? " animate-card" : ""),
    [animate]
  );

  return (
    <div
      className="relative h-[168px] w-[68px]"
      onClick={() => {
        if (!grabbed.length) return;
        doubleClick ? quickMove(onDrop) : onDrop();
      }}
    >
      {!cards.length && <div className={cardStyle} onClick={onEmpty} />}
      {cards.map((card, index) => (
        <div
          className={cardStyle}
          key={`${card.suit}-${card.value}-${index}`}
          onClick={() => {
            if (!grabbed.length) onGrab(card);
          }}
          style={{
            transform: `translateY(${
              index * SPREAD_PIXELS[spread ? "spread" : "noSpread"]
            }px)`,
          }}
        >
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};
