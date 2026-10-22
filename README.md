# Bewdley Bootcamp — bewdleybootcamp.co.uk

Static HTML/CSS/JS site. Sells the gym as a functional fitness class location first,
with personal training as an add-on. Membership-led pricing: unlimited monthly is the
featured option; pay-as-you-go exists but carries no price on the site.

Design system matches the Bootcamp Apps sales page — dark ground, brand green
`#4CAF50`, Bebas Neue / Barlow Condensed / Barlow. Tokens are at the top of
`css/style.css`. **Use the tokens (`var(--green)`, `var(--bone)` etc.) for anything new.**

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — classes-led, pricing, Google reviews |
| `classes.html` | The three pillars + class pricing |
| `booking.html` | Live PT Minder timetable (embedded) + rates board |
| `personal-training.html` | PT add-on: free consultation, rates, client reviews |
| `team.html` | Chris featured + placeholder coach cards |
| `blog.html` | Blog index (2 live posts) |
| `blog-strength-at-any-age.html` | Post 1 |
| `blog-first-class.html` | Post 2 |
| `blog-post-template.html` | Duplicate for each new post |
| `contact.html` | Formspree form + details + hours + map |
| `shop.html` | Kit shop. Products rendered from `js/shop.js`, checkout on Stripe |
| `css/style.css` | All styles — one external stylesheet, shared by every page |
| `js/main.js` | Nav, reveal animations, contact form submission |
| `js/shop.js` | Shop product list (edit `PRODUCTS`) + grid, filter, thank-you banner |
| `images/` | Site photography (see below) |

## Prices on the site

Change these together if prices move:

| | Where it appears |
|---|---|
| Unlimited monthly **£70** | `index.html`, `classes.html` (pricing cards), `booking.html` (board + meta), meta descriptions on index/classes |
| 10 × 60min **£75** | pricing cards, `booking.html` |
| 10 × 45min **£60** | pricing cards, `booking.html` |
| Pay as you go | No price shown — "Options available", routes to contact |
| PT £42.50 / £225 ×6 / £410 ×12 | `personal-training.html` (board + meta) |

## Integrations

- **Contact form** — Formspree form `mppaygdz`, posted via `fetch` in `js/main.js`.
  Includes a `_gotcha` honeypot field for spam. Free tier = 50 messages/month.
- **Booking** — PT Minder class scheduler iframe:
  `https://ptminder.com/frame/get-class-scheduler?webaddr=pinnaclepersonaltraining`
- **Map** — query-based Google Maps embed (address in the URL, no coordinates).
- **Bootcamp Apps** — included free for members. No app pricing appears anywhere on
  this site; the homepage band and pricing footnotes present it as a member benefit.
- **Reviews** — rating and count (4.9 / 29) are typed in by hand on `index.html`
  and `personal-training.html`. Update both when the Google count changes.

## Shop

No basket, collection only. Each product's **Buy now** button opens a Stripe
Payment Link; size and colour are dropdowns on the Stripe checkout. Stripe emails
the customer a receipt and the order (with size/colour) shows in the Stripe
dashboard.

- **Edit products** in the `PRODUCTS` list at the top of `js/shop.js`
  (price, sizes, `soldOut: true`, `stripe` link).
- A product with no `stripe` link shows an **Ask at the gym** button instead.
- Each payment link's "after payment" setting should redirect to
  `https://www.bewdleybootcamp.co.uk/shop.html?order=thanks` (shows the thank-you banner).
- Photos go in `images/shop/` named after the product `id` (e.g. `hoodie.jpg`),
  square-ish, on a white/light background. Missing photos show a branded tile.
- Old Squarespace `/store` URLs redirect to `/shop.html` (`render.yaml` routes).

## Images

All photography is in `/images/`, cropped and compressed for its slot:

| File | Used on |
|---|---|
| `hero.jpg` / `hero-mobile.jpg` | Homepage hero (mobile version swapped in by CSS under 700px) |
| `class-strength.jpg`, `class-conditioning.jpg` | Pillar cards, index + classes |
| `gym-light.jpg` | Classes page, "All abilities" band |
| `blog-strength.jpg`, `blog-first-class.jpg` | Blog index cards |
| `class-mobility.jpg` | Mobility pillar (suspension-trainer class shot) |
| `header-classes.jpg`, `header-booking.jpg`, `header-pt.jpg`, `header-team.jpg`, `header-blog.jpg`, `header-contact.jpg` | Photo band behind each interior page title (2:1) |
| `gym-exterior.jpg` | Contact page, beside the map — "look for the red-framed unit" |
| `og-image.jpg` | Social share preview (all pages) |

**One image is still hot-linked from Squarespace:** the photo of Chris coaching
(`IMG_1552.jpg`), used on `index.html`, `personal-training.html` and `team.html`.
Download it and save it as `images/chris-coaching.jpg` **before cancelling
Squarespace**, then update those three `src` attributes — or replace it with a new
photo of Chris coaching one-to-one.

## Still to do

- Photo of Chris (portrait) for the team page
- Real coach profiles in `team.html` (two placeholder cards)
- Price rise — update the table above when it lands

## Adding a blog post

Duplicate `blog-post-template.html`, rename (e.g. `blog-my-post.html`), fill in the
content, and add a card to the grid in `blog.html` with a 16:9 image in `/images/`.

## Deploy (GitHub + Render — same as the apps subdomain)

`render.yaml` defines a static site publishing the repo root. Pushing to `main`
redeploys automatically. Custom domains: bewdleybootcamp.co.uk + www.
