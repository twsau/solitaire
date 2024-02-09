import { useEffect } from "react";
import { setGame } from "./state/game";
import { Settings } from "./components/Settings";
import { Grabbed } from "./components/stacks/Grabbed";
import { Bordered } from "./components/Bordered";
import { Hand } from "./components/stacks/Hand";
import { Waste } from "./components/stacks/Waste";
import { Foundations } from "./components/stacks/Foundation";
import { Tableaux } from "./components/stacks/Tableaux";

export const App = () => {
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
          <Hand />
          <Waste />
          <Bordered hidden />
          <Foundations />
        </div>
        <Tableaux />
        <Grabbed />
      </main>
    </>
  );
};
