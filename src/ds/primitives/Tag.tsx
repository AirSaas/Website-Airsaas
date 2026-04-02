import { cn } from "@/ds/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "muted" | "success" | "warning";
  icon?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<NonNullable<TagProps["variant"]>, string> = {
  muted: "bg-primary-5 text-primary px-[2.0625rem] py-[0.0625rem]",
  success: "bg-white border border-green/30 text-foreground px-[1.875rem] py-[0.125rem]",
  warning: "bg-bg-warning text-warning-text px-[1.875rem] py-[0.125rem]",
};

function CheckCircleIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="13.5" cy="13.5" r="13.5" fill="url(#check-gradient)" />
      <path
        d="M8 13.5L11.5 17L19 10"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="check-gradient" x1="0" y1="0" x2="27" y2="27">
          <stop stopColor="var(--color-green)" />
          <stop offset="1" stopColor="#3bb82e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Tag({
  children,
  variant = "muted",
  icon,
  className,
}: TagProps) {
  const showDefaultIcon = variant === "success" && icon === undefined;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-[0.5rem] rounded-full font-normal",
        variantStyles[variant],
        className
      )}
      style={{ fontSize: "var(--text-small)" }}
    >
      {showDefaultIcon && <CheckCircleIcon />}
      {icon}
      {children}
    </span>
  );
}
