import { cn } from "@/ds/utils";

interface IconIllustrationProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
}

const sizeMap = {
  sm: { container: "h-[2rem] w-[2.8rem]", fontSize: "1.48rem", ellipseHeight: "0.27rem" },
  md: { container: "h-[3.5rem] w-[4.8125rem]", fontSize: "2.8rem", ellipseHeight: "0.34rem" },
};

const variantMap = {
  dark: {
    iconColor: "var(--color-primary)",
    dropShadow: "var(--color-primary-20)",
    ellipseFill: "var(--color-primary-40)",
  },
  light: {
    iconColor: "white",
    dropShadow: "var(--color-primary)",
    ellipseFill: "var(--color-primary)",
  },
};

export function IconIllustration({
  children,
  variant = "dark",
  size = "md",
  className,
}: IconIllustrationProps) {
  const s = sizeMap[size];
  const v = variantMap[variant];

  return (
    <div
      className={cn("relative flex flex-col items-start", s.container, className)}
      aria-hidden="true"
    >
      {/* Icon content */}
      <div
        className="flex items-end justify-start"
        style={{
          color: v.iconColor,
          fontSize: s.fontSize,
          filter: `drop-shadow(0.064rem 0.064rem 0px ${v.dropShadow})`,
        }}
      >
        {children}
      </div>

      {/* Ellipse base */}
      <svg
        className="w-[80%]"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        style={{ height: s.ellipseHeight, marginTop: "-0.1rem" }}
      >
        <ellipse cx="50" cy="4" rx="50" ry="4" fill={v.ellipseFill} />
      </svg>
    </div>
  );
}
