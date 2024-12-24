"use client";

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

  return <>{JSON.stringify(game)}</>;
};
