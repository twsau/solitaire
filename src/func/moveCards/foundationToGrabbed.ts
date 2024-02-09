import { useGame } from "@/state/game";

export default function foundationToGrabbed(ref: number) {
  useGame.setState((state) => {
    const key = `foundation_${ref}` as keyof typeof state;
    const foundation = state[key] as typeof state.foundation_1;

    if (!foundation.length) return state;

    const card = foundation[foundation.length - 1];

    return {
      grabbed: [card],
      grabbedFrom: key,
      [key]: foundation.filter((_, index) => index !== foundation.length - 1),
    };
  });
}
