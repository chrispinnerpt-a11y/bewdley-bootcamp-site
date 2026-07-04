# Bewdley Bootcamp — bewdleybootcamp.co.uk

Static HTML/CSS/JS site. Sells the gym as a functional fitness class location first,
with personal training as an add-on. Design system matches the Bootcamp Apps sales
page (dark ground, brand green #4CAF50, Bebas Neue / Barlow Condensed / Barlow).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — classes-led |
| `classes.html` | The three pillars + class rates |
| `booking.html` | Live PT Minder timetable (embedded) + rates |
| `personal-training.html` | PT as add-on: free consultation, rates, testimonial |
| `team.html` | Chris featured + placeholder coach cards |
| `blog.html` | Blog index (2 live posts) |
| `blog-strength-at-any-age.html` | Post 1 |
| `blog-first-class.html` | Post 2 |
| `blog-post-template.html` | Duplicate for each new post |
| `contact.html` | Form + details + hours + map |
| `css/style.css` | All styles — design tokens at the top |
| `js/main.js` | Nav, reveal animations, contact form |

## Before going live — 3 things only you can do

### 1. Contact form (contact.html)
Uses Formspree (free tier = 50 messages/month).
Sign up at https://formspree.io, create a form, replace `YOUR_FORM_ID` in the
form `action`. Until then the form shows a fallback message pointing to
email/phone — nothing breaks.

### 2. Localise the photos
Images are currently hot-linked from the Squarespace CDN so the site looks real
today. **Before cancelling Squarespace**, download each image (URLs are in the
HTML), save into `/images/`, and update the `src`/`background-image` paths.
The apps screenshot and logo pull from apps.bewdleybootcamp.co.uk and are fine.

### 3. Team page
Replace the placeholder coach cards in `team.html` with real names, roles,
bios and 3:4 photos.

## Verify on first deploy
- PT Minder iframe (`booking.html`) — URL taken from the live Squarespace
  booking page: `https://ptminder.com/frame/get-class-scheduler?webaddr=pinnaclepersonaltraining`
- Google Maps embed on `contact.html` resolves to the right unit

## Pricing used
Class rates: £8 drop-in / £75 block of 10 / **£70/month unlimited** (from the
Squarespace booking page — note the old homepage said £63/month; update
`index.html`, `classes.html` and `booking.html` if £70 is wrong).
PT: £42.50 / £225 x6 / £410 x12.

## Adding a blog post
Duplicate `blog-post-template.html`, rename (e.g. `blog-my-post.html`),
fill in content, add a card to the grid in `blog.html`.

## Deploy (GitHub + Render — same as apps subdomain)
1. Push this folder to the GitHub repo
2. Render → New → Static Site → connect repo → build command blank, publish dir `.`
3. Add custom domains bewdleybootcamp.co.uk + www in Render, point DNS per Render's instructions
