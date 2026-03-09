import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  heading: React.ReactNode;
  description?: React.ReactNode;
  bgColor?: "white" | "alt";
};

const bgColors = {
  white: "bg-white",
  alt: "bg-bg-alt",
};

export function SectionHeading({
  heading,
  description,
  bgColor = "white",
}: SectionHeadingProps) {
  return (
    <section className={cn("py-16", bgColors[bgColor])}>
      <Container className="max-w-[800px] text-center">
        <h2 className="text-[2rem] font-semibold leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">
          {heading}
        </h2>
        {description && (
          <div className="mt-4 text-[17px] leading-[27px] text-text-secondary">
            {description}
          </div>
        )}
      </Container>
    </section>
  );
}
