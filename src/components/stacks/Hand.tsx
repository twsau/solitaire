import { useGame } from "@/state";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";
import { Bordered } from "../Bordered";
import { Profiler } from "react";

export const Hand = () => {
  const { hand } = useGame();

  return (
    <Profiler id="hand" onRender={console.log}>
      <Bordered>
        <CardStack
          cards={hand}
          onEmpty={() => moveCards("hand", "waste")}
          onGrab={() => moveCards("hand", "waste")}
        />
      </Bordered>
    </Profiler>
  );
};
