import type { Metadata } from "next";
import SolutionFlashReportProjetPage from "@/components/pages/SolutionFlashReportProjetPage";

export const metadata: Metadata = {
  title: "L'outil de flash report projet automatisé | AirSaas",
  description:
    "Automatisez votre flash report projet, gagnez une journée de travail par semaine, et rendez plus fluides et plus rapides vos prises de décision en Copil.",
};

export default function Page() {
  return <SolutionFlashReportProjetPage />;
}
