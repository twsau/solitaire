import { useGame } from "@/state/game";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";

export const Foundations = () => {
  const { foundation_1, foundation_2, foundation_3, foundation_4 } = useGame();

  console.log("render foundations");

  return (
    <>
      <Bordered>
        <CardStack
          cards={foundation_1}
          onDrop={() => moveCards("grabbed", "foundation_1")}
          onGrab={() => moveCards("foundation_1", "grabbed")}
        />
      </Bordered>
      <Bordered>
        <CardStack
          cards={foundation_2}
          onDrop={() => moveCards("grabbed", "foundation_1")}
          onGrab={() => moveCards("foundation_1", "grabbed")}
        />
      </Bordered>
      <Bordered>
        <CardStack
          cards={foundation_3}
          onDrop={() => moveCards("grabbed", "foundation_1")}
          onGrab={() => moveCards("foundation_1", "grabbed")}
        />
      </Bordered>
      <Bordered>
        <CardStack
          cards={foundation_4}
          onDrop={() => moveCards("grabbed", "foundation_1")}
          onGrab={() => moveCards("foundation_1", "grabbed")}
        />
      </Bordered>
    </>
  );
};
