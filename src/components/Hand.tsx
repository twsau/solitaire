import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";

export const Hand: FC = () => {
  const { hand, waste } = useGame();

  const handleClick = () => {
    if (!hand.length) return;

    const card = hand.pop() as Card;
    card.facing = "up";
    waste.push(card);

    useGame.setState({ hand, waste });
  };

  return <Stack cards={hand} onClick={handleClick} />;
};
