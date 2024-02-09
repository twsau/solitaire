import { useGame } from "@/state/game";

function canTableauStack(topCard: Card, bottomCard: Card): boolean {
  if (topCard.facing === "down" || bottomCard.facing === "down") return false;
  switch (topCard.suit) {
    case "hearts":
    case "diamonds":
      return (
        ["clubs", "spades"].includes(bottomCard.suit) &&
        bottomCard.value === topCard.value + 1
      );
    case "clubs":
    case "spades":
      return (
        ["hearts", "diamonds"].includes(bottomCard.suit) &&
        bottomCard.value === topCard.value + 1
      );
  }
}

export default function grabbedToTableau(ref: number) {
  const state = useGame.getState();

  const swap = () =>
    useGame.setState({
      grabbed: [],
      grabbedFrom: "",
      [key]: [...tableau, ...state.grabbed],
    });

  const key = `tableau_${ref}` as keyof typeof state;
  const tableau = state[key] as typeof state.tableau_1;
  const returnToSender = state.grabbedFrom === key;

  if (returnToSender) return swap();

  const topCard = state.grabbed[0];
  const kingToEmpty = !tableau.length && topCard.value === 13;

  if (kingToEmpty) return swap();

  const bottomCard = tableau[tableau.length - 1];

  if (canTableauStack(topCard, bottomCard)) return swap();
}
