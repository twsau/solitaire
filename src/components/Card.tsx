import { cn } from "@/lib/utils";
import { FC } from "react";
import { ClassNameValue } from "tailwind-merge";

const cardStyle: ClassNameValue = "w-[104px] h-[132px] bg-cover";
const faces: Record<CardSuit, Record<CardValue, ClassNameValue>> = {
  hearts: {
    1: "bg-card-hearts-1",
    2: "bg-card-hearts-2",
    3: "bg-card-hearts-3",
    4: "bg-card-hearts-4",
    5: "bg-card-hearts-5",
    6: "bg-card-hearts-6",
    7: "bg-card-hearts-7",
    8: "bg-card-hearts-8",
    9: "bg-card-hearts-9",
    10: "bg-card-hearts-10",
    11: "bg-card-hearts-11",
    12: "bg-card-hearts-12",
    13: "bg-card-hearts-13",
  },
  diamonds: {
    1: "bg-card-diamonds-1",
    2: "bg-card-diamonds-2",
    3: "bg-card-diamonds-3",
    4: "bg-card-diamonds-4",
    5: "bg-card-diamonds-5",
    6: "bg-card-diamonds-6",
    7: "bg-card-diamonds-7",
    8: "bg-card-diamonds-8",
    9: "bg-card-diamonds-9",
    10: "bg-card-diamonds-10",
    11: "bg-card-diamonds-11",
    12: "bg-card-diamonds-12",
    13: "bg-card-diamonds-13",
  },
  clubs: {
    1: "bg-card-clubs-1",
    2: "bg-card-clubs-2",
    3: "bg-card-clubs-3",
    4: "bg-card-clubs-4",
    5: "bg-card-clubs-5",
    6: "bg-card-clubs-6",
    7: "bg-card-clubs-7",
    8: "bg-card-clubs-8",
    9: "bg-card-clubs-9",
    10: "bg-card-clubs-10",
    11: "bg-card-clubs-11",
    12: "bg-card-clubs-12",
    13: "bg-card-clubs-13",
  },
  spades: {
    1: "bg-card-spades-1",
    2: "bg-card-spades-2",
    3: "bg-card-spades-3",
    4: "bg-card-spades-4",
    5: "bg-card-spades-5",
    6: "bg-card-spades-6",
    7: "bg-card-spades-7",
    8: "bg-card-spades-8",
    9: "bg-card-spades-9",
    10: "bg-card-spades-10",
    11: "bg-card-spades-11",
    12: "bg-card-spades-12",
    13: "bg-card-spades-13",
  },
};

const FaceDown: FC = () => <div className={cn("bg-card-back-1", cardStyle)} />;

export const Card: FC<Card> = (card) => {
  if (card.facing === "down") return <FaceDown />;

  const face = faces[card.suit][card.value];

  return <div className={cn(cardStyle, face)} />;
};
