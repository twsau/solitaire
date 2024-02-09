import { useGame } from "@/state";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";
import { Profiler } from "react";

export const Waste = () => {
  const { waste } = useGame();

  return (
    <Profiler id="waste" onRender={console.log}>
      <Bordered>
        <CardStack
          cards={waste}
          onGrab={() => moveCards("waste", "grabbed")}
          onDrop={() => moveCards("grabbed", "waste")}
        />
      </Bordered>
    </Profiler>
  );
};
