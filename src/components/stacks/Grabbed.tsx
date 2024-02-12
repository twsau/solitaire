import { FC, memo, useEffect, useState } from "react";
import { CardStack } from "../CardStack";
import { useGame } from "@/state/game";

const useCursor = () => {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setCursor({ x: e.clientX, y: e.clientY });

    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return cursor;
};

export const Grabbed: FC = memo(() => {
  const cards = useGame((state) => state.grabbed);
  const cursor = useCursor();

  if (!cards.length) return null;

  return (
    <div
      className="pointer-events-none fixed grid min-h-[100px] min-w-[68px] animate-grabbed place-items-center rounded"
      style={{ left: cursor.x, top: cursor.y }}
    >
      <CardStack animate={false} cards={cards} spread />
    </div>
  );
});

Grabbed.displayName = "Grabbed";
