import { gameStore } from "@/state";
import { CardStack } from "./Cards/CardStack";
import moveCards from "@/utils/moveCards";

export const Waste = () => {
  const cards = gameStore.useState((state) => state.waste);

  return (
    <CardStack
      bordered
      cards={cards}
      onGrab={() => moveCards("waste", "grabbed")}
      onDrop={() => moveCards("grabbed", "waste")}
    />
  );
};
