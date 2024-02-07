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
      "grid place-items-center rounded min-w-[52px] min-h-[67px]",
      hidden ? "border-none" : "border"
    )}
  >
    {children}
  </div>
);
