import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ICON_SIZE } from "@/constants";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { FormattedMessage } from "react-intl";

export const HowToPlay = () => (
  <Dialog>
    <DialogTrigger className="text-3xl text-foreground/50 transition-colors hover:text-foreground">
      <QuestionMarkCircledIcon height={ICON_SIZE} width={ICON_SIZE} />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <FormattedMessage defaultMessage="How to play Solitaire" />
        </DialogTitle>
        <DialogDescription>
          <FormattedMessage defaultMessage="Build four foundation piles, one for each suit, from Ace to King." />
        </DialogDescription>
      </DialogHeader>
      <ol className="flex list-decimal flex-col gap-3 pl-5 text-sm">
        <li>
          <FormattedMessage defaultMessage="Move cards between tableaux (bottom piles) and organize in descending order, alternating colors." />
        </li>
        <li>
          <FormattedMessage defaultMessage="Place Kings or any sequences starting with a King in an empty tableau." />
        </li>
        <li>
          <FormattedMessage defaultMessage="Draw one card at a time from the hand (top left)." />
        </li>
        <li>
          <FormattedMessage defaultMessage="Use drawn cards to build on the piles or move to the foundation." />
        </li>
        <li>
          <FormattedMessage defaultMessage="Move Aces to the foundation when available." />
        </li>
        <li>
          <FormattedMessage defaultMessage="Build each foundation in ascending order, following suit." />
        </li>
        <li>
          <FormattedMessage defaultMessage="The game is won when all four foundation piles are complete." />
        </li>
      </ol>
    </DialogContent>
  </Dialog>
);
