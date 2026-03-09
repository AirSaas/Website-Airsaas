import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaMidpage() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container className="text-center">
        <h2 className="text-[2.5rem] font-bold leading-[3rem]">
          Et si vous repreniez{" "}
          <strong className="text-primary">
            le contrôle de votre portefeuille
          </strong>{" "}
          de projets ?
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[23px] text-text-secondary">
          Adoptez dès maintenant une solution de gestion de gouvernance moderne,
          qui fait gagner vos projets en temps et en efficacité.
        </p>
        <div className="mt-8">
          <Button href="/fr/meetings-pages">Réservez une démo</Button>
        </div>
      </Container>
    </section>
  );
}
