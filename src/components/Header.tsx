import { FormattedMessage } from "react-intl";
import { HowToPlay } from "./HowToPlay";
import { Settings } from "./Settings";
import { NewGame } from "./NewGame";
import { Joke } from "./Joke";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { ICON_SIZE } from "@/constants";

export const Header = () => {
  return (
    <header className="container flex h-14 items-center gap-3 border-b">
      <h1>
        <FormattedMessage defaultMessage="Solitaire" />
      </h1>
      <NewGame />
      <HowToPlay />
      <div className="ml-auto" />
      <Joke />
      <a
        className="text-3xl text-foreground/50 transition-colors hover:text-foreground"
        href="https://bossweb.dev/projects/solitaire#content"
        rel="noopener noreferrer"
        target="_blank"
      >
        <QuestionMarkCircledIcon height={ICON_SIZE} width={ICON_SIZE} />
      </a>
      <Settings />
    </header>
  );
};
