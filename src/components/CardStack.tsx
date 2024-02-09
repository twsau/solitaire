import findChained from "@/func/findChained";
import { useGame } from "@/state/game";
import { FC, useMemo } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

const SPREAD_PIXELS = {
  DEFAULT: 3,
  SPREAD: 18,
};

interface Props {
  animate?: boolean;
  cards: Card[];
  chainCards?: boolean;
  onDrop?: () => void;
  onGrab?: (card: Card) => void;
  onEmpty?: () => void;
  spread?: boolean;
}

export const CardStack: FC<Props> = ({
  animate = true,
  cards,
  chainCards = false,
  onDrop = () => {},
  onEmpty = () => {},
  onGrab = () => {},
  spread = false,
}) => {
  const id = useMemo(() => crypto.randomUUID() as string, []);
  const cardStyle = cn(
    "absolute inset-0",
    animate ? "animate-spread-stack" : ""
  );

  const { grabbed } = useGame();
  const [chained, unchained] = useMemo(
    () => (chainCards ? findChained(cards) : [[], cards]),
    [cards, chainCards]
  );

  return (
    <div
      className="relative w-[68px] h-[168px]"
      onClick={() => {
        if (!grabbed.length) return;
        onDrop();
      }}
    >
      {!unchained.length && !chained.length && (
        <div className={cardStyle} onClick={onEmpty}></div>
      )}
      {unchained.map((card, index) => {
        const canGrab =
          !grabbed.length &&
          chained.length === 0 &&
          index === unchained.length - 1;

        return (
          <div
            className={cardStyle}
            key={`stack-${id}-unchained-${index}`}
            onClick={() => {
              if (!canGrab) return;
              onGrab(card);
            }}
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
        const canGrab = !grabbed.length;
        return (
          <div
            className={cardStyle}
            key={`stack-${id}-chained-${index}`}
            onClick={() => {
              if (canGrab) onGrab(card);
            }}
            style={{
              transform: spread
                ? `translateY(${
                    (index + unchained.length) * SPREAD_PIXELS.SPREAD
                  }px)`
                : `translateY(${
                    (index + unchained.length) * SPREAD_PIXELS.DEFAULT
                  }px)`,
            }}
          >
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
};
