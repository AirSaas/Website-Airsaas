import type { Metadata } from "next";
import SolutionGestionPortefeuilleProjetPage from "@/components/pages/SolutionGestionPortefeuilleProjetPage";

export const metadata: Metadata = {
  title: "Gestion de portefeuille projet : l'outil qui simplifie tout | AirSaas",
  description:
    "Besoin d'un outil de gestion de portefeuille projet simple et orienté valeur ? AirSaas est la solution PPM moderne préférée des DSI et des directions générales.",
};

export default function Page() {
  return <SolutionGestionPortefeuilleProjetPage />;
}
