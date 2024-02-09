import { useEffect } from "react";
import { setGame, useGame } from "./state";
import { Settings } from "./components/Settings";
import { Grabbed } from "./components/Grabbed";
import { Hand } from "./components/Hand";
import { Waste } from "./components/Waste";
import { Bordered } from "./components/Bordered";
import { Tableau } from "./components/Tableau";
import { Foundation } from "./components/Foundation";
import { CardStack } from "./components/CardStack";
import moveCards from "./func/moveCards";

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
            <CardStack
              cards={game.hand}
              onEmpty={() => moveCards("hand", "waste")}
              onGrab={() => moveCards("hand", "waste")}
            />
          </Bordered>
          <Bordered>
            <CardStack
              cards={game.waste}
              onGrab={() => moveCards("waste", "grabbed")}
              onDrop={() => moveCards("grabbed", "waste")}
            />
          </Bordered>
          <Bordered hidden />
          {game.foundations.map((_, index) => (
            <Bordered key={`foundation-${index}`}>
              <Foundation index={index} />
            </Bordered>
          ))}
        </div>
        <div className="flex justify-evenly">
          <CardStack
            chainCards
            spread
            cards={game.tableau_1}
            onDrop={() => moveCards("grabbed", "tableau_1")}
            onGrab={(card: Card) => moveCards("tableau_1", "grabbed", card)}
          />
          <CardStack
            chainCards
            spread
            cards={game.tableau_2}
            onDrop={() => moveCards("grabbed", "tableau_2")}
            onGrab={(card: Card) => moveCards("tableau_2", "grabbed", card)}
          />
          <CardStack
            chainCards
            spread
            cards={game.tableau_3}
            onDrop={() => moveCards("grabbed", "tableau_3")}
            onGrab={(card: Card) => moveCards("tableau_3", "grabbed", card)}
          />
          <CardStack
            chainCards
            spread
            cards={game.tableau_4}
            onDrop={() => moveCards("grabbed", "tableau_4")}
            onGrab={(card: Card) => moveCards("tableau_4", "grabbed", card)}
          />
          <CardStack
            chainCards
            spread
            cards={game.tableau_5}
            onDrop={() => moveCards("grabbed", "tableau_5")}
            onGrab={(card: Card) => moveCards("tableau_5", "grabbed", card)}
          />
          <CardStack
            chainCards
            spread
            cards={game.tableau_6}
            onDrop={() => moveCards("grabbed", "tableau_6")}
            onGrab={(card: Card) => moveCards("tableau_6", "grabbed", card)}
          />
          <CardStack
            chainCards
            spread
            cards={game.tableau_7}
            onDrop={() => moveCards("grabbed", "tableau_7")}
            onGrab={(card: Card) => moveCards("tableau_7", "grabbed", card)}
          />
        </div>
        <Grabbed />
      </main>
    </>
  );
};
