import { useSettings } from "@/state/settings";
import { FC, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import en from "@/lang/en.json";
import de from "@/lang/de.json";
import es from "@/lang/es.json";
import fr from "@/lang/fr.json";

const MESSAGES: Record<SupportedLocale, Record<string, string>> = {
  en,
  de,
  es,
  fr,
};

interface Props {
  children: ReactNode;
}

export const TranslationProvider: FC<Props> = ({ children }) => {
  const locale = useSettings((state) => state.locale);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="en"
      messages={MESSAGES[locale]}
    >
      {children}
    </IntlProvider>
  );
};
