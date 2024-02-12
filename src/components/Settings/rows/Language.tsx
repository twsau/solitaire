import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";
import { setLocale, useSettings } from "@/state/settings";
import {
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { FormattedMessage } from "react-intl";

const LOCALES: Record<SupportedLocale, string> = {
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
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
          {Object.entries(LOCALES).map(([key, value]) => (
            <SelectItem key={`select-locale-${key}`} value={value} />
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
