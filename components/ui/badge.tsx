import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#BBA58F]",
  {
    variants: {
      variant: {
        default: "border-[#E8D9CD] bg-white text-[#523D35]",
        accent: "border-[#BBA58F]/40 bg-[#E8D9CD] text-[#523D35]",
        muted: "border-[#E8D9CD] bg-[#EFEFE9] text-[#959D90]",
        dark: "border-transparent bg-[#223030] text-[#EFEFE9]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
