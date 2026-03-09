import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type ComparisonRow = {
  left: string;
  right: string;
};

type ComparisonGridProps = {
  heading: React.ReactNode;
  leftLabel: string;
  rightLabel: string;
  rows: ComparisonRow[];
  buttonText?: string;
  buttonHref?: string;
};

export function ComparisonGrid({
  heading,
  leftLabel,
  rightLabel,
  rows,
  buttonText = "Réservez une démo",
  buttonHref = "/fr/meetings-pages",
}: ComparisonGridProps) {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-[2.5rem] font-semibold leading-[3rem]">
          {heading}
        </h2>

        <div className="mt-12 overflow-hidden rounded-[10px] border border-border">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-border bg-bg-alt">
            <div className="p-4 text-center font-semibold">
              {leftLabel}
            </div>
            <div className="p-4 text-center font-semibold">
              {rightLabel}
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-border last:border-b-0"
            >
              <div className="flex items-start gap-3 border-r border-border p-5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-xs font-bold text-crimson">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-[22px] text-foreground">
                  {row.left}
                </p>
              </div>
              <div className="flex items-start gap-3 p-5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 text-xs font-bold text-green">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-[22px] text-foreground">
                  {row.right}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href={buttonHref}>{buttonText}</Button>
        </div>
      </Container>
    </section>
  );
}
