"use client";

import type { ReactNode } from "react";
import { Hero } from "@/components/library-design/sections/Hero";
import { FeatureFrame } from "@/components/library-design/sections/FeatureFrame";
import { FaqFrame } from "@/components/library-design/sections/FaqFrame";
import { CtaHighlightFrame } from "@/components/library-design/sections/CtaHighlightFrame";
import { ValuePropositionFrame } from "@/components/library-design/sections/ValuePropositionFrame";
import { Footer } from "@/components/library-design/sections/Footer";
import { Heading } from "@/components/library-design/ui/Heading";
import { Text } from "@/components/library-design/ui/Text";
import { FeatureCard } from "@/components/library-design/ui/FeatureCard";
import { BLOG_INDEX_DATA } from "@/data/blog";

/**
 * LandingSectionsPage — generic landing-page template used by:
 *   - /produit/[slug]
 *   - /solutions/[slug]
 *   - /equipes/[slug]
 *
 * Takes a page shape with { hero, intro, sections[] } and composes DS
 * section frames. A lighter alternative to LandingLpPage (which is
 * specific to the /lp/[slug] blueprint).
 */

export type GenericSection = {
  type: "heading" | "feature" | "cta" | "faq" | "stats";
  heading?: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  reversed?: boolean;
  variant?: "default" | "card";
  buttonText?: string;
  faqItems?: { question: string; answer: string }[];
  stats?: { value: string; label: string }[];
};

export type GenericPageData = {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    badge?: string;
    heading: ReactNode;
    description: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    heading: ReactNode;
    description: ReactNode;
  };
  sections: GenericSection[];
  hasPress?: boolean;
};

function renderSection(section: GenericSection, index: number) {
  switch (section.type) {
    case "feature":
      if (!section.heading || !section.description) return null;
      return (
        <FeatureFrame
          key={index}
          layout="inline"
          imagePosition={section.reversed ? "left" : "right"}
          titleHighlight={
            typeof section.heading === "string" ? section.heading : undefined
          }
          title={typeof section.heading === "string" ? "" : undefined}
          richContent={
            <Text size="md">
              {typeof section.description === "string"
                ? section.description
                : section.description}
            </Text>
          }
          imageSrc={section.image || "https://placehold.co/900x600/e8eafc/3a51e2?text=AirSaas"}
          imageAlt={section.imageAlt || ""}
        />
      );
    case "heading":
      if (!section.heading) return null;
      return (
        <section
          key={index}
          className="flex flex-col items-center gap-[1.5rem] px-[1.5rem] py-[3rem] md:px-[3rem] md:py-[4rem] lg:px-[10rem] lg:py-[5rem] bg-white text-center"
        >
          <Heading level={2} align="center">
            {section.heading}
          </Heading>
          {section.description ? (
            <Text size="md" align="center" maxWidth="52.9375rem">
              {section.description}
            </Text>
          ) : null}
        </section>
      );
    case "cta":
      return (
        <CtaHighlightFrame
          key={index}
          titlePrefix={
            typeof section.heading === "string"
              ? section.heading
              : "Prêt à passer à l'action ?"
          }
          titleHighlight=" "
          subtitle={
            typeof section.description === "string"
              ? section.description
              : "Réservez une démo et voyez AirSaas en action."
          }
          ctaLabel={section.buttonText || "Réserver une démo"}
          ctaHref="/fr/meetings-pages"
        />
      );
    case "faq":
      if (!section.faqItems || section.faqItems.length === 0) return null;
      return (
        <FaqFrame
          key={index}
          title="Questions"
          titleHighlight="fréquentes"
          items={section.faqItems}
        />
      );
    case "stats":
      if (!section.stats || section.stats.length === 0) return null;
      return (
        <ValuePropositionFrame
          key={index}
          titleHighlight={
            typeof section.heading === "string" ? section.heading : "Nos"
          }
          title=" chiffres parlent pour nous"
          columns={Math.min(4, section.stats.length) as 2 | 3 | 4}
        >
          {section.stats.map((s, i) => (
            <FeatureCard key={i} title={s.value} description={s.label} />
          ))}
        </ValuePropositionFrame>
      );
    default:
      return null;
  }
}

export default function LandingSectionsPage({ page }: { page: GenericPageData }) {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* 1. Hero */}
      <Hero
        layout="split"
        eyebrow={page.hero.badge}
        title=""
        titleHighlight={
          typeof page.hero.heading === "string" ? page.hero.heading : "AirSaas"
        }
        subtitle={page.hero.description}
        primaryCta={{ label: "Réserver une démo", href: "/fr/meetings-pages" }}
        imageSrc={page.hero.image || "https://placehold.co/1200x700/e8eafc/3a51e2?text=AirSaas"}
        imageAlt={page.hero.imageAlt}
        floatingCards={false}
      />

      {/* 2. Intro */}
      <section className="flex flex-col items-center gap-[1.5rem] px-[1.5rem] py-[3rem] md:px-[3rem] md:py-[5rem] lg:px-[10rem] lg:py-[6.25rem] bg-white text-center">
        <Heading level={2} align="center">
          {page.intro.heading}
        </Heading>
        <Text size="md" align="center" maxWidth="52.9375rem">
          {page.intro.description}
        </Text>
      </section>

      {/* 3. Sections */}
      {page.sections.map((section, i) => renderSection(section, i))}

      {/* 4. Footer */}
      <Footer
        columns={BLOG_INDEX_DATA.footerColumns}
        copyright={BLOG_INDEX_DATA.copyright}
      />
    </main>
  );
}
