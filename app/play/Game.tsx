"use client";

import { Hand } from "@/components/Stacks/Hand";
import { useGame } from "../state/game";
import { Waste } from "@/components/Stacks/Waste";
import { Bordered } from "@/components/Bordered";
import { Foundation } from "@/components/Stacks/Foundation";
import { Tableau } from "@/components/Stacks/Tableau";
import { Grabbed } from "@/components/Stacks/Grabbed";
import { useEffect } from "react";
import newGame from "../state/func/newGame";

export const Game = () => {
  const loading = useGame((state) => state.loading);

  useEffect(() => {
    useGame.setState(newGame());
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 grid place-items-center text-3xl">
          Loading...
        </div>
      )}
      <div className="pt-14 max-w-lg mx-auto">
        <div className="flex justify-evenly mb-4 gap-3">
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
    </>
  );
};
