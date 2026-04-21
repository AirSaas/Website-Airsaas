import { cn } from "@/lib/utils";
import { ListInline } from "@/components/library-design/ui/ListInline";

interface CheckListProps {
  /** List items — plain strings or rich ReactNode (bold, links, etc.) */
  items: Array<string | React.ReactNode>;
  /** Vertical gap between items. Defaults to "gap-[0.625rem]" to match
   *  FeatureFrame's internal checklist spacing. */
  gapClassName?: string;
  className?: string;
}

/**
 * Vertical list where each item is prefixed by a green gradient circle-check
 * icon. Shares icon + typography with <ListInline>, so the visual matches
 * the checklist used inside <FeatureFrame>.
 */
export function CheckList({
  items,
  gapClassName = "gap-[0.625rem]",
  className,
}: CheckListProps) {
  return (
    <div
      className={cn(
        "flex flex-col w-full text-left mb-[1.25rem] md:mb-[1.5rem]",
        gapClassName,
        className,
      )}
    >
      {items.map((item, i) => (
        <ListInline key={i} className="items-start">
          {item}
        </ListInline>
      ))}
    </div>
  );
}
