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
import { DeckStyle } from "./rows/DeckStyle";
import { FormattedMessage } from "react-intl";

const ROW = "flex items-center justify-between";
const ICON_SIZE = 24;

export const Settings: FC = () => {
  return (
    <Drawer>
      <DrawerTrigger className="text-3xl text-foreground/50 transition-colors hover:text-foreground">
        <GearIcon height={ICON_SIZE} width={ICON_SIZE} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">
            <FormattedMessage defaultMessage="Settings" />
          </DrawerTitle>
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
