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
      "grid place-items-center rounded min-w-[74px] h-[106px]",
      hidden ? "" : "border-2"
    )}
  >
    {children}
  </div>
);
