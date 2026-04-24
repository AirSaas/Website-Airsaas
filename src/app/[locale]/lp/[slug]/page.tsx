import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingLpPage from "@/components/pages/LandingLpPage";
import { LP_PAGES } from "@/data/lp";

type RouteParams = { locale: string; slug: string };

export function generateStaticParams() {
  return LP_PAGES.map((p) => ({ locale: "fr", slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = LP_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.meta.title, description: page.meta.description };
}

export default async function LpRoute({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = LP_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  return <LandingLpPage page={page} />;
}
