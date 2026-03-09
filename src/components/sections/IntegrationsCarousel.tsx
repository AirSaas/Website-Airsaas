import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function IntegrationsCarousel() {
  return (
    <section className="bg-bg-alt py-20">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="text-[2rem] font-semibold leading-[2.5rem]">
              <strong className="font-extrabold">
                Grâce à sa marketplace AirSaas
              </strong>{" "}
              s&apos;intègre nativement à vos outils du quotidien
            </h2>
            <p className="mt-4 text-[17px] leading-[23px] text-text-secondary">
              Centralisez toutes vos informations cruciales (tickets,
              jalons&hellip;) depuis vos outils de gestion de tâches sur
              AirSaas, et diffusez-les via vos canaux de communication interne.
              Tout le monde est au diapason, et vous gouvernez de manière
              optimale.
            </p>
          </div>
          <div className="relative flex-1">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/assets/images/Automation - integrations.webp"
                alt="Automation - integrations"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
