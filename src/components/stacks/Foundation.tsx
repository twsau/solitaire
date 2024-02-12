import { FC } from "react";
import { Bordered } from "../Bordered";
import { CardStack } from "../CardStack";
import { useGame } from "@/state/game";
import moveCards from "@/state/func/moveCards";

interface Props {
  id: FoundationKey;
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
