import type { Metadata } from "next";
import EquipeDirectionTransfoPage from "@/components/pages/EquipeDirectionTransfoPage";

export const metadata: Metadata = {
  title: "Outil Direction de la Transformation | AirSaas",
  description:
    "L'outil des directions de la transformation pour piloter l'ensemble des projets de l'entreprise en collaboration avec les métiers et l'IT.",
};

export default function Page() {
  return <EquipeDirectionTransfoPage />;
}
