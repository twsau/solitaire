import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";

export const Waste: FC = () => {
  const { grabbed, waste } = useGame();

  const handleClick = () => {
    if (!waste.length) return;

    grabbed.push(waste.pop() as Card);
    useGame.setState({ grabbed, waste });
  };

  const handleDrop = () => {
    if (!grabbed.length) return;

    waste.push(grabbed.pop() as Card);
    useGame.setState({ grabbed, waste });
  };

  return <Stack cards={waste} onClick={handleClick} onDrop={handleDrop} />;
};
