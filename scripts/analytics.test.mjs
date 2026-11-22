import test from 'node:test';
import assert from 'node:assert/strict';
import { initializeAnalytics } from '../src/scripts/analytics.ts';

const commands = env => (env.view.dataLayer || []).map(args => Array.from(args));
const events = env => commands(env).filter(args => args[0] === 'event');
const flush = () => Promise.resolve();

class Element {
  constructor(dataset = {}, attrs = {}) { this.dataset = dataset; this.attrs = attrs; this.handlers = {}; }
  addEventListener(name, handler) { (this.handlers[name] ||= []).push(handler); }
  getAttribute(name) { return this.attrs[name] ?? null; }
  closest(selector) { return selector === '[data-analytics-event]' && this.dataset.analyticsEvent ? this : null; }
}

function fixture(referrer = 'https://example.test/article?email=secret@example.test#token') {
  const scripts = [], beforeLoad = [], listeners = {};
  const view = { location: { origin: 'https://cocodev-lab.github.io', pathname: '/publications/', search: '?email=private@example.test', hash: '#private' } };
  const doc = {
    referrer,
    addEventListener(name, handler) { (listeners[name] ||= []).push(handler); },
    createElement: () => ({}),
    head: { append(script) { scripts.push(script); beforeLoad.push(commands({ view })); } },
  };
  const click = element => {
    const event = { target: element };
    for (const handler of element.handlers.click || []) handler(event);
    for (const handler of listeners.click || []) handler(event);
  };
  return { doc, view, scripts, beforeLoad, listeners, click };
}

test('local development makes no external load, initialization, or measurement events', async () => {
  const env = fixture();
  initializeAnalytics(env.doc, env.view, false);
  env.click(new Element({ analyticsEvent: 'apply_click' }));
  await flush();
  assert.deepEqual(env.scripts, []);
  assert.equal(env.view.dataLayer, undefined);
  assert.deepEqual(events(env), []);
  assert.equal(env.listeners.click, undefined);
});

test('production loads one official container with sanitized URLs and no duplicate manual pageview', () => {
  const env = fixture();
  initializeAnalytics(env.doc, env.view, true);
  initializeAnalytics(env.doc, env.view, true);
  assert.equal(env.scripts.length, 1);
  assert.equal(env.scripts[0].src, 'https://www.googletagmanager.com/gtm.js?id=GTM-T24G4XTW');
  assert.equal(env.scripts[0].async, true);
  assert.deepEqual(env.beforeLoad[0].find(c => c[0] === 'set')[1], {
    page_location: 'https://cocodev-lab.github.io/publications/',
    page_referrer: 'https://example.test/article',
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  assert.equal(commands(env).filter(c => c[0] === 'js').length, 1);
  assert.equal(commands(env).some(c => c[0] === 'config' || c[0] === 'consent' || c[1] === 'page_view'), false);
  assert.equal(env.listeners.click.length, 1);
  assert.equal(Object.keys(env.view).some(key => key.startsWith('ga-disable-')), false);
});

test('referrers without public HTTP URLs are omitted', () => {
  for (const referrer of ['', 'not-a-url', 'file:///private/file', 'javascript:alert(1)']) {
    const env = fixture(referrer);
    initializeAnalytics(env.doc, env.view);
    assert.equal(commands(env).find(c => c[0] === 'set')[1].page_referrer, '');
  }
});

test('only approved interactions and public metadata are sent; closing abstracts and arbitrary values are ignored', async () => {
  const env = fixture();
  initializeAnalytics(env.doc, env.view);
  const abstract = new Element({ analyticsEvent: 'abstract_open', paperId: 'Brahimi2026b' }, { 'aria-expanded': 'false' });
  abstract.addEventListener('click', () => { abstract.attrs['aria-expanded'] = abstract.attrs['aria-expanded'] === 'true' ? 'false' : 'true'; });
  env.click(abstract); await flush();
  env.click(abstract); await flush();
  env.click(new Element({ analyticsEvent: 'paper_click', paperId: 'Liu2026', linkType: 'pdf', email: 'private@example.test', cv: 'secret.pdf' }));
  env.click(new Element({ analyticsEvent: 'apply_click', email: 'private@example.test' }));
  env.click(new Element({ analyticsEvent: 'applicant_email', paperId: 'private@example.test' }));
  env.click(new Element({ analyticsEvent: 'paper_click', paperId: 'private@example.test', linkType: 'pdf' }));
  env.click(new Element({ analyticsEvent: 'paper_click', paperId: 'paper1', linkType: 'https://private.example.test' }));
  env.click(new Element({ analyticsEvent: 'paper_click', paperId: 'paper1' }));
  env.click(new Element({ analyticsEvent: 'abstract_open' }, { 'aria-expanded': 'true' }));
  await flush();
  assert.deepEqual(events(env), [
    ['event', 'abstract_open', { send_to: 'G-EVTD49FK9H', paper_id: 'Brahimi2026b' }],
    ['event', 'paper_click', { send_to: 'G-EVTD49FK9H', paper_id: 'Liu2026', link_type: 'pdf' }],
    ['event', 'apply_click', { send_to: 'G-EVTD49FK9H' }],
  ]);
});
