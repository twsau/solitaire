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

const ROW = "flex items-center justify-between";
const ICON_SIZE = 24;

export const Settings: FC = () => {
  const { deckStyle } = useSettings();

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger className="text-foreground/50 hover:text-foreground transition-colors text-3xl">
        <GearIcon height={ICON_SIZE} width={ICON_SIZE} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">Settings</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <div className={ROW}>
            <Label htmlFor="style">Deck</Label>
            <Select
              onValueChange={(v) => setDeckStyle(DECK_STYLES.indexOf(v) + 1)}
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
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
