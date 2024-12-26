import { useMemo, type FC, type JSX } from "react";
import { HowToPlay, NewGame, Settings } from "./items";

type HeaderItem = "HowToPlay" | "NewGame" | "Settings";

const headerItemMap: Record<HeaderItem, () => JSX.Element> = {
  HowToPlay,
  NewGame,
  Settings,
};

interface Props {
  items:
    | { left: HeaderItem[]; right?: HeaderItem[] }
    | { left?: HeaderItem[]; right: HeaderItem[] };
}

export const Header: FC<Props> = ({ items }) => {
  const contentLeft = useMemo(() => {
    if (!items.left) return null;

    return items.left.map((item) => {
      const Item = headerItemMap[item];

      return <Item key={`header-item-${item}`} />;
    });
  }, [items.left]);

  const contentRight = useMemo(() => {
    if (!items.right) return null;

    return items.right.map((item) => {
      const Item = headerItemMap[item];

      return <Item key={`header-item-${item}`} />;
    });
  }, [items.right]);

  return (
    <header className="flex h-14 items-center gap-3 border-b px-5 fixed top-0 w-full z-10">
      <h1>Solitaire</h1>
      <div className="mr-auto">{contentLeft}</div>
      <div className="ml-auto">{contentRight}</div>
    </header>
  );
};
