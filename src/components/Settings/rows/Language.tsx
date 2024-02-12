import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setLocale, useSettings } from "@/state/settings";
import { FormattedMessage } from "react-intl";

const LOCALES: Record<SupportedLocale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
};

export const Language = () => {
  const locale = useSettings((state) => state.locale);

  return (
    <>
      <Label htmlFor="language-select">
        <FormattedMessage defaultMessage="Language" />
      </Label>
      <Select
        onValueChange={(v: SupportedLocale) => setLocale(v)}
        value={locale}
      >
        <SelectTrigger className="max-w-48" id="language-select">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(LOCALES).map(([locale, language]) => (
            <SelectItem key={`select-locale-${locale}`} value={locale}>
              {language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
