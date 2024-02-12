import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setTheme, useSettings } from "@/state/settings";
import { FormattedMessage } from "react-intl";

const THEMES: Theme[] = ["Classic", "Slate", "Royal", "Sanguine", "Midnight"];

export const Theme = () => {
  const theme = useSettings((state) => state.theme);

  return (
    <>
      <Label htmlFor="language-select">
        <FormattedMessage defaultMessage="Language" />
      </Label>
      <Select onValueChange={(v: Theme) => setTheme(v)} value={theme}>
        <SelectTrigger className="max-w-48" id="language-select">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {THEMES.map((theme) => (
            <SelectItem key={`select-theme-${theme}`} value={theme}>
              {theme}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
