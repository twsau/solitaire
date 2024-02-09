export default function canFoundationStack(topCard: Card, bottomCard: Card) {
  return (
    topCard.suit === bottomCard.suit && topCard.value === bottomCard.value + 1
  );
}
