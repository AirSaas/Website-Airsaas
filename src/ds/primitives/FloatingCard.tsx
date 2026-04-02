import { cn } from "@/ds/utils";

interface FloatingCardProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  lines?: number;
  className?: string;
  style?: React.CSSProperties;
}

function PlaceholderContent({ icon, lines = 2 }: { icon?: React.ReactNode; lines?: number }) {
  return (
    <div className="flex items-center gap-[0.75rem] p-[0.875rem]">
      {/* Icon placeholder */}
      {icon ? (
        <div className="shrink-0">{icon}</div>
      ) : (
        <div className="h-[2.5rem] w-[2.5rem] shrink-0 rounded-[0.5rem] bg-primary-5" />
      )}
      {/* Text placeholder lines */}
      <div className="flex flex-1 flex-col gap-[0.375rem]">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-[0.375rem] rounded-full bg-border"
            style={{ width: i === lines - 1 ? "60%" : "90%" }}
          />
        ))}
      </div>
    </div>
  );
}

export function FloatingCard({ children, icon, lines = 2, className, style }: FloatingCardProps) {
  const hasContent = children || icon;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-white rounded-[20px] shadow-[0px_6px_34px_0px_rgba(0,0,0,0.08)]",
        className,
      )}
      style={style}
    >
      {children ? children : <PlaceholderContent icon={icon} lines={lines} />}
    </div>
  );
}
