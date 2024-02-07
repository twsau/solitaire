import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";

export const Hand: FC = () => {
  const { grabbed, hand } = useGame();

  const handleClick = () => {
    if (!hand.length || grabbed.length) return;
    const card = hand.pop() as Card;
    card.facing = "up";
    grabbed.push(card);

    useGame.setState({ grabbed, hand });
  };

  return <Stack cards={hand} onClick={handleClick} />;
};
