import { ReactNode, useEffect } from "react";
import { setGame, useGame } from "./state";
import { Stack } from "./components/Stack";
import { cn } from "./lib/utils";
import { Settings } from "./components/Settings";

const Cell = ({
  border = false,
  children,
}: {
  border?: boolean;
  children?: ReactNode;
}) => (
  <div
    className={cn(
      "grid place-items-center rounded min-w-[52px] min-h-[67px]",
      border ? "border" : ""
    )}
  >
    {children}
  </div>
);

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
          <Cell border>
            <Stack cards={game.hand} />
          </Cell>
          <Cell border />
          <Cell />
          <Cell border></Cell>
          <Cell border></Cell>
          <Cell border></Cell>
          <Cell border></Cell>
        </div>
        <div className="flex justify-evenly">
          {game.tableau.map((_, index) => (
            <Cell key={`tableau-${index}`}>
              <Stack cards={game.tableau[index]} spread />
            </Cell>
          ))}
        </div>
      </main>
    </>
  );
};
