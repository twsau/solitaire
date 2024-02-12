import { useEffect } from "react";
import { useGame } from "./state/game";
import { preload } from "./state/util/preload";
import newGame from "./state/func/newGame";
import "./globals.css";
import { Loading } from "./components/Loading";
import { Hand } from "./components/stacks/Hand";
import { Waste } from "./components/stacks/Waste";
import { Bordered } from "./components/Bordered";
import { Foundation } from "./components/stacks/Foundation";
import { Tableau } from "./components/stacks/Tableau";
import { Grabbed } from "./components/stacks/Grabbed";
import { TranslationProvider } from "./providers/TranslationProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Header } from "./components/Header";

export const App = () => {
  const loading = useGame((state) => state.loading);

  useEffect(() => {
    preload().then(() => useGame.setState(newGame()));
  }, []);

  if (loading) return <Loading />;
  return (
    <TranslationProvider>
      <ThemeProvider>
        <Header />
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
