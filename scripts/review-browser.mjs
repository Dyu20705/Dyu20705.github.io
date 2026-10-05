import { publicProfile } from '../src/data/profile.js';
// Optional review tooling: Playwright is installed outside this repository.
// PORTFOLIO_PLAYWRIGHT_PATH=/path/to/playwright node scripts/review-browser.mjs
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PORTFOLIO_PLAYWRIGHT_PATH || 'playwright');
const origin = process.env.PORTFOLIO_REVIEW_URL || 'http://127.0.0.1:4322';
const artifacts = process.env.PORTFOLIO_REVIEW_DIR || '/tmp/portfolio-review';
const widths = [1440, 1280, 1200, 1199, 1024, 768, 390, 360];
const routes = ['/', '/about/', '/resume/', '/portfolio/', '/projects/sites/', '/projects/opendownloader/', '/blog/', '/contact/', '/gallery/', '/cv/', '/404.html'];
await mkdir(artifacts, { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.PORTFOLIO_CHROME_PATH || '/usr/bin/google-chrome',
  headless: true, args: ['--no-sandbox'],
});
const failures = [];
const record = (condition, message) => { if (!condition) failures.push(message); };
const results = [];
try {
  for (const lang of ['vi', 'en']) {
    const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
    await context.addInitScript(value => { if (!localStorage.getItem('siteLang')) localStorage.setItem('siteLang', value); }, lang);
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of routes) {
        await page.goto(origin + route);
        await page.locator('#language-toggle:not([hidden])').waitFor();
        await page.evaluate(() => document.fonts.ready);
        const state = await page.evaluate(() => {
          const nav = document.querySelector('#primary-navigation');
          const active = [...nav.querySelectorAll('[aria-current="page"]')].map(el => el.getAttribute('href'));
          const headingLevels = [...document.querySelectorAll('main h1, main h2, main h3')].map(el => Number(el.tagName[1]));
          const visible = el => el.getClientRects().length > 0;
          const smallControls = [...document.querySelectorAll('button, .primary-nav a, .project-side a, .social-links a')]
            .filter(visible).filter(el => {const r = el.getBoundingClientRect(); return r.height < 43.9 || r.width < 43.9;})
            .map(el => el.outerHTML.slice(0,120));
          return {
            overflow: document.documentElement.scrollWidth > innerWidth,
            lang: document.documentElement.lang,
            wrongCopy: [...document.querySelectorAll('[data-copy-lang]')].filter(visible).some(el => el.dataset.copyLang !== document.documentElement.lang),
            h1: document.querySelectorAll('main h1').length,
            landmarks: ['header', 'nav#primary-navigation', 'main', 'footer'].every(selector => document.querySelectorAll(selector).length === 1),
            active, headingLevels, smallControls,
            navVisible: visible(nav),
            description: document.querySelector('meta[name="description"]').content,
            metadataMatches: [...document.querySelectorAll('[data-meta-vi]')].every(el => {
              const value = el.dataset[document.documentElement.lang === 'vi' ? 'metaVi' : 'metaEn'];
              return (el.tagName === 'TITLE' ? el.textContent : el.getAttribute('content')) === value;
            }),
            footerEmail: getComputedStyle(document.querySelector('footer .email-address')).whiteSpace,
            emptyBlog: !!document.querySelector('.empty-blog'),
          };
        });
        const label = `${lang} ${width} ${route}`;
        if (route === '/blog/') record(state.emptyBlog, `${label}: Blog must initially be empty`);
        record(!state.overflow, `${label}: horizontal overflow`);
        record(state.lang === lang && !state.wrongCopy, `${label}: locale mismatch`);
        record(state.metadataMatches, `${label}: metadata locale mismatch`);
        record(state.h1 === 1 && state.landmarks, `${label}: landmarks/headings`);
        record(state.navVisible === (width >= 768), `${label}: navigation breakpoint`);
        record(!state.smallControls.length, `${label}: undersized controls ${state.smallControls.join(', ')}`);
        record(state.headingLevels.every((level, index, all) => index === 0 || level <= all[index - 1] + 1), `${label}: skipped heading level`);
        const active = route.startsWith('/projects/') ? '/portfolio' : route === '/' || route === '/404.html' ? undefined : `/${route.split('/')[1]}`;
        record(active ? state.active.length === 1 && state.active[0] === active : !state.active.length, `${label}: active navigation`);
        if (width >= 768) record(state.footerEmail === 'nowrap', `${label}: desktop email wraps`);
        results.push({ lang, width, route, ...state });
        const screenshotNames = {
          '/': 'home', '/portfolio/': 'portfolio', '/resume/': 'resume',
          '/projects/sites/': 'project', '/blog/': 'blog-empty', '/gallery/': 'gallery',
        };
        const capture = lang === 'en' && ((width === 1440 && ['/', '/portfolio/', '/resume/', '/projects/sites/', '/blog/'].includes(route)) || (width === 390 && ['/', '/portfolio/', '/gallery/'].includes(route)));
        if (capture) await page.screenshot({ path: `${artifacts}/${screenshotNames[route]}-${width}.png`, fullPage: true, animations: 'disabled' });
      }
    }
    record(!errors.length, `${lang}: browser errors: ${errors.join('; ')}`);
    // Mobile menu, focus return, hidden link focus order and resize reset.
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(origin + '/');
    const menu = page.locator('#menu-toggle');
    await menu.click();
    assert.equal(await menu.getAttribute('aria-expanded'), 'true');
    assert.equal(await page.locator('#primary-navigation a').count(), 7);
    if (lang === 'en') await page.screenshot({path:`${artifacts}/mobile-menu-390.png`,fullPage:true,animations:'disabled'});
    await page.keyboard.press('Tab');
    record(await page.locator('#primary-navigation a').first().evaluate(el => el === document.activeElement), `${lang}: Menu Tab must enter links`);
    record(await page.locator('#language-toggle').evaluate(el => el.getBoundingClientRect().top < 90), `${lang}: utilities leave first header row`);
    await page.keyboard.press('Escape');
    assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    assert.equal(await menu.evaluate(el => el === document.activeElement), true);
    await page.keyboard.press('Tab');
    record(await page.evaluate(() => !document.activeElement.closest('#primary-navigation')), `${lang}: closed menu links remain focusable`);
    await menu.click();
    await page.setViewportSize({width:768,height:900});
    await page.waitForFunction(() => document.querySelector('#menu-toggle').getAttribute('aria-expanded') === 'false');
    assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    // Toggle metadata and persist selection across native navigation.
    await page.locator('#language-toggle').click();
    const next = lang === 'vi' ? 'en' : 'vi';
    record(await page.locator('html').getAttribute('lang') === next, `${lang}: locale toggle`);
    record(await page.locator('meta[property="og:locale"]').getAttribute('content') === (next === 'en' ? 'en_US' : 'vi_VN'), `${lang}: OG locale`);
    await page.locator('.primary-nav a[href="/about"]').click();
    record(await page.locator('html').getAttribute('lang') === next, `${lang}: locale persistence`);
    const metaTitle = await page.title();
    record(metaTitle.startsWith(next === 'en' ? 'About' : 'Giới thiệu'), `${lang}: metadata title mismatch`);
    await page.locator('.copy-email').click();
    record(await page.evaluate(() => navigator.clipboard.readText()) === publicProfile.email, `${lang}: copy email`);
    // Visible focus and contrast on representative screens.
    await page.locator('.identity').focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    record(await page.locator('.primary-nav a').first().evaluate(el => getComputedStyle(el).outlineStyle === 'solid'), `${lang}: focus outline`);
    await context.close();
  }
  // Block deferred bundles: a returning English visitor must see English using
  // only the synchronous head bootstrap and CSS, before the controller runs.
  const prepaint = await browser.newContext({viewport:{width:390,height:900}});
  await prepaint.addInitScript(() => localStorage.setItem('siteLang','en'));
  await prepaint.route('**/*.js', route => route.abort());
  await prepaint.route(origin + '/', async route => {
    const response = await route.fetch();
    const html = (await response.text()).replace(/<script\b[^>]*type=["']module["'][^>]*>[\s\S]*?<\/script>/gi, '');
    await route.fulfill({response,body:html});
  });
  const prepaintPage = await prepaint.newPage();
  await prepaintPage.goto(origin + '/');
  record(await prepaintPage.locator('html').getAttribute('lang') === 'en', 'Pre-paint: saved English not applied');
  record(await prepaintPage.locator('#language-toggle').isHidden(), 'Pre-paint: deferred controller unexpectedly ran');
  const prepaintState = await prepaintPage.evaluate(() => ({
    wrongCopy: [...document.querySelectorAll('[data-copy-lang]')].some(el => el.getClientRects().length && el.dataset.copyLang !== 'en'),
    description: document.querySelector('meta[name="description"]').content,
    expected: document.querySelector('meta[name="description"]').dataset.metaEn,
    og: document.querySelector('meta[property="og:locale"]').content,
  }));
  record(!prepaintState.wrongCopy && prepaintState.description === prepaintState.expected && prepaintState.og === 'en_US', 'Pre-paint: visible copy or metadata mismatch');
  await prepaint.close();
  const fallback = await browser.newContext({javaScriptEnabled:false,viewport:{width:360,height:900}});
  const fallbackPage = await fallback.newPage();
  await fallbackPage.goto(origin + '/');
  record(await fallbackPage.locator('#primary-navigation').isVisible(), 'No-JS: navigation hidden');
  record(await fallbackPage.locator('#language-toggle').isHidden(), 'No-JS: nonfunctional utility exposed');
  await fallback.close();
  const blocked = await browser.newContext({viewport:{width:390,height:900}});
  await blocked.addInitScript(() => { Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage blocked');}}); });
  const blockedPage = await blocked.newPage();
  await blockedPage.goto(origin + '/');
  await blockedPage.locator('#language-toggle:not([hidden])').waitFor();
  await blockedPage.locator('#language-toggle').click();
  record(await blockedPage.locator('html').getAttribute('lang') === 'en', 'Storage-blocked: locale does not work');
  await blocked.close();
  const reduced = await browser.newContext({reducedMotion:'reduce'});
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(origin + '/');
  record(await reducedPage.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior === 'auto'), 'Reduced motion not respected');
  await reduced.close();
  const contrastContext = await browser.newContext();
  const contrastPage = await contrastContext.newPage();
  await contrastPage.goto(origin + '/');
  const tokens = await contrastPage.evaluate(() => {
    const css = getComputedStyle(document.documentElement);
    return Object.fromEntries(['bg','surface','text','body','muted','accent','focus'].map(key => [key, css.getPropertyValue(`--${key}`).trim()]));
  });
  const luminance = hex => {
    const rgb = hex.replace('#','').match(/../g).map(value => parseInt(value,16)/255);
    const linear = rgb.map(value => value <= .04045 ? value/12.92 : ((value+.055)/1.055)**2.4);
    return linear[0]*.2126 + linear[1]*.7152 + linear[2]*.0722;
  };
  const contrast = (a,b) => (Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
  const contrastResults = Object.fromEntries(['text','body','muted','accent'].map(key => [key,Math.min(contrast(tokens[key],tokens.bg),contrast(tokens[key],tokens.surface))]));
  for (const [key,ratio] of Object.entries(contrastResults)) record(ratio >= 4.5, `${key}: text contrast ${ratio}`);
  record(contrast(tokens.focus,tokens.bg) >= 3, 'Focus ring contrast');
  await contrastContext.close();
  await writeFile(`${artifacts}/results.json`,JSON.stringify({checked:results.length,failures,contrastResults,results},null,2));
  if (failures.length) throw new Error(failures.join('\n'));
  console.log(`Passed ${results.length} route/width/locale combinations, menu/focus, metadata, persistence, clipboard, no-JS, blocked storage and reduced motion. Screenshots: ${artifacts}`);
} finally {
  await browser.close();
}
