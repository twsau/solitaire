import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import newGame from "@/state/func/newGame";
import { useGame } from "@/state/game";
import { FormattedMessage } from "react-intl";

export const NewGame = () => (
  <AlertDialog>
    <AlertDialogTrigger className="text-primary transition-colors hover:text-foreground">
      <FormattedMessage defaultMessage="New Game" />
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          <FormattedMessage defaultMessage="Are you absolutely sure?" />
        </AlertDialogTitle>
        <AlertDialogDescription>
          <FormattedMessage defaultMessage="This action cannot be undone. Your current game will be lost!" />
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>
          <FormattedMessage defaultMessage="Cancel" />
        </AlertDialogCancel>
        <AlertDialogAction onClick={() => useGame.setState(newGame())}>
          <FormattedMessage defaultMessage="Continue" />
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
