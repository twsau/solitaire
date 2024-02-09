import { useGame } from "@/state/game";
import foundationToGrabbed from "./foundationToGrabbed";
import grabbedToFoundation from "./grabbedToFoundation";
import grabbedToTableau from "./grabbedToTableau";
import grabbedToWaste from "./grabbedToWaste";
import handToWaste from "./handToWaste";
import tableauToGrabbed from "./tableauToGrabbed";
import wasteToGrabbed from "./wasteToGrabbed";

type MoveFromTo = {
  [From in Stack]: Partial<{
    [To in Exclude<Stack, From>]: (origin?: Card) => void;
  }>;
};

const move: MoveFromTo = {
  grabbed: {
    waste: grabbedToWaste,
    tableau_1: () => grabbedToTableau(1),
    tableau_2: () => grabbedToTableau(2),
    tableau_3: () => grabbedToTableau(3),
    tableau_4: () => grabbedToTableau(4),
    tableau_5: () => grabbedToTableau(5),
    tableau_6: () => grabbedToTableau(6),
    tableau_7: () => grabbedToTableau(7),
    foundation_1: () => grabbedToFoundation(1),
    foundation_2: () => grabbedToFoundation(2),
    foundation_3: () => grabbedToFoundation(3),
    foundation_4: () => grabbedToFoundation(4),
  },
  hand: {
    waste: handToWaste,
  },
  waste: {
    grabbed: wasteToGrabbed,
  },
  tableau_1: {
    grabbed: (origin) => tableauToGrabbed(1, origin),
  },
  tableau_2: {
    grabbed: (origin) => tableauToGrabbed(2, origin),
  },
  tableau_3: {
    grabbed: (origin) => tableauToGrabbed(3, origin),
  },
  tableau_4: {
    grabbed: (origin) => tableauToGrabbed(4, origin),
  },
  tableau_5: {
    grabbed: (origin) => tableauToGrabbed(5, origin),
  },
  tableau_6: {
    grabbed: (origin) => tableauToGrabbed(6, origin),
  },
  tableau_7: {
    grabbed: (origin) => tableauToGrabbed(7, origin),
  },
  foundation_1: {
    grabbed: () => foundationToGrabbed(1),
  },
  foundation_2: {
    grabbed: () => foundationToGrabbed(2),
  },
  foundation_3: {
    grabbed: () => foundationToGrabbed(3),
  },
  foundation_4: {
    grabbed: () => foundationToGrabbed(4),
  },
};

export default function moveCards<T extends Stack>(
  from: T,
  to: ExcludeStack<Stack, T>,
  origin?: Card
) {
  if (origin?.facing === "down") return;
  const grabbed = useGame.getState().grabbed;
  if (to === "grabbed" && grabbed.length) return;
  const func = move[from][to];

  if (!func) console.error(`no move function found: ${from} -> ${to}`);
  else func(origin);
}
