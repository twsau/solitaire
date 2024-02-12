import { FormattedMessage } from "react-intl";
import { HowToPlay } from "./HowToPlay";
import { Settings } from "./Settings";
import { NewGame } from "./NewGame";

export const Header = () => {
  return (
    <header className="container flex h-14 items-center gap-3 border-b">
      <h1>
        <FormattedMessage defaultMessage="Solitaire" />
      </h1>
      <a
        className="text-primary transition-colors hover:text-foreground"
        href="https://bossweb.dev/projects/solitaire#content"
      >
        <FormattedMessage defaultMessage="About" />
      </a>
      <NewGame />
      <div className="ml-auto" />
      <HowToPlay />
      <Settings />
    </header>
  );
};
