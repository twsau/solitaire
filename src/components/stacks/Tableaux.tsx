import { useGame } from "@/state/game";
import { CardStack } from "../CardStack";
import moveCards from "@/func/moveCards";

type TableauKey =
  | "tableau_1"
  | "tableau_2"
  | "tableau_3"
  | "tableau_4"
  | "tableau_5"
  | "tableau_6"
  | "tableau_7";

const Tableau = ({ tableau }: { tableau: TableauKey }) => {
  const cards = useGame()[tableau];

  return (
    <CardStack
      chainCards
      spread
      cards={cards}
      onDrop={() => moveCards("grabbed", tableau)}
      onGrab={(card: Card) => moveCards(tableau, "grabbed", card)}
    />
  );
};

export const Tableaux = () => {
  return (
    <div className="flex justify-evenly">
      <Tableau tableau="tableau_1" />
      <Tableau tableau="tableau_2" />
      <Tableau tableau="tableau_3" />
      <Tableau tableau="tableau_4" />
      <Tableau tableau="tableau_5" />
      <Tableau tableau="tableau_6" />
      <Tableau tableau="tableau_7" />
    </div>
  );
};
