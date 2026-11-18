// Usage: node render.js <html> <out.mp4> <durationSec> [fps] [stillsDir]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
(async () => {
  const [html, out, dur, fpsArg, stills] = process.argv.slice(2);
  const fps = Number(fpsArg || 30), frames = Math.round(Number(dur) * fps);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(html));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  if (stills) {
    fs.mkdirSync(stills, { recursive: true });
    for (const t of [0.8, 3.5, 6.0, 8.6, 10.9]) {
      await page.evaluate(t => window.render(t), t);
      await page.screenshot({ path: path.join(stills, `t${t}.png`) });
    }
  }
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium', '-movflags', '+faststart', out]);
  for (let i = 0; i < frames; i++) {
    await page.evaluate(t => window.render(t), i / fps);
    const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await browser.close();
  console.log('done', frames, 'frames');
})();
