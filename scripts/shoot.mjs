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
await page.goto(BASE, { waitUntil: "domcontentloaded" }).catch(() => {});
await page.waitForTimeout(1400);
await page.screenshot({ path: `${OUT}/01-desktop-hero.png` });

await page.locator("#manifesto").scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: `${OUT}/03-desktop-manifesto.png` });

await page.locator("#shop").scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await page.screenshot({ path: `${OUT}/04-desktop-shop.png` });

// add to cart -> toast
try {
  await page.getByRole("button", { name: /add to cart/i }).first().click({ timeout: 8000 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/05-desktop-toast.png` });

  // open cart
  await page.getByRole("button", { name: /open cart/i }).click({ timeout: 8000 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/06-desktop-cart.png` });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
} catch (e) {
  console.log("cart flow skipped:", e.message);
}

await autoScroll(page);
await page.screenshot({ path: `${OUT}/02-desktop-full.png`, fullPage: true });
await ctx.close();

// ---------- Mobile ----------
const mctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mp = await mctx.newPage();
await mp.goto(BASE, { waitUntil: "domcontentloaded" }).catch(() => {});
await mp.waitForTimeout(1400);
await mp.screenshot({ path: `${OUT}/07-mobile-hero.png` });

await mp.locator("#shop").scrollIntoViewIfNeeded();
await mp.waitForTimeout(700);
await mp.screenshot({ path: `${OUT}/08-mobile-shop.png` });
await mctx.close();

await browser.close();
console.log("Screenshots written.");
