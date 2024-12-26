import { gameStore } from "@/state";
import { CardStack } from "./Cards/CardStack";
import moveCards from "@/utils/moveCards";

export const Hand = () => {
  const cards = gameStore.useState((state) => state.hand);

  return (
    <CardStack
      bordered
      cards={cards}
      onEmpty={() => moveCards("hand", "waste")}
      onGrab={() => moveCards("hand", "waste")}
    />
  );
};
