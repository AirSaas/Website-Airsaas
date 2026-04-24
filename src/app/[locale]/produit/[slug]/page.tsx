import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingSectionsPage, {
  type GenericPageData,
} from "@/components/pages/LandingSectionsPage";
import { PRODUIT_PAGES } from "@/data/produit";
import { getLandingImages } from "@/data/landings-images";

type RouteParams = { locale: string; slug: string };

export function generateStaticParams() {
  return PRODUIT_PAGES.map((p) => ({ locale: "fr", slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = PRODUIT_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.meta.title, description: page.meta.description };
}

export default async function ProduitRoute({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = PRODUIT_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  const images = getLandingImages("produit", slug);
  return (
    <LandingSectionsPage
      page={page as unknown as GenericPageData}
      images={images}
    />
  );
}
