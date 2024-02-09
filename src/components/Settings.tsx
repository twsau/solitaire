import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FC } from "react";
import { GearIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { setDeckStyle, useSettings } from "@/state/settings";
import { Label } from "./ui/label";

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

export const Settings: FC = () => {
  const { deckStyle } = useSettings();

  return (
    <Drawer>
      <DrawerTrigger>
        <GearIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <Label htmlFor="style">Deck</Label>
          <Select
            onValueChange={(v) => setDeckStyle(DECK_STYLES.indexOf(v) + 1)}
            value={DECK_STYLES[deckStyle - 1]}
          >
            <SelectTrigger id="style">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DECK_STYLES.map((s) => (
                <SelectItem key={`style-${s}`} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
