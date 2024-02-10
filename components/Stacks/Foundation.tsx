import { FC } from "react";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import { useGame } from "@/app/state/game";
import moveCards from "@/app/state/func/moveCards";

interface Props {
  id: "foundation_1" | "foundation_2" | "foundation_3" | "foundation_4";
}

export const Foundation: FC<Props> = ({ id }) => {
  const cards = useGame((state) => state[id]);

  return (
    <Bordered>
      <CardStack
        cards={cards}
        onDrop={() => moveCards("grabbed", id)}
        onGrab={() => moveCards(id, "grabbed")}
      />
    </Bordered>
  );
};