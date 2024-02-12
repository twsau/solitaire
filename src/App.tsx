import { useEffect } from "react";
import { useGame } from "./state/game";
import { preload } from "./state/util/preload";
import newGame from "./state/func/newGame";
import "./globals.css";
import { Loading } from "./components/Loading";
import { Settings } from "./components/Settings";
import { Hand } from "./components/stacks/Hand";
import { Waste } from "./components/stacks/Waste";
import { Bordered } from "./components/Bordered";
import { Foundation } from "./components/stacks/Foundation";
import { Tableau } from "./components/stacks/Tableau";
import { Grabbed } from "./components/stacks/Grabbed";
import { FormattedMessage } from "react-intl";
import { TranslationProvider } from "./providers/TranslationProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

export const App = () => {
  const loading = useGame((state) => state.loading);

  useEffect(() => {
    preload().then(() => useGame.setState(newGame()));
  }, []);

  if (loading) return <Loading />;
  return (
    <TranslationProvider>
      <ThemeProvider>
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
          <div className="ml-auto" />
          <Settings />
        </header>
        <div className="mx-auto max-w-lg pt-14">
          <div className="mb-4 flex justify-evenly gap-3">
            <Hand />
            <Waste />
            <Bordered hidden />
            <Foundation id="foundation_1" />
            <Foundation id="foundation_2" />
            <Foundation id="foundation_3" />
            <Foundation id="foundation_4" />
          </div>
          <div className="flex justify-evenly gap-[1.2rem]">
            <Tableau id="tableau_1" />
            <Tableau id="tableau_2" />
            <Tableau id="tableau_3" />
            <Tableau id="tableau_4" />
            <Tableau id="tableau_5" />
            <Tableau id="tableau_6" />
            <Tableau id="tableau_7" />
          </div>
          <Grabbed />
        </div>
      </ThemeProvider>
    </TranslationProvider>
  );
};
