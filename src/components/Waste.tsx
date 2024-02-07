import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";

interface Props {
  cards: Card[];
  onChange: (stack: Card[], grabbed: Card[], grabbedFrom: string) => void;
}

export const Waste: FC<Props> = ({ cards }) => {
  const { grabbed, grabbedFrom } = useGame();

  const handleClick = (stack: Card[], stackId: string) => {
    if (grabbed.length) return;
    useGame.setState({
      grabbed: stack,
      grabbedFrom: stackId,
      waste: cards.filter((card) => !stack.includes(card)),
    });
  };

  const handleDrop = (_: Card[], stackId: string) => {
    if (grabbedFrom !== stackId) return;
    useGame.setState((state) => ({
      grabbed: [],
      grabbedFrom: "",
      waste: [...state.waste, ...state.grabbed],
    }));
  };

  return <Stack cards={cards} onClick={handleClick} onDrop={handleDrop} />;
};
