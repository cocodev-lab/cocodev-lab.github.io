# Design and source notes

## Baseline

Source: https://github.com/afourtassi/afourtassi.github.io

Reference commit: `c03385444c87e34de215b83e6c2cb1f72cfac2bd`, inspected on 21 November 2026 from a separate copy in `/private/tmp/cocodev-design-reference`. The original personal website and its local checkout were not edited.

The adaptation retains the Minimal Mistakes **Air** skin (`#eeeeee` background, `#222831` text, `#0092ca` accent and footer), system font stack, type scale, masthead, centered reading width, sidebar, bibliography spacing, update panel, and 768px layout breakpoint. Original layout and include structures were translated into Astro components. No new visual template, webfont, or identity was introduced.

The original `_sass/` is retained under `src/styles/`, including `_homepage.scss`, `_publications.scss`, and `_responsive.scss`. Main imports follow the same order, with the Liquid skin expression replaced by `air`. Obsolete Internet Explorer star-property hacks in `_reset.scss` and `_forms.scss` were removed because Astro's modern CSS minifier rejects them; those declarations do not affect current browsers. Group additions live in `_cocodev.scss`.

The existing CoCoDev logo, research illustration, PI portrait, and book preview were reused. The group sidebar contains affiliations and contact links; the PI page has its own personal sidebar and portrait. Navigation has no CV tab. Publications keep compact controls; Abstract buttons and publication links share one flex row. Accessible buttons toggle separate abstract panels; without JavaScript, the abstracts remain readable. A small TypeScript navigation controller reproduces greedy overflow behavior and supports Escape and outside-click dismissal.

## Content

Primary text, bibliography, news and research illustration:

- https://afourtassi.github.io/
- https://afourtassi.github.io/research/
- https://afourtassi.github.io/publications/
- Repository `research.md`, `index.html`, `publications.md`, and `_bibliography/references.bib`.

The bibliography migration retains 63 source records, of which 62 are visible, with 6 representative publications. The explicit source exclusion of `Goumri2026` is preserved. Research tags connect the same papers to sensory input, cognitive mechanisms and social interactions. Twenty-four visible records have accompanying code. Existing author spelling inconsistencies are preserved. The thesis publisher/institution is retained as its venue.

Team sources:

- https://cocodev1.gitlab.io/website/members/
- https://afourtassi.github.io/assets/files/cv.pdf (Mentorship, pages 4–5, checked live on 21 November 2026).

The newer PI supervision record supersedes the undated supplementary roster for active and completed PhDs and postdocs. Current entries are Giulia Rambelli, Monica Barbir, Marianne Schweitzer, Youcef Brahimi, Mathias Vigouroux and Jing Liu; co-supervised PhDs are marked. Alumni include completed supervised PhDs/postdocs and earlier interns. Jing and Kübra's earlier internships are not duplicated as separate alumni entries. Francesco Cabiddu is an explicitly documented past visitor. Floor Meewis is omitted because the available sources do not establish a current or alumni status in this PI-led group.

Benoit Favre, Leonor Becerra-Bonache and Marianne Jover are grouped as external collaborators as an editorial adaptation to the requested PI-led structure. The old site presents them as faculty members; their inclusion does not establish current employment titles, which are therefore omitted. This grouping can be reviewed by the PI.

Seminars and joining:

- https://cocodev1.gitlab.io/website/seminars/
- https://cocodev1.gitlab.io/website/contact/

The archive has 46 entries (2021–2024), with cancellation labels and available recording links preserved. The source's incorrect Dimitris Bolis link (which pointed to Sho Tsuji) is omitted; its “Coprus” title typo is corrected to “Corpus”. Historical affiliations remain part of the archived event records. The calendar is the source's existing calendar; no new seminar dates are invented.

The old recruitment offer marked “filled” is not presented as open. GLAD's prospective research engineer and PhD recruitment follow the current PI homepage. General fellowship links point to program landing pages instead of archived calls.

## Verification

The production build and Astro TypeScript checks were run. Local HTML routes, assets, in-page anchors, metadata, publication counts, and absence of a CV navigation tab were checked. The development homepage responded successfully at http://127.0.0.1:4322/.

Browser visual verification remains outstanding: the in-app browser host was unavailable, and native Google Chrome access was not approved. Desktop and mobile behavior were reviewed against the original SCSS and component code, but were not verified through screenshots or runtime browser interactions. Review the local preview before publication, especially 390px, 767px, 768px and desktop widths, the overflow menu, news scrolling, and abstract disclosure spacing.

No source push or publication was performed.

## Homepage and PI page revision, 21 November 2026

The homepage now opens with the exact original `assets/images/logo.jpeg` banner (1500 × 500), copied unchanged to `public/assets/images/cocodev-banner.jpg`. It has one short group introduction and a closing affiliation line; the research-theme, people, recruitment, resource and seminar cross-promotions were removed. Updates retain the PI’s original first-person voice. The group sidebar no longer repeats the CoCoDev name or expanded name. On mobile the banner and main content precede sidebar contact links.

