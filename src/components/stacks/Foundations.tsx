import { useGame } from "@/state/game";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";

export const Foundations = () => {
  const { foundation_1, foundation_2, foundation_3, foundation_4 } = useGame();

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
          onDrop={() => moveCards("grabbed", "foundation_2")}
          onGrab={() => moveCards("foundation_2", "grabbed")}
        />
      </Bordered>
      <Bordered>
        <CardStack
          cards={foundation_3}
          onDrop={() => moveCards("grabbed", "foundation_3")}
          onGrab={() => moveCards("foundation_3", "grabbed")}
        />
      </Bordered>
      <Bordered>
        <CardStack
          cards={foundation_4}
          onDrop={() => moveCards("grabbed", "foundation_4")}
          onGrab={() => moveCards("foundation_4", "grabbed")}
        />
      </Bordered>
    </>
  );
};
