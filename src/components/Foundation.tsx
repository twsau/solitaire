import { gameStore } from "@/state";
import moveCards from "@/utils/moveCards";
import type { FC } from "react";
import { CardStack } from "./Cards/CardStack";

interface Props {
  id: FoundationKey;
}

export const Foundation: FC<Props> = ({ id }) => {
  const cards = gameStore.useState((state) => state[id]);

  return (
    <CardStack
      bordered
      cards={cards}
      onDrop={() => moveCards("grabbed", id)}
      onGrab={() => moveCards(id, "grabbed")}
    />
  );
};
