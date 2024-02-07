import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";

interface Props {
  index: number;
}

export const Foundation: FC<Props> = ({ index }) => {
  const { grabbed, grabbedFrom, foundations } = useGame();
  const cards = foundations[index];

  const handleClick = (card: Card) => {
    if (!cards.length) return;
    grabbed.push(cards.pop() as Card);
    useGame.setState((state) => ({
      grabbed,
      foundations: state.foundations.map((stack, i) =>
        index == i ? cards : stack
      ),
    }));
  };

  const handleDrop = () => {
    const topStack = cards[cards.length - 1];
    const topGrab = grabbed[grabbed.length - 1];
    if (
      (!cards.length && topGrab.value === 1) ||
      (!!topStack &&
        topStack.suit === topGrab.suit &&
        topStack.value === topGrab.value - 1)
    ) {
      cards.push(grabbed.pop() as Card);
      useGame.setState((state) => ({
        grabbed,
        foundations: state.foundations.map((stack, i) =>
          index === i ? cards : stack
        ),
      }));
    }
  };

  return <Stack cards={cards} onClick={handleClick} onDrop={handleDrop} />;
};
