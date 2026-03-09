import { Container } from "@/components/ui/Container";

export function PlatformIntro() {
  return (
    <section className="py-20">
      <Container className="max-w-[900px] text-center">
        <h2 className="text-[2.5rem] font-semibold leading-[3rem]">
          <strong className="font-extrabold text-primary">
            Une plateforme de gouvernance projet
          </strong>{" "}
          à la hauteur de vos ambitions
        </h2>
        <p className="mt-6 text-[17px] leading-[23px] text-text-secondary">
          Notre mission ? Vous permettre de devenir le pivot de la
          transformation de l&apos;entreprise en structurant la gouvernance de
          tous les projets, grâce à une plateforme simple que le top management
          va adorer. La vôtre ? Faire passer votre entreprise à l&apos;étape
          supérieure en gouvernance de projet !
        </p>
      </Container>
    </section>
  );
}
