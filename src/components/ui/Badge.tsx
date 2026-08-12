import * as React from "react";

import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "emerald" | "gold" | "outline";
  }
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-white/10 text-gray-300": variant === "default",
          "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":
            variant === "emerald",
          "bg-gold/10 text-gold border border-gold/20": variant === "gold",
          "border border-white/10 text-gray-400": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
