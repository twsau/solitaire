import findChained from "@/func/findChained";
import { useGame } from "@/state";
import { FC, useMemo } from "react";
import { ClassNameValue } from "tailwind-merge";
import { Card } from "./Card";

const CARD_STYLE: ClassNameValue = "absolute inset-0";
const SPREAD_PIXELS = {
  DEFAULT: 3,
  SPREAD: 18,
};

interface Props {
  cards: Card[];
  chainCards?: boolean;
  onDrop?: () => void;
  onGrab?: (card: Card) => void;
  onEmpty?: () => void;
  spread?: boolean;
}

export const CardStack: FC<Props> = ({
  cards,
  chainCards = false,
  onDrop = () => {},
  onEmpty = () => {},
  onGrab = () => {},
  spread = false,
}) => {
  const id = useMemo(() => crypto.randomUUID() as string, []);
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
        <div className={CARD_STYLE} onClick={onEmpty}></div>
      )}
      {unchained.map((card, index) => {
        const canGrab =
          !grabbed.length &&
          chained.length === 0 &&
          index === unchained.length - 1;

        return (
          <div
            className={CARD_STYLE}
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
            className={CARD_STYLE}
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
