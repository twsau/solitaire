import { useGame } from "@/state/game";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";
import { Bordered } from "../Bordered";

export const Hand = () => {
  const { hand } = useGame();

  console.log("render hand");

  return (
    <Bordered>
      <CardStack
        cards={hand}
        onEmpty={() => moveCards("hand", "waste")}
        onGrab={() => moveCards("hand", "waste")}
      />
    </Bordered>
  );
};
