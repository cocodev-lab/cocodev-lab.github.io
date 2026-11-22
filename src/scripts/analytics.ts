type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  __cocodevAnalyticsInitialized?: boolean;
};

const DESTINATION = 'G-EVTD49FK9H';
const CONTAINER = 'GTM-T24G4XTW';
const eventNames = new Set(['abstract_open', 'paper_click', 'apply_click']);
const linkTypes = new Set(['link', 'pdf', 'preprint', 'repo', 'doi', 'code']);

function publicUrl(value: string): string {
  try {
    const url = new URL(value);
    return /^https?:$/.test(url.protocol) ? url.origin + url.pathname : '';
  } catch { return ''; }
}

/** Load the published Google container once; Astro development mode disables collection. */
export function initializeAnalytics(doc: Document = document, view: Window = window, enabled = true): void {
  const state = view as AnalyticsWindow;
  if (!enabled || state.__cocodevAnalyticsInitialized) return;
  state.__cocodevAnalyticsInitialized = true;
  state.dataLayer = state.dataLayer || [];
  state.gtag = function () { state.dataLayer?.push(arguments); };
  state.gtag('set', {
    page_location: view.location.origin + view.location.pathname,
    page_referrer: publicUrl(doc.referrer),
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  state.gtag('js', new Date());
  const script = doc.createElement('script');
  script.id = 'cocodev-google-tag-manager';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${CONTAINER}`;
  doc.head.append(script);

  doc.addEventListener('click', event => {
    const element = (event.target as Element | null)?.closest?.<HTMLElement>('[data-analytics-event]');
    const name = element?.dataset.analyticsEvent;
    if (!element || !name || !eventNames.has(name)) return;
    // Delegation runs after the abstract button handler; observe its updated state.
    queueMicrotask(() => {
      if (name === 'abstract_open' && element.getAttribute('aria-expanded') !== 'true') return;
      const parameters: Record<string, string> = { send_to: DESTINATION };
      if (name !== 'apply_click') {
        const paper = element.dataset.paperId;
        if (!paper || !/^[A-Za-z0-9][A-Za-z0-9:_-]{0,99}$/.test(paper)) return;
        parameters.paper_id = paper;
      }
      if (name === 'paper_click') {
        const type = element.dataset.linkType;
        if (!type || !linkTypes.has(type)) return;
        parameters.link_type = type;
      }
      state.gtag?.('event', name, parameters);
    });
  });
}
