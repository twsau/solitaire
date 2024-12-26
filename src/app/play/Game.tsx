"use client";

import { Hand } from "@/components/Hand";
import { gameStore, settingsStore } from "@/state";
import { useEffect } from "react";

export const Game = () => {
  const settings = settingsStore.useState();
  const game = gameStore.useState();
  const loading = game.hand.length === 0;

  useEffect(() => {
    if (loading) gameStore.utils.newGame();
  }, [loading]);

  if (loading) return <>loading...</>;

  return (
    <div className="mx-auto max-w-lg pt-14">
      <div className="mb-4 flex justify-evenly gap-3">
        <Hand />
        {/* <Waste /> */}
        {/* <Bordered hidden /> */}
        {/* <Foundation id="foundation_1" /> */}
        {/* <Foundation id="foundation_2" /> */}
        {/* <Foundation id="foundation_3" /> */}
        {/* <Foundation id="foundation_4" /> */}
      </div>
      <div className="flex justify-evenly gap-[1.2rem]">
        {/* <Tableau id="tableau_1" /> */}
        {/* <Tableau id="tableau_2" /> */}
        {/* <Tableau id="tableau_3" /> */}
        {/* <Tableau id="tableau_4" /> */}
        {/* <Tableau id="tableau_5" /> */}
        {/* <Tableau id="tableau_6" /> */}
        {/* <Tableau id="tableau_7" /> */}
      </div>
      {/* <Grabbed /> */}
      {/* <Toaster duration={5000} /> */}
    </div>
  );
};
