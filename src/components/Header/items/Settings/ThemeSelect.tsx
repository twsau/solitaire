"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { settingsStore, type SettingsState } from "@/state/settingsStore";
import { useEffect } from "react";

const THEME_VALUES: SettingsState["theme"][] = [
  "classic",
  "midnight",
  "royal",
  "sanguine",
  "slate",
];

export const ThemeSelect = () => {
  const { theme } = settingsStore.useState();

  useEffect(() => {
    document.body.className = `${document.body.className
      .split(" ")
      .filter((cls) => !cls.startsWith("theme-"))
      .join(" ")} theme-${theme}`;
  }, [theme]);

  return (
    <div className="flex items-center justify-center gap-3">
      <Label>Theme</Label>
      <Select value={theme} onValueChange={settingsStore.utils.theme.setTheme}>
        <SelectTrigger className="max-w-md">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {THEME_VALUES.map((themeName) => (
            <SelectItem
              key={`settings-theme-select-${themeName}`}
              value={themeName}
            >
              {themeName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
