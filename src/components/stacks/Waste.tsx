import { useGame } from "@/state/game";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";

export const Waste = () => {
  const { waste } = useGame();

  return (
    <Bordered>
      <CardStack
        cards={waste}
        onGrab={() => moveCards("waste", "grabbed")}
        onDrop={() => moveCards("grabbed", "waste")}
      />
    </Bordered>
  );
};
