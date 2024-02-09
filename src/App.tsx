import { useEffect } from "react";
import { setGame, useGame } from "./state/game";
import { Settings } from "./components/Settings";
import { Grabbed } from "./components/stacks/Grabbed";
import { Bordered } from "./components/Bordered";
import { Hand } from "./components/stacks/Hand";
import { Waste } from "./components/stacks/Waste";
import { Foundation } from "./components/stacks/Foundation";
import { Tableau } from "./components/stacks/Tableau";
import preload from "./preload";

export const App = () => {
  const loading = useGame((state) => state.loading);

  useEffect(() => {
    preload().then(setGame);
  }, []);

  return (
    <>
      <header className="container flex items-center h-14 border-b">
        <div className="ml-auto" />
        <Settings />
      </header>
      {loading && (
        <div className="absolute inset-0 h-full grid place-items-center">
          loading...
        </div>
      )}
      {!loading && (
        <main className="pt-14 max-w-lg mx-auto">
          <div className="flex justify-evenly mb-4">
            <Hand />
            <Waste />
            <Bordered hidden />
            <Foundation id="foundation_1" />
            <Foundation id="foundation_2" />
            <Foundation id="foundation_3" />
            <Foundation id="foundation_4" />
          </div>
          <div className="flex justify-evenly">
            <Tableau id="tableau_1" />
            <Tableau id="tableau_2" />
            <Tableau id="tableau_3" />
            <Tableau id="tableau_4" />
            <Tableau id="tableau_5" />
            <Tableau id="tableau_6" />
            <Tableau id="tableau_7" />
          </div>
          <Grabbed />
        </main>
      )}
    </>
  );
};
