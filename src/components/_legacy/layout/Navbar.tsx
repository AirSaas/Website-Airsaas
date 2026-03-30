"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NAV_LINKS = [
  { key: "testimonials", href: "/fr/temoignages" },
  { key: "integrations", href: "/fr/les-integrations" },
  { key: "news", href: "/fr/les-nouveautes-produit" },
  { key: "quarterPlan", href: "/fr/quarter-plan" },
  { key: "teams", href: "/fr/microsoft-teams-airsaas" },
];

const DROPDOWN_BUTTONS = ["solutions", "product", "resources"] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/fr" className="shrink-0">
          <Image
            src="/assets/icons/AirSaas.svg"
            alt="AirSaaS"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {DROPDOWN_BUTTONS.map((key) => (
            <button
              key={key}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-bg-alt"
            >
              {t(key)}
              <svg
                className="h-3 w-3 opacity-50"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M3 5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-bg-alt"
            >
              {t(link.key)}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language selector (desktop) */}
          <button className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm lg:flex">
            <span>Français</span>
            <svg
              className="h-3 w-3 opacity-50"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M3 5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <Link
            href="https://app.airsaas.io/fr/login"
            className="hidden rounded-[10px] border border-foreground/20 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 lg:inline-flex"
          >
            {t("login")}
          </Link>
          <Link
            href="/fr/meetings-pages"
            className="hidden rounded-[10px] bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 lg:inline-flex"
          >
            {t("demo")}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {DROPDOWN_BUTTONS.map((key) => (
              <button
                key={key}
                className="py-2 text-left text-sm font-medium"
              >
                {t(key)}
              </button>
            ))}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link
              href="https://app.airsaas.io/fr/login"
              className="py-2 text-sm font-medium"
            >
              {t("login")}
            </Link>
            <Link
              href="/fr/meetings-pages"
              className="rounded-[10px] bg-primary px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              {t("demo")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
