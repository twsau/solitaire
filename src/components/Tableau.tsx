import { useGame } from "@/state";
import { FC } from "react";
import { Stack } from "./Stack";

interface Props {
  index: number;
}

export const Tableau: FC<Props> = ({ index }) => {
  const { grabbed, grabbedFrom, tableau } = useGame();
  const cards = tableau[index];
  console.log(cards);

  const handleClick = (card: Card) => {
    if (!cards.length || grabbed.length) return;

    if (cards.indexOf(card) === cards.length - 1) {
      if (card.facing === "down") {
        card.facing = "up";
        useGame.setState((state) => ({
          tableau: state.tableau.map((stack, i) =>
            index === i ? cards : stack
          ),
        }));
      } else {
        const card = cards.pop() as Card;
        grabbed.push(card);

        useGame.setState((state) => ({
          grabbed,
          grabbedFrom: index,
          tableau: state.tableau.map((stack, i) =>
            index === i ? cards : stack
          ),
        }));
      }
    }
  };

  const handleClickStack = (cards: CardStack) => {
    console.log("stack click", cards);
  };

  const handleDrop = (stack: CardStack) => {
    if (grabbedFrom === index) {
      cards.push(grabbed.pop() as Card);
      useGame.setState((state) => ({
        grabbed,
        grabbedFrom: undefined,
        tableau: state.tableau.map((stack, i) => (index === i ? cards : stack)),
      }));
    } else {
      const topStack = stack[stack.length - 1];
      const topGrabbed = grabbed[0];

      // if king on empty stack
      if (!topStack && topGrabbed.value === 13) {
        cards.push(grabbed.pop() as Card);
        useGame.setState((state) => ({
          grabbed,
          grabbedFrom: undefined,
          tableau: state.tableau.map((stack, i) =>
            index === i ? cards : stack
          ),
        }));
        return;
      }

      // if not a valid drop
      if (topStack.facing === "down" || topStack.value !== topGrabbed.value + 1)
        return;

      // card drop logic
      switch (topGrabbed.suit) {
        case "hearts":
        case "diamonds":
          if (["clubs", "spades"].includes(topStack.suit)) {
            cards.push(grabbed.pop() as Card);
            useGame.setState((state) => ({
              grabbed,
              grabbedFrom: undefined,
              tableau: state.tableau.map((stack, i) =>
                index === i ? cards : stack
              ),
            }));
          }
          break;
        case "clubs":
        case "spades":
          if (["hearts", "diamonds"].includes(topStack.suit)) {
            cards.push(grabbed.pop() as Card);
            useGame.setState((state) => ({
              grabbed,
              grabbedFrom: undefined,
              tableau: state.tableau.map((stack, i) =>
                index === i ? cards : stack
              ),
            }));
          }
          break;
      }
    }
  };

  return (
    <Stack
      cards={cards}
      onClick={handleClick}
      onClickStack={handleClickStack}
      onDrop={handleDrop}
      spread
    />
  );
};
