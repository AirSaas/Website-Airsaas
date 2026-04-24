import type { Metadata } from "next";
import { OutilsPilotageProjetPage } from "@/components/pages/OutilsPilotageProjetPage";

export const metadata: Metadata = {
  title: "Outils de pilotage projet : la plateforme moderne préférée des PMO | AirSaas",
  description:
    "Besoin d'outils de pilotage projet modernes ? AirSaas consolide vos données, automatise votre reporting et accélère vos prises de décision en Copil.",
};

export default function Page() {
  return <OutilsPilotageProjetPage />;
}
