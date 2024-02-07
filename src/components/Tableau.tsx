import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";
import canTableauStack from "@/func/canTableauStack";

interface Props {
  cards: Card[];
  onChange: (stack: Card[], grabbed: Card[], grabbedFrom: string) => void;
}

export const Tableau: FC<Props> = ({ cards, onChange }) => {
  const { grabbed, grabbedFrom } = useGame();

  const handleClick = (stack: CardStack, stackId: string) => {
    if (grabbed.length) return;

    onChange(
      cards.filter((card) => !stack.includes(card)),
      stack,
      stackId
    );
  };

  const handleDrop = (stack: CardStack, stackId: string) => {
    const emptyStack = !stack.length;
    const canDrop =
      (emptyStack && grabbed[0].value === 13) ||
      stackId === grabbedFrom ||
      canTableauStack(grabbed[0], stack[stack.length - 1]);

    if (canDrop) onChange([...stack, ...grabbed], [], "");
  };

  return (
    <Stack cards={cards} onClick={handleClick} onDrop={handleDrop} spread />
  );
};
