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
      "grid place-items-center rounded w-[68px] h-[100px]",
      hidden ? "border-none" : "border"
    )}
  >
    {children}
  </div>
);
