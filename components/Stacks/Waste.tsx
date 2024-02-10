import { useGame } from "@/app/state/game";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import moveCards from "@/app/state/func/moveCards";

export const Waste = () => {
  const cards = useGame((state) => state.waste);

  return (
    <Bordered>
      <CardStack
        cards={cards}
        onGrab={() => moveCards("waste", "grabbed")}
        onDrop={() => moveCards("grabbed", "waste")}
      />
    </Bordered>
  );
};
