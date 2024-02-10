import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Bordered = ({
  children,
  hidden = false,
}: {
  children?: ReactNode;
  hidden?: boolean;
}) => (
  <div
    className={cn(
      "grid place-items-center justify-center rounded min-w-[78px] h-[110px]",
      hidden ? "" : "border-2"
    )}
  >
    {children}
  </div>
);
