import { useEffect } from "react";
import { setGame, useGame } from "./state";
import { Settings } from "./components/Settings";
import { Grabbed } from "./components/Grabbed";
import { Hand } from "./components/Hand";
import { Waste } from "./components/Waste";
import { Bordered } from "./components/Bordered";
import { Tableau } from "./components/Tableau";

export const App = () => {
  const game = useGame();

  useEffect(() => {
    setGame();
  }, []);

  return (
    <>
      <header className="container flex items-center h-14 border-b">
        <div className="ml-auto" />
        <Settings />
      </header>
      <main className="pt-14 max-w-lg mx-auto">
        <div className="flex justify-evenly mb-4">
          <Bordered>
            <Hand />
          </Bordered>
          <Bordered>
            <Waste />
          </Bordered>
          <Bordered hidden />
          <Bordered></Bordered>
          <Bordered></Bordered>
          <Bordered></Bordered>
          <Bordered></Bordered>
        </div>
        <div className="flex justify-evenly">
          {game.tableau.map((_, index) => (
            <Tableau key={`tableau-${index}`} index={index} />
          ))}
        </div>
        <Grabbed />
      </main>
    </>
  );
};
