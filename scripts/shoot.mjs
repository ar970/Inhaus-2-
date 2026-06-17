import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

async function autoScroll(page) {
  await page.evaluate(
    () =>
      new Promise((res) => {
        let y = 0;
        const step = () => {
          const h = document.documentElement.scrollHeight;
          y += window.innerHeight * 0.8;
          window.scrollTo(0, y);
          if (y < h) setTimeout(step, 110);
          else {
            window.scrollTo(0, 0);
            setTimeout(res, 300);
          }
        };
        step();
      }),
  );
  await page.waitForTimeout(450);
}

const browser = await chromium.launch();

// ---------- Desktop ----------
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(BASE, { waitUntil: "networkidle" });
await page.waitForTimeout(1300);
await page.screenshot({ path: `${OUT}/01-desktop-hero.png` });

await autoScroll(page);
await page.screenshot({ path: `${OUT}/02-desktop-full.png`, fullPage: true });

await page.locator("#fuel").scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: `${OUT}/03-desktop-fuel.png` });

// pick Creator -> re-themes pink + routes to product
await page.getByRole("button", { name: /Enter Creator Mode/i }).click();
await page.waitForTimeout(1000);
await page.locator("#shop").scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: `${OUT}/04-desktop-shop-creator.png` });

// add to cart -> drawer
await page.getByRole("button", { name: /Shop Creator Fuel/i }).click();
await page.waitForTimeout(900);
await page.screenshot({ path: `${OUT}/05-desktop-cart.png` });
await ctx.close();

// ---------- Mobile ----------
const mctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mp = await mctx.newPage();
await mp.goto(BASE, { waitUntil: "networkidle" });
await mp.waitForTimeout(1300);
await mp.screenshot({ path: `${OUT}/06-mobile-hero.png` });

await autoScroll(mp);
await mp.locator("#shop").scrollIntoViewIfNeeded();
await mp.waitForTimeout(700);
await mp.screenshot({ path: `${OUT}/07-mobile-shop.png` });
await mctx.close();

await browser.close();
console.log("Screenshots written to", OUT);
