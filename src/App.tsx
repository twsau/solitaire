import { useEffect } from "react";
import { setGame, useGame } from "./state/game";
import { Settings } from "./components/Settings";
import { Grabbed } from "./components/stacks/Grabbed";
import { Bordered } from "./components/Bordered";
import { Hand } from "./components/stacks/Hand";
import { Waste } from "./components/stacks/Waste";
import { Foundation } from "./components/stacks/Foundation";
import { Tableau } from "./components/stacks/Tableau";

export const App = () => {
  const game = useGame();

  useEffect(() => {
    setGame();
  }, []);

  const sumCards =
    game.hand.length +
    game.waste.length +
    game.foundation_1.length +
    game.foundation_2.length +
    game.foundation_3.length +
    game.foundation_4.length +
    game.tableau_1.length +
    game.tableau_2.length +
    game.tableau_3.length +
    game.tableau_4.length +
    game.tableau_5.length +
    game.tableau_6.length +
    game.tableau_7.length +
    game.grabbed.length;

  console.log({ cards: sumCards });

  if (sumCards !== 52) console.error("WTF");

  return (
    <>
      <header className="container flex items-center h-14 border-b">
        <div className="ml-auto" />
        <Settings />
      </header>
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
    </>
  );
};
