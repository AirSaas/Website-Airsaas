import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingSectionsPage, {
  type GenericPageData,
} from "@/components/pages/LandingSectionsPage";
import { EQUIPES_PAGES } from "@/data/equipes";
import { getLandingImages } from "@/data/landings-images";

type RouteParams = { locale: string; slug: string };

export function generateStaticParams() {
  return EQUIPES_PAGES.map((p) => ({ locale: "fr", slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = EQUIPES_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.meta.title, description: page.meta.description };
}

export default async function EquipesRoute({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = EQUIPES_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  const images = getLandingImages("equipe", slug);
  return (
    <LandingSectionsPage
      page={page as unknown as GenericPageData}
      images={images}
    />
  );
}
