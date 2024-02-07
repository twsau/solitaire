import canTableauStack from "./canTableauStack";
import splitStack from "./splitStack";

export default function findChained(stack: CardStack): [CardStack, CardStack] {
  const rStack = [...stack].reverse();
  let chainIndex = 0;

  for (let i = 0; i < stack.length; i++) {
    // break the for loop if at the end of the stack
    if (i + 1 === stack.length) break;

    const currentCard = rStack[i];
    const nextCard = rStack[i + 1];

    // break if the next card is facing down
    if (nextCard.facing === "down") break;

    // if current and next can stack, set the index
    if (canTableauStack(currentCard, nextCard)) chainIndex = i + 1;
  }

  if (chainIndex === 0) return [[], stack];

  const rChainIndex = stack.length - 1 - chainIndex;
  const [chained, unchained] = splitStack(stack, rChainIndex);
  return [chained, unchained];
}
