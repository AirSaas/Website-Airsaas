import type { Metadata } from "next";
import SolutionAirsaasExpertsTransfoPage from "@/components/pages/SolutionAirsaasExpertsTransfoPage";

export const metadata: Metadata = {
  title: "Airsaas permet aux experts de la transfo d'incarner le changement | AirSaas",
  description:
    "Rejoignez les dizaines d'experts de la Transfo. qui utilisent AirSaas pour piloter les transformations dans leurs missions.",
};

export default function Page() {
  return <SolutionAirsaasExpertsTransfoPage />;
}
