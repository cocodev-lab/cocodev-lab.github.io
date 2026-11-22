# CoCoDev analytics

The site uses the user's published Google Tag Manager container **GTM-T24G4XTW**, which has the Google Analytics destination **G-EVTD49FK9H**. Both are public identifiers, not API keys. The original personal website is separate and unchanged.

## Installation

The shared `BaseLayout.astro` includes `GoogleAnalytics.astro` once in its head. Its browser module, `src/scripts/analytics.ts`, loads one Tag Manager script. There is no separate `gtag.js` installation or second GA4 configuration call.

Tracking is disabled in Astro development mode (`npm run dev`). A production build loads the supplied Google tag, including when served locally with `astro preview`.

The website module does not manage consent, display a banner, or store a consent choice. This is a description of the installation, not a claim of a consent exemption. Consent and any applicable privacy requirements must be handled separately.

## Events

The existing Google container provides enhanced measurement for page views, downloads, outbound clicks, and scrolling. The website adds these events:

| Event | Trigger | Parameters |
| --- | --- | --- |
| `paper_click` | A publication's Link, PDF, Preprint, Repo, or DOI link | `paper_id`, `link_type` |
| `abstract_open` | An abstract is opened; closing it does not count | `paper_id` |
| `apply_click` | The red Apply here button | None beyond the destination identifier |

Publication IDs refer to public papers, such as `Liu2026`. Event collection does not read application answers, email addresses, CV contents, or the embedded Tally frame. Page and referrer query strings and fragments are omitted from the values configured by this module.

`paper_click` is a custom content event. It is separate from Google's automatic `file_download` or outbound `click` events; do not sum those event types as a count of unique actions.

## Google Analytics dashboard

To break down activity by paper and link type, create two event-scoped custom dimensions in the CoCoDev property:

1. **Admin → Data display → Custom definitions → Create custom dimensions**.
2. Name **Paper ID**, scope **Event**, event parameter **paper_id**.
3. Name **Link type**, scope **Event**, event parameter **link_type**.

These property settings require the account owner's Google Analytics access; installing the website code does not create them automatically.

## Verification

- Visit the public site and open **Reports → Realtime** in the CoCoDev Analytics property.
- Open a publication abstract and click the Apply button. Look for `abstract_open` and `apply_click`.
- Confirm the public page loads one container for `GTM-T24G4XTW`, with no duplicate direct GA4 loader.

Code/build checks and mocked event tests do not prove that events have reached the private Analytics dashboard. Confirm reception there after publication. Browser extensions that block tracking may prevent measurements.

## Primary references

- [Current Google Tag Manager installation snippet](https://support.google.com/tagmanager/answer/14847097)
- [Consent mode implementation](https://developers.google.com/tag-platform/security/guides/consent)
- [Enhanced measurement](https://support.google.com/analytics/answer/9216061)
- [Custom dimensions](https://support.google.com/analytics/answer/14239696)
- [CNIL cookie choices and withdrawal](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite)
