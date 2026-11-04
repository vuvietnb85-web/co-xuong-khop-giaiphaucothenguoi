import { chromium } from "playwright";

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--use-gl=angle", "--use-angle=swiftshader"],
});
const page = await browser.newPage({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 2,
});
page.on("console", (msg) => console.log("CONSOLE", msg.type(), msg.text()));
page.on("pageerror", (err) => console.log("PAGEERROR", String(err)));
await page.goto("http://127.0.0.1:8765/.grok/og-card.html", {
  waitUntil: "domcontentloaded",
  timeout: 60000,
});
await page.waitForFunction(() => window.__ready === true || window.__error, null, {
  timeout: 120000,
});
const status = await page.evaluate(() => ({
  ready: window.__ready,
  error: window.__error || "",
  box: window.__box || null,
}));
console.log("STATUS", JSON.stringify(status));
if (!status.ready) {
  await browser.close();
  process.exit(1);
}
await page.evaluate(() => document.fonts.ready);
await page.locator("#stage").screenshot({ path: "/workspace/.grok/og-raw.png" });

const fav = await browser.newPage({
  viewport: { width: 64, height: 64 },
  deviceScaleFactor: 1,
});
await fav.setContent(
  `<body style="margin:0;background:#111"><img src="http://127.0.0.1:8765/.grok/favicon.svg" width="64" height="64"></body>`,
  { waitUntil: "networkidle" },
);
await fav.screenshot({ path: "/workspace/.grok/favicon-64.png" });
const fav16 = await browser.newPage({
  viewport: { width: 16, height: 16 },
  deviceScaleFactor: 4,
});
await fav16.setContent(
  `<body style="margin:0;background:#111"><img src="http://127.0.0.1:8765/.grok/favicon.svg" width="16" height="16"></body>`,
  { waitUntil: "networkidle" },
);
await fav16.screenshot({ path: "/workspace/.grok/favicon-16.png" });
await browser.close();
console.log("SHOT_OK");
