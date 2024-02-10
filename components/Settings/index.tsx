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

import { Label } from "../ui/label";
import { DeckStyle } from "./rows/DeckStyle";

const ROW = "flex items-center justify-between";
const ICON_SIZE = 24;

export const Settings: FC = () => {
  return (
    <Drawer>
      <DrawerTrigger className="text-foreground/50 hover:text-foreground transition-colors text-3xl">
        <GearIcon height={ICON_SIZE} width={ICON_SIZE} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">Settings</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <div className={ROW}>
            <DeckStyle />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
