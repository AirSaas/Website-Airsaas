import type { Metadata } from "next";
import SolutionOutilPpmPage from "@/components/pages/SolutionOutilPpmPage";

export const metadata: Metadata = {
  title: "Outil PPM : la solution moderne et simple d'utilisation | AirSaas",
  description:
    "Découvrez AirSaas, l'outil PPM nouvelle génération : simplissime, orienté valeur, connecté à vos outils métiers. Fluidifiez la gestion de votre portefeuille projets.",
};

export default function Page() {
  return <SolutionOutilPpmPage />;
}
