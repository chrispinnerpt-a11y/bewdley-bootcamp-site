# Bewdley Bootcamp Website

Static HTML/CSS/JS site to be deployed via GitHub + Render to bewdleybootcamp.co.uk

## File Structure

```
bewdley-bootcamp/
├── index.html              ← Homepage
├── classes.html            ← Classes overview (strength, cardio, mobility)
├── booking.html            ← PTMinder booking iframe + rates sidebar
├── team.html               ← Meet the team (expandable)
├── blog.html               ← Blog index with featured post + grid
├── blog-post.html          ← Blog post template (duplicate for each post)
├── contact.html            ← Contact form + map + details
├── personal-training.html  ← PT page (linked from nav and class cards)
├── css/
│   └── style.css           ← All styles (design tokens at top)
└── js/
    └── main.js             ← Nav, scroll, form, reveal animations
```

## Before Going Live

### 1. PTMinder Booking (booking.html)
Find this comment in `booking.html` and replace the iframe src:
```html
<!-- Replace src with your actual PTMinder embed URL -->
<iframe src="https://app.ptminder.com/booking/bewdleybootcamp" ...>
```
In PTMinder: **Settings → Online Booking → Get Embed Code**

### 2. Contact Form (contact.html)
The form uses Formspree (free tier handles 50 submissions/month).
1. Sign up at https://formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` in the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Alternatively, if deploying on Netlify, swap to Netlify Forms (see comment in contact.html).

### 3. Photos
Replace all `img-placeholder` / `photo-placeholder` divs with real `<img>` tags.
Suggested images to gather:
- Hero background (gym interior or class in action)
- Strength training session
- Cardio conditioning session  
- Mobility/stretching session
- Chris Pinner portrait (3:4 ratio works best)
- Blog post featured images (16:9)

Store in `/images/` folder.

### 4. Google Maps
Replace the placeholder `iframe src` values in `index.html` and `contact.html` with a real Google Maps embed URL for Bewdley Business Park, DY12 2TZ.
Go to: https://maps.google.com → search the address → Share → Embed a map → copy iframe src

### 5. Adding Blog Posts
- Duplicate `blog-post.html`, rename it (e.g. `blog-5-mobility-exercises.html`)
- Update: title, meta description, breadcrumb, post content, author date, tags
- Add it to `blog.html` grid with correct link

### 6. Adding Team Members
In `team.html`, duplicate the `.team-featured` block.
Add `.reverse` class on alternating members to flip the layout.

---

## Deployment: GitHub + Render

Same setup as apps.bewdleybootcamp.co.uk — just a static site repo.

1. Create a new GitHub repo (e.g. `bewdley-bootcamp-site`)
2. Push this folder contents to it
3. In Render: New → Static Site → connect the repo
4. Build command: *(leave blank — it's static)*  
   Publish directory: `.`
5. In your DNS provider (wherever bewdleybootcamp.co.uk is managed):
   - Add a CNAME record pointing `bewdleybootcamp.co.uk` to your Render static site URL
   - Or use Render's custom domain settings to add `bewdleybootcamp.co.uk` directly

---

## Design Tokens (css/style.css)

Edit these CSS variables at the top of `style.css` to change the whole site's palette:

```css
--forest-deep: #1C2B1A;   /* Main dark bg, nav, footer */
--forest-mid:  #2D4A2B;   /* Secondary dark sections */
--moss:        #4A7C59;   /* Accent green */
--amber:       #D4A843;   /* CTA buttons, highlights */
--chalk:       #E8E0D0;   /* Borders, subtle bg */
--off-white:   #F5F2EC;   /* Page background */
```
