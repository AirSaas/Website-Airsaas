import type { Metadata } from "next";
import SolutionTableauBordGestionProjetPage from "@/components/pages/SolutionTableauBordGestionProjetPage";

export const metadata: Metadata = {
  title: "Airsaas : le tableau de bord de gestion de projet conçu pour les DSI | AirSaas",
  description:
    "Une solution PPM moderne qui vous donne accès à un tableau de bord de gestion de projet compréhensif et intuitif, pour faciliter le suivi et le reporting projet.",
};

export default function Page() {
  return <SolutionTableauBordGestionProjetPage />;
}
