import { useSettings } from "@/state/settings";
import { FC, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const theme = useSettings((state) => state.theme);

  useEffect(() => {
    document.getElementsByTagName("html")[0].className = theme;
  }, [theme]);

  return <div className={theme}>{children}</div>;
};