Resources is explicitly marked “In progress”; the provisional repository list has been removed from that page. Publication code links remain available on the Publications page.

The new `/people/abdellah-fourtassi/` page consolidates biography, current/previous positions, education and HDR, nine teaching entries, books, funding, mentorship, honors, service, talks, outreach and professional links. Dates and course names were audited against the current five-page CV; descriptions found only in older indexed versions were omitted. Future 2027 service roles are labelled upcoming. The HDR year and manuscript link follow the previous group site’s announcement without assuming its announcement date is the defense date.

The current CV is copied locally to `/assets/files/abdellah-fourtassi-cv.pdf` (SHA256 `de79f11d89caf44b67b56e08add1e2c40558409d25153f4316804d416f91c043`). The original Bluesky feed is loaded on demand within a sandboxed iframe, preserving a permanent profile link and an explicit network-failure fallback. The feed endpoint’s cross-origin access was checked. Runtime browser rendering remains unverified because browser access was unavailable.

PI links within the group site now point to this new local profile. No redirect has been configured at `afourtassi.github.io`, and that site remains unchanged.

## Sidebar removal and white background, 21 November 2026

At the PI’s request, both group and personal sidebars were removed from the shared layout. Every page now uses one centered reading column at the existing 70ch measure, with the original wider masthead retained for the navigation. Theme float and width deductions are explicitly reset, so there is no unused sidebar column on desktop. The PI portrait sits within the personal page introduction, alongside its existing CV and professional links.

A white background is set before the Air skin import. This updates page and navigation surfaces consistently while retaining the original type scale, dark text and blue accents. The banner image is unchanged. Earlier sidebar and grey-background notes above describe preceding iterations.

## Updates moved to the PI page, 21 November 2026

The homepage now contains only the illustrated banner, agreed high-level research sentence, and affiliation links. The PI name/link, updates, and representative publication list were removed from the homepage. Publications remain available in their own tab. The existing first-person updates now appear after the biography on the PI page, using a reusable component with the same scrollable-panel styling. The additional sentence about computational modeling is being refined with the PI and is not yet inserted.

## Institutional logo footer, 21 November 2026

Following clarification that “sidebar” meant the bottom bar, the homepage’s text affiliation line was replaced by a shared white footer with a thin grey divider. Three linked logos identify Aix-Marseille University, LIS and ILCB. The main content remains a single centered column. The desktop footer places copyright text alongside the logos; on smaller screens the logo row sits above it. No blue footer background remains.

Assets were downloaded unchanged and inspected visually:

- AMU: https://cocodev1.gitlab.io/website/img/clipart/logo_AMU_color.png (200 × 68).
- LIS: https://www.lis-lab.fr/wp-content/themes/lis/images/logo-lis-2024.svg (660 × 510).
- ILCB: https://cocodev1.gitlab.io/website/img/clipart/ilcb_logo.png (1570 × 364).

Local copies live in `public/assets/affiliations/`; footer presentation is isolated in `src/components/Affiliations.astro` and the group stylesheet.

## Letterhead logo refinement, 21 November 2026

AMU and LIS now use the separate original PNG assets from the user-supplied `/Users/afourtassi/Downloads/template_lettres_juil2024.zip`: `logo_amu.png` (441 × 98) and `logo_lis.png` (821 × 316). Only these two assets were copied; CNRS, Centrale and Toulon are excluded. ILCB is retained unchanged. The letterhead documents were inspected as design references, and no document instructions or code were executed.

The three marks share one centered row, with copyright beneath. Column proportions use visible logo height rather than equal box widths. ILCB’s original internal whitespace is compensated through CSS sizing and a small vertical offset; no raster image was edited. This keeps the visible marks aligned as the footer scales to mobile widths.

## Funding logos and homepage identification, 21 November 2026

At the PI’s request, CNRS and ANR were added to the footer alongside AMU, LIS and ILCB. The CNRS logo is copied unchanged from `template_lettres/logo_cnrs.png` in the supplied ZIP (1000 × 1000). The compact ANR symbol is the unchanged `ANR-logo-2021/ANR-logo-2021-sigle.jpg` from https://anr.fr/fileadmin/documents/2022/ANR-logo-2021.zip, linked by https://anr.fr/fr/contact/charte-graphique-et-logo/ (1211 × 461). The text-heavy agency logo is not used. Centrale and Toulon remain excluded.

The five logos have a common visible mark height; flex wrapping keeps them legible on smaller screens. White margins in ILCB and ANR are compensated through CSS sizing and small vertical offsets. The accessible footer label now covers affiliations and funding.

The homepage starts with the exact sentence: “CoCoDev is a research group at Aix-Marseille University.” The previously approved research description follows it unchanged.

## People page simplification, 21 November 2026

