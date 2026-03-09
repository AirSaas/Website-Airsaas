import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary: "bg-foreground text-white hover:bg-foreground/90",
  secondary: "bg-white text-primary border border-primary hover:bg-primary-5",
  tertiary: "bg-orange text-white hover:bg-orange/90",
  outline: "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/40",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-[1.1rem]",
  lg: "px-8 py-3.5 text-[1.2rem]",
};

export function Button({
  href,
  variant = "primary",
  size = "default",
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] font-medium transition-colors",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
