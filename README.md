# Bewdley Bootcamp: bewdleybootcamp.co.uk

Static HTML/CSS/JS site, no build step. Sells the gym as a functional fitness class
location first, with personal training as an add-on. Membership-led pricing: unlimited
monthly is the featured option; pay-as-you-go exists but carries no price on the site.

Design system matches the booking app and the Bootcamp Apps page: dark ground, brand
green `#4CAF50`, Bebas Neue / Barlow Condensed / Barlow. Tokens are at the top of
`css/style.css`. **Use the tokens (`var(--green)`, `var(--bone)` etc.) for anything new.**

Copy style: no em dashes anywhere in page text.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage: classes-led, pricing, Google reviews |
| `classes.html` | The three pillars, class lengths, class pricing |
| `booking.html` | The "Booking" tab: live booking system embedded, rates board, good to know |
| `personal-training.html` | PT add-on: free consultation, rates, client reviews |
| `team.html` | Coach profiles: Chris, Liz, Tiff. Leighton has a holding card |
| `blog.html` | Blog index (2 live posts) |
| `blog-strength-at-any-age.html` | Post 1 |
| `blog-first-class.html` | Post 2 |
| `blog-post-template.html` | Duplicate for each new post (marked noindex) |
| `contact.html` | Formspree form, details, hours, exterior photo and map |
| `404.html` | Not-found page (root-absolute paths so it works at any URL) |
| `sitemap.xml`, `robots.txt` | For search engines. Add new pages and posts to the sitemap |
| `css/style.css` | All styles, one stylesheet shared by every page |
| `js/main.js` | Nav, reveal animations, booking embed height, contact form |
| `fonts/`, `icons/` | Self-hosted fonts and favicon (same files as the booking app) |
| `images/` | Site photography (see below) |

## Booking

The booking system lives at `https://booking.bewdleybootcamp.co.uk` (separate repo,
`bewdley-bootcamp-booking`).

- `booking.html` embeds it with `?embed=1`. The app posts its height to the page and
  `js/main.js` resizes the iframe to fit, so there is no inner scrollbar.
- The app only allows itself to be framed by `bewdleybootcamp.co.uk` and
  `www.bewdleybootcamp.co.uk` (its `render.yaml`, `frame-ancestors`). On the
  `onrender.com` preview address the embed stays blank; use the "open in its own
  window" link under it.
- The nav "Sign Up" button goes straight to the app's login screen (`/#/login`).
  Every other book/join button goes to the Booking tab.
- Facts quoted on the site that come from the booking system. Update both if they change:
  15 minute booking and cancellation cut-off, booking two months ahead, classes capped
  at 12, 60 minute classes Mon/Wed/Fri/Sat and 45 minute classes Tue/Thu.

## Prices on the site

Change these together if prices move (they match the products in the booking system):

| | Where it appears |
|---|---|
| Unlimited monthly **£70** | `index.html`, `classes.html` (pricing cards), `booking.html` (board + meta), meta descriptions on index/classes |
| 10 × 60min **£75** | pricing cards, `booking.html` |
| 10 × 45min **£60** | pricing cards, `booking.html` |
| Pay as you go | No price shown: "Options available", routes to contact |
| PT £42.50 / £225 ×6 / £410 ×12 | `personal-training.html` (board + meta) |

## Other integrations

- **Contact form:** Formspree form `mppaygdz`, posted via `fetch` in `js/main.js`.
  Includes a `_gotcha` honeypot field for spam. Free tier is 50 messages a month.
- **Map:** query-based Google Maps embed (address in the URL, no coordinates).
- **Bootcamp Apps:** included free for members. No app pricing appears on this site.
- **Reviews:** rating and count (4.9 / 31, checked 11 Nov 2026) are typed in by hand on
  `index.html` and `personal-training.html`. Update both when the Google count changes.
- **Search data:** `index.html` carries a JSON-LD block (address, hours, phone) for Google.
  Update it if opening hours change.
- **Fonts:** self-hosted in `fonts/`, declared at the top of `css/style.css`. Nothing
  loads from Google Fonts.

## Team profiles

Each coach on `team.html` is one `<section>` using `.band.band--profile` (add `reverse`
to alternate sides): portrait, bio, a quote, then a `.profile-facts` list. To add
Leighton, copy Tiff's section, swap the content, and delete his holding card at the
bottom. Portraits are 3:4, saved as `images/team-<name>.jpg`.

## Images

All photography is in `/images/`, cropped and compressed for its slot. Nothing is
hot-linked from Squarespace any more.

| File | Used on |
|---|---|
| `hero-class.jpg` | Homepage hero: class photo with the club badge. Set in `css/style.css` (`.hero-media`), shown whole on the right on desktop |
| `class-strength.jpg`, `class-conditioning.jpg`, `class-mobility.jpg` | Pillar cards, index + classes |
| `gym-light.jpg` | Classes page, "All abilities" band |
| `team-chris.jpg`, `team-liz.jpg`, `team-tiff.jpg` | Team profiles. Chris's is also the PT band on index + PT page |
| `blog-strength.jpg`, `blog-first-class.jpg` | Blog cards and post lead images |
| `header-*.jpg` | Photo band behind each interior page title (2:1) |
| `gym-exterior.jpg` | Contact page, beside the map |
| `badge.png` | The club badge, transparent. Footer of every page, and faint behind the closing call-to-action bands (`.cta-banner`) |
| `og-badge.jpg` | Link preview when the site is shared (all pages): the badge on the page colour, 1200×630 |

## Still to do

- Leighton's profile and photo
- Higher-resolution coach portraits (current ones are cropped from Instagram graphics)
- A photo of Chris coaching one-to-one for the PT bands
- Price rise: update the table above and the booking system together

## Adding a blog post

Duplicate `blog-post-template.html`, rename (e.g. `blog-my-post.html`), remove the
`noindex` line, fill in the content, add a card to the grid in `blog.html` with a 16:9
image in `/images/`, and add the URL to `sitemap.xml`.

## Deploy (GitHub + Render)

`render.yaml` defines a static site publishing the repo root. Pushing to `main`
redeploys automatically. Custom domains: bewdleybootcamp.co.uk + www.
