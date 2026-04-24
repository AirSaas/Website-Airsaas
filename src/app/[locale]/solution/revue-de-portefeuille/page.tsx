import type { Metadata } from "next";
import RevuePortefeuillePage from "@/components/pages/RevuePortefeuillePage";

export const metadata: Metadata = {
  title: "Revue de portefeuille projet | AirSaas",
  description:
    "Parce que la revue de portefeuille est au cœur de votre process de transformation d'entreprise, AirSaas simplifie leur planification et leur préparation.",
};

export default function Page() {
  return <RevuePortefeuillePage />;
}
