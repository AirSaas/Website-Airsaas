import type { Metadata } from "next";
import EquipeComiteDirectionPage from "@/components/pages/EquipeComiteDirectionPage";

export const metadata: Metadata = {
  title: "Gouvernance projet pour CODIR | AirSaas",
  description:
    "La plateforme de gouvernance projet qui accélère la prise de décision des comités de direction. Vision macro, décisions 4× plus rapides.",
};

export default function Page() {
  return <EquipeComiteDirectionPage />;
}
