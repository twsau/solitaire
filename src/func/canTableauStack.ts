export default function canTableauStack(
  topCard: Card,
  bottomCard: Card
): boolean {
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
