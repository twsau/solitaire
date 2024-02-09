import { useGame } from "@/state/game";

function canFoundationStack(topCard: Card, bottomCard: Card) {
  return (
    topCard.suit === bottomCard.suit && topCard.value === bottomCard.value + 1
  );
}

export default function grabbedToFoundation(ref: number) {
  const state = useGame.getState();

  if (state.grabbed.length > 1) return;

  const key = `foundation_${ref}` as keyof typeof state;
  const foundation = state[key] as typeof state.foundation_1;

  const swap = () =>
    useGame.setState({
      grabbed: [],
      grabbedFrom: "",
      [key]: [...foundation, ...state.grabbed],
    });

  const topCard = state.grabbed[0];
  const aceToEmpty = !foundation.length && topCard.value === 1;

  if (aceToEmpty) return swap();
  if (!foundation.length && topCard.value !== 1) return;

  const bottomCard = foundation[foundation.length - 1];

  if (canFoundationStack(topCard, bottomCard)) return swap();
}
