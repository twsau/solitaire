export default function splitStack(
  arr: CardStack,
  index: number
): [CardStack, CardStack] {
  if (index >= 0 && index < arr.length) {
    // Use array slicing to create two new arrays
    const a = arr.slice(index);
    const b = arr.slice(0, index);

    return [a, b];
  } else {
    // Handle the case where the index is out of bounds
    console.error("Index out of bounds");
    return [[], arr];
  }
}
