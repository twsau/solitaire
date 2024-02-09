import { useGame } from "@/state/game";
import { CardStack } from "../CardStack";
import moveCards from "@/state/func/moveCards";
import { Bordered } from "../Bordered";

export const Hand = () => {
  const cards = useGame((state) => state.hand);

  return (
    <Bordered>
      <CardStack
        cards={cards}
        onEmpty={() => moveCards("hand", "waste")}
        onGrab={() => moveCards("hand", "waste")}
      />
    </Bordered>
  );
};
