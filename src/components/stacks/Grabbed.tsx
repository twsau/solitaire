import { FC, useEffect, useMemo, useState } from "react";
import { useGame } from "@/state/game";
import { CardStack } from "../CardStack";

export const Grabbed: FC = () => {
  const cards = useGame((state) => state.grabbed);
  const [cursor, setCursor] = useState({ left: 0, top: 0 });

  // stops redundant renders on card stack as cursor position updates
  const stack = useMemo(
    () => <CardStack animate={false} cards={cards} spread />,
    [cards]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursor({ left: clientX, top: clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!cards.length) return null;

  return (
    <div
      className="grid place-items-center rounded min-w-[68px] min-h-[100px] fixed animate-grabbed pointer-events-none"
      style={{ left: cursor.left, top: cursor.top }}
    >
      {stack}
    </div>
  );
};
