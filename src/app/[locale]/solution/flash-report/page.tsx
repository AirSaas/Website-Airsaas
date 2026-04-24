import type { Metadata } from "next";
import SolutionFlashReportPage from "@/components/pages/SolutionFlashReportPage";

export const metadata: Metadata = {
  title: "AirSaas : la solution de flash report automatisée pour les DSI et PMO",
  description:
    "Automatisez votre flash report personnalisé et facilitez la prise de décision en Copil. Finies les heures passées sur PowerPoint pour vos reportings projets.",
};

export default function Page() {
  return <SolutionFlashReportPage />;
}
