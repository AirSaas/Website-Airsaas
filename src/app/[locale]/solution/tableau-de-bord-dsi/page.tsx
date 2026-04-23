import type { Metadata } from "next";
import SolutionTableauBordDsiPage from "@/components/pages/SolutionTableauBordDsiPage";

export const metadata: Metadata = {
  title: "Airsaas : le tableau de bord DSI nouvelle génération | AirSaas",
  description:
    "Le tableau de bord DSI idéal pour piloter votre portefeuille de projets par la valeur, et accélérer la transformation de votre entreprise en fluidifiant la prise de décision.",
};

export default function Page() {
  return <SolutionTableauBordDsiPage />;
}
