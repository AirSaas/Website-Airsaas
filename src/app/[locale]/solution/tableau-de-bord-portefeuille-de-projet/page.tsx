import type { Metadata } from "next";
import SolutionTableauBordPortefeuillePage from "@/components/pages/SolutionTableauBordPortefeuillePage";

export const metadata: Metadata = {
  title: "Tableau de bord de portefeuille de projet | AirSaas",
  description:
    "Simplifiez votre gouvernance projet avec un tableau de bord consolidé, personnalisable et mis à jour en temps réel. L'outil des DSI et PMO.",
};

export default function Page() {
  return <SolutionTableauBordPortefeuillePage />;
}
