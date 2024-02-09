import { FC, useEffect, useState } from "react";
import { useGame } from "@/state/game";
import { CardStack } from "../CardStack";

export const Grabbed: FC = () => {
  const { grabbed } = useGame();
  const [cursor, setCursor] = useState({ left: 0, top: 0 });

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

  if (!grabbed.length) return null;

  return (
    <div
      className="grid place-items-center rounded min-w-[68px] min-h-[100px] fixed animate-grabbed"
      style={{ left: cursor.left, top: cursor.top }}
    >
      <CardStack cards={grabbed} spread />
    </div>
  );
};
