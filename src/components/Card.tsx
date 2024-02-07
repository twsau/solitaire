import { FC } from "react";

export const Card: FC<Card> = (card) => {
  return (
    <>
      {card.value} : {card.suit} : {card.facing}
    </>
  );
};
