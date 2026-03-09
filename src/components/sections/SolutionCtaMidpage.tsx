import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type SolutionCtaMidpageProps = {
  heading: React.ReactNode;
  description: string;
  buttonText?: string;
  buttonHref?: string;
};

export function SolutionCtaMidpage({
  heading,
  description,
  buttonText = "Réservez une démo",
  buttonHref = "/fr/meetings-pages",
}: SolutionCtaMidpageProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <Container className="text-center">
        <h2 className="text-[2.5rem] font-bold leading-[3rem]">
          {heading}
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[23px] text-text-secondary">
          {description}
        </p>
        <div className="mt-8">
          <Button href={buttonHref}>{buttonText}</Button>
        </div>
      </Container>
    </section>
  );
}
