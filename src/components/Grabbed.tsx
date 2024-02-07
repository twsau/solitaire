import { FC, useEffect, useState } from "react";
import { Stack } from "./Stack";
import { useGame } from "@/state";

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
      className="grid place-items-center rounded min-w-[68px] transition-transform min-h-[100px] fixed -translate-y-full rotate-12 scale-75"
      style={{ left: cursor.left, top: cursor.top }}
    >
      <Stack cards={grabbed} spread />
    </div>
  );
};
