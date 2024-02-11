"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setDeckStyle, useSettings } from "@/state/settings";

const DECK_STYLES = [
  "Chambray",
  "Lotus",
  "Ming",
  "Victoria",
  "Roman Coffee",
  "Tundora",
  "Lotus Alt",
  "Killarney",
];

export const DeckStyle = () => {
  const { deckStyle } = useSettings();

  return (
    <>
      <Label htmlFor="style">Deck</Label>
      <Select
        onValueChange={(v: string) => setDeckStyle(DECK_STYLES.indexOf(v) + 1)}
        value={DECK_STYLES[deckStyle - 1]}
      >
        <SelectTrigger className="max-w-48" id="style">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {DECK_STYLES.map((style) => (
            <SelectItem key={`style-${style}`} value={style}>
              {style}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
