import type { Metadata } from "next";
import EquipeItOperationPage from "@/components/pages/EquipeItOperationPage";

export const metadata: Metadata = {
  title: "Gouvernance projet IT × Métier | AirSaas",
  description:
    "AirSaas accompagne les DSI dans le pilotage de leur portfolio de projets IT en collaboration avec les métiers. Alignez IT, métiers et DG.",
};

export default function Page() {
  return <EquipeItOperationPage />;
}
