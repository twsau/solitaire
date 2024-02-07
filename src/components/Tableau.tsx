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
    const shouldFlip = cards[cards.length - 1].facing === "down";

    function flip() {
      onChange(
        cards.map((card, index) =>
          index === cards.length - 1 ? { ...card, facing: "up" } : card
        ),
        [],
        ""
      );
    }

    function swap() {
      onChange(
        cards.filter((card) => !stack.includes(card)),
        stack,
        stackId
      );
    }

    if (shouldFlip) flip();
    else swap();
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
