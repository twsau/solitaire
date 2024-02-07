import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";

interface Props {
  index: number;
}

export const Tableau: FC<Props> = ({ index }) => {
  const { grabbed, grabbedFrom, tableau } = useGame();
  const cards = tableau[index];

  const handleClick = (card: Card) => {
    if (!cards.length || grabbed.length) return;

    if (cards.indexOf(card) === cards.length - 1) {
      if (card.facing === "down") card.facing = "up";
      grabbed.push(cards.pop() as Card);

      useGame.setState((state) => ({
        grabbed,
        grabbedFrom: index,
        tableau: state.tableau.map((stack, i) => (index === i ? cards : stack)),
      }));
    }
  };

  const handleDrop = () => {
    if (grabbedFrom === index) {
      cards.push(grabbed.pop() as Card);
      useGame.setState((state) => ({
        grabbed,
        tableau: state.tableau.map((stack, i) => (index === i ? cards : stack)),
      }));
    } else {
      // card drop logic here
    }
  };

  return (
    <Stack cards={cards} onClick={handleClick} onDrop={handleDrop} spread />
  );
};
