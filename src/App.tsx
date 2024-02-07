import { useEffect } from "react";
import { setGame, useGame } from "./state";
import { Settings } from "./components/Settings";
import { Grabbed } from "./components/Grabbed";
import { Hand } from "./components/Hand";
import { Waste } from "./components/Waste";
import { Bordered } from "./components/Bordered";
import { Tableau } from "./components/Tableau";
import { Foundation } from "./components/Foundation";

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
          {game.foundations.map((_, index) => (
            <Bordered key={`foundation-${index}`}>
              <Foundation index={index} />
            </Bordered>
          ))}
        </div>
        <div className="flex justify-evenly">
          <Tableau
            cards={game.tableau_1}
            onChange={(
              cards: Card[],
              grabbed: Card[],
              grabbedFrom: string = ""
            ) => useGame.setState({ grabbed, grabbedFrom, tableau_1: cards })}
          />
          <Tableau
            cards={game.tableau_2}
            onChange={(
              cards: Card[],
              grabbed: Card[],
              grabbedFrom: string = ""
            ) => useGame.setState({ grabbed, grabbedFrom, tableau_2: cards })}
          />
          <Tableau
            cards={game.tableau_3}
            onChange={(
              cards: Card[],
              grabbed: Card[],
              grabbedFrom: string = ""
            ) => useGame.setState({ grabbed, grabbedFrom, tableau_3: cards })}
          />
          <Tableau
            cards={game.tableau_4}
            onChange={(cards: Card[], grabbed: Card[], grabbedFrom: string) =>
              useGame.setState({ grabbed, grabbedFrom, tableau_4: cards })
            }
          />
          <Tableau
            cards={game.tableau_5}
            onChange={(
              cards: Card[],
              grabbed: Card[],
              grabbedFrom: string = ""
            ) => useGame.setState({ grabbed, grabbedFrom, tableau_5: cards })}
          />
          <Tableau
            cards={game.tableau_6}
            onChange={(
              cards: Card[],
              grabbed: Card[],
              grabbedFrom: string = ""
            ) => useGame.setState({ grabbed, grabbedFrom, tableau_6: cards })}
          />
          <Tableau
            cards={game.tableau_7}
            onChange={(
              cards: Card[],
              grabbed: Card[],
              grabbedFrom: string = ""
            ) => useGame.setState({ grabbed, grabbedFrom, tableau_7: cards })}
          />
        </div>
        <Grabbed />
      </main>
    </>
  );
};
