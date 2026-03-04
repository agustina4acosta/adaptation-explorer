import { cva, type VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import { cn } from "../../lib/utils";

const eyebrowTagVariants = cva(
  "inline-flex items-center gap-2 px-2 py-1 rounded text-[0.78rem] font-bold tracking-[0.12em] uppercase",
  {
    variants: {
      variant: {
        primary: "bg-[#E8560A] text-[#EAD9BC]",
        secondary: "bg-[#EAD9BC] text-[#E8560A]",
        outline: "border border-[#E8560A] text-[#E8560A] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface EyebrowTagProps extends VariantProps<typeof eyebrowTagVariants> {
  text: string;
  icon?: JSX.Element;
  className?: string;
}

const EyebrowTag = ({ text, icon, variant, className }: EyebrowTagProps) => (
  <div className={cn(eyebrowTagVariants({ variant }), className)}>
    {icon} {text}
  </div>
);

export default EyebrowTag;
