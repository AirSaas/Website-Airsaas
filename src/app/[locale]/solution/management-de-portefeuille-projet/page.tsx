import type { Metadata } from "next";
import SolutionManagementPortefeuillePage from "@/components/pages/SolutionManagementPortefeuillePage";

export const metadata: Metadata = {
  title: "Management de portefeuille projet : l'outil des DSI et PMO | AirSaas",
  description:
    "Révolutionnez votre management de portefeuille de projet avec une solution PPM qui facilite la prise de décision et automatise vos reportings.",
};

export default function Page() {
  return <SolutionManagementPortefeuillePage />;
}
