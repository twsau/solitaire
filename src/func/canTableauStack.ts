export default function canTableauStack(
  topCard: Card,
  bottomCard: Card
): boolean {
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