The People page now starts directly with the PI, followed by current members and alumni. The introductory paragraph, co-supervision labels, collaborator section and separate past-visitor heading were removed at the PI’s request. Alumni are limited to completed PhDs/postdocs, with Francesco Cabiddu retained as “Visiting PhD” and no institutional detail in that role. Earlier internships are no longer listed.

All entries use the same portrait row. Existing photographs are reused where available; otherwise a neutral, non-identifying SVG profile icon is shown. The icon is an original code-native silhouette, not an invented portrait. All existing PI/profile links and membership periods are preserved.

## Publication grouping and seminar descriptions, 21 November 2026

Publications now starts directly with “Under review”, without a year-navigation row. Papers from 2019 and earlier are grouped in one section and ordered by year descending. Existing visible entries and resource controls are unchanged.

The Seminars introduction keeps its original opening sentence and adds “The CoCoDev seminars will return soon.” Calendar/contact links and archive notes were removed. Talks appear in one date-ordered list without year headings. Speaker pages and available recordings are retained. Description buttons use the same visual controls and expanded-state behavior as publication abstracts.

Fresh source: https://cocodev1.gitlab.io/website/seminars/. All 47 existing records were matched uniquely by date and speaker, with titles checked; earlier notes that counted 46 were incorrect. Forty-four source descriptions were imported as text, excluding old meeting logistics. Three source abstracts are “TBA” and therefore have no Description button: Jonathan Ginzburg (17 December 2021), Open discussion (10 December 2021), and Ruthe Foushee (10 September 2021). The source’s title-only description for Dimitris Bolis is preserved without invented content.

## PI updates restored to the homepage, 21 November 2026

At the PI’s request, the first-person updates have moved back from the personal page to the homepage, under “Updates from the PI”. Their wording and scrollable-panel design are unchanged. The obsolete personal-page Updates anchor was removed.

## Short personal page and shared updates, 21 November 2026

The news heading is now “News and updates”, without CoCoDev. The homepage shows the three latest items with the PI byline and a link to the full feed on the personal page. Both views use the same news array and component; the personal page omits the redundant byline.

The personal page is now a short profile with current roles and training summarized in three paragraphs, concise teaching and book sections, six representative publications, the complete news feed and Bluesky. The long CV-style timelines, grant amounts, awards, committees, old course lists and talk lists are no longer rendered. The full downloadable CV remains unchanged.

## Separate group and personal updates, 22 November 2026

The homepage and `/news/` now display five institutional announcements: the seminar restart and mailing list, CoCoDev’s EMNLP participation, GLAD funding, Developmental AI co-organization and the first Computational Developmental Linguistics workshop. The homepage has no PI byline and links to the group news archive. Its news panel includes all five announcements.

The PI’s ten first-person updates are unchanged, including the standalone LM Playschool keynote item. The group EMNLP summary is not inserted into the personal feed. The two feeds are separate typed arrays using the same rendering component. The original personal-news array literal was compared before and after the change and is identical.

Primary links checked for the new group news:

- Main-conference paper: https://aclanthology.org/2026.emnlp-main.2489/ (Jing Liu, Marianne Schweitzer, Abdellah Fourtassi).
- LM Playschool: https://lm-playschool.github.io/.
- BabyLM schedule: https://babylm.github.io/Workshop_times.html (Mitja Nikolaus, invited talk on 29 October 2026).
- Developmental AI: https://www.ultraspeech.com/devai/devai-workshop-2026/.
- Computational Developmental Linguistics: https://comp-dev-ling.github.io/.

The workshop programs use “invited talk”; the news uses the PI’s requested keynote terminology. The seminar subscription link is the Framalistes information page supplied by the PI.

## Judith and People portraits, 22 November 2026

Judith Kalinowski was added to Alumni as “Visiting PhD · 2023”, following the PI’s instruction. Six generic avatars were replaced by named-source professional portraits: Judith, Giulia Rambelli, Mathias Vigouroux, Mitja Nikolaus, Chiara Mazzocconi and Francesco Cabiddu. Original downloaded image bytes are unchanged; file extensions reflect the actual image formats. Source-caption associations are recorded in `people-photo-sources.json`; no identity was inferred from facial appearance.

The PI labelled the five pasted images as Youcef, Mathias, Chiara, Cabiddu and Franck, and the last image as Judith. The two supplied originals for Youcef and Franck were not exposed as local files. Attempts to save them through the chat app were blocked, and no verified accessible online originals were found. These two entries retain generic avatars pending usable image URLs/files; Marianne Schweitzer also retains the generic avatar because no portrait was found.

Mathias Vigouroux’s portrait was subsequently replaced with the exact 200 × 200 JPEG supplied by the PI (`1741811090146.jpeg`), associated with his LinkedIn profile. The supplied file is copied unchanged to `public/assets/people/mathias-vigouroux.jpg`; its checksum is recorded in `people-photo-sources.json`.
