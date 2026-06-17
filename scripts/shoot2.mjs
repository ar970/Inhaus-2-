import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const OUT = "screenshots";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(BASE, { waitUntil: "networkidle" });

async function shoot(target, file) {
  const loc = typeof target === "string" ? page.locator(target) : target;
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/${file}` });
}

await shoot("#how", "08-desktop-how.png");
await shoot("#origin", "09-desktop-origin.png");
await shoot("#reviews", "10-desktop-reviews.png");
await shoot(
  page.getByText("Your next great cup starts here"),
  "11-desktop-final.png",
);

await browser.close();
console.log("Lower-section screenshots written.");
