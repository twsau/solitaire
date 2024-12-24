"use client";

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

export const Settings = () => {
  return (
    <Drawer>
      <DrawerTrigger>Settings</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>Settings for the game</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-row gap-3 max-w-3xl mx-auto w-full">
          <DrawerClose asChild>
            <Button className="w-1/2" variant="outline">
              Cancel
            </Button>
          </DrawerClose>
          <Button className="w-1/2">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
