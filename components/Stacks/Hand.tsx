import { useGame } from "@/app/state/game";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import moveCards from "@/app/state/func/moveCards";

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
