import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ThemeSelect } from "./ThemeSelect";

export const Settings = () => {
  return (
    <Drawer>
      <DrawerTrigger>Settings</DrawerTrigger>
      <DrawerContent className="rounded-none">
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>Settings for the game</DrawerDescription>
        </DrawerHeader>
        <ThemeSelect />
        <DrawerFooter className="flex flex-row gap-3 max-w-3xl mx-auto w-full">
          <DrawerClose asChild>
            <Button className="w-full max-w-lg mx-auto" variant="outline">
              OK
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
