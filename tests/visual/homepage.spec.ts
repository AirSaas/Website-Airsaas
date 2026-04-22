import { test, expect } from "@playwright/test";

/**
 * HomePage visual regression.
 *
 * Scrolls through the main sections and snapshots each. Run
 * `npm run test:visual:update` to regenerate baselines when a change
 * is intentional.
 */

test.describe("HomePage — visual", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for web fonts + lazy images to settle
    await page.waitForLoadState("networkidle");
    // Disable CSS animations for deterministic snapshots
    await page.addStyleTag({
      content: `*, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }`,
    });
  });

  test("Hero", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await expect(page.locator("section").first()).toHaveScreenshot("hero.png", {
      fullPage: false,
    });
  });

  test("TestimonialsFrame — Ils parlent de nous", async ({ page }) => {
    const heading = page.getByRole("heading", { name: /Ils parlent de nous/i });
    await heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(heading.locator("xpath=ancestor::section[1]")).toHaveScreenshot(
      "testimonials-press.png",
    );
  });

  test("SectionHeading — Ils ont simplifié", async ({ page }) => {
    const heading = page.getByRole("heading", { name: /Ils ont simplifié/i });
    await heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(heading.locator("xpath=ancestor::div[1]")).toHaveScreenshot(
      "section-heading-simplifie.png",
    );
  });

  test("CtaHighlightFrame", async ({ page }) => {
    const heading = page.getByRole("heading", { name: /repreniez le contrôle/i });
    await heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(heading.locator("xpath=ancestor::section[1]")).toHaveScreenshot(
      "cta-highlight.png",
    );
  });

  test("SliderFrame — Marketplace", async ({ page }) => {
    const heading = page.getByRole("heading", { name: /Grâce à sa marketplace/i });
    await heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(heading.locator("xpath=ancestor::section[1]")).toHaveScreenshot(
      "slider-marketplace.png",
    );
  });

  test("ComparisonDualFrame", async ({ page }) => {
    const heading = page.getByRole("heading", { name: /Nos clients ne peuvent plus/i });
    await heading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(heading.locator("xpath=ancestor::section[1]")).toHaveScreenshot(
      "comparison-dual.png",
    );
  });

  test("Footer", async ({ page }) => {
    const footer = page.locator("footer").first();
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(footer).toHaveScreenshot("footer.png");
  });
});
