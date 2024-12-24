import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const HowToPlay = () => (
  <Dialog>
    <DialogTrigger className="text-primary transition-colors hover:text-foreground">
      How to play
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>How to play Solitaire</DialogTitle>
        <DialogDescription>
          Build four foundation piles, one for each suit, from Ace to King.
        </DialogDescription>
      </DialogHeader>
      <ol className="flex list-decimal flex-col gap-3 pl-5 text-sm">
        <li>
          Move cards between tableaux (bottom piles) and organize in descending
          order, alternating colors.
        </li>
        <li>
          Place Kings or any sequences starting with a King in an empty tableau.
        </li>
        <li>Draw one card at a time from the hand (top left).</li>
        <li>
          Use drawn cards to build on the piles or move to the foundation.
        </li>
        <li>Move Aces to the foundation when available.</li>
        <li>Build each foundation in ascending order, following suit.</li>
        <li>The game is won when all four foundation piles are complete.</li>
      </ol>
    </DialogContent>
  </Dialog>
);
