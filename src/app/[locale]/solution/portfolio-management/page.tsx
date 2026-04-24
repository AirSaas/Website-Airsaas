import type { Metadata } from "next";
import SolutionPortfolioManagementPage from "@/components/pages/SolutionPortfolioManagementPage";

export const metadata: Metadata = {
  title: "La solution de portfolio management qui booste votre transformation | AirSaas",
  description:
    "Faites passer votre portfolio management à la vitesse supérieure avec une solution qui fluidifie votre prise de décision et automatise votre reporting.",
};

export default function Page() {
  return <SolutionPortfolioManagementPage />;
}
