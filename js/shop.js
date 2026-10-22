/* Bewdley Bootcamp: shop
   ----------------------------------------------------------------------
   Every product lives in PRODUCTS below. To change the shop, edit this list:

   - New product:   copy a block, give it a new id, add its photo to images/shop/
   - Price change:  change `price` here AND on the matching Stripe payment link
   - Sold out:      set soldOut: true (button greys out, card stays visible)
   - Remove:        delete the block

   `stripe` is the Stripe Payment Link URL (https://buy.stripe.com/...).
   Size and colour are picked on the Stripe checkout page, so the `sizes` and
   `colours` lists here are for display only. Keep them matching the dropdowns
   on the payment link.
   ---------------------------------------------------------------------- */

var PRODUCTS = [
  /* ---------- Bootcamp kit ---------- */
  {
    id: "hoodie",
    category: "kit",
    name: "Bewdley Bootcamp Hoodie",
    price: 30,
    blurb: "Regular fit hoodie with the Bewdley Bootcamp logo. Unisex sizing.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["Black", "Pink", "Purple"],
    image: "images/shop/hoodie.jpg",
    stripe: ""
  },
  {
    id: "sweater",
    category: "kit",
    name: "Classic Logo Sweater",
    price: 28,
    blurb: "Navy sweater with the classic logo. Other colours on request.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["Navy"],
    image: "images/shop/sweater.jpg",
    stripe: ""
  },
  {
    id: "tee-2025",
    category: "kit",
    name: "2025 Bootcamp T-Shirt",
    price: 15,
    blurb: "This year's Bootcamp tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: [],
    image: "images/shop/tee-2025.jpg",
    stripe: ""
  },
  {
    id: "vest-2025",
    category: "kit",
    name: "2025 Bootcamp Ladies Vest",
    price: 20,
    blurb: "This year's Bootcamp vest, ladies fit.",
    sizes: ["S (8/10)", "M (12)", "L (14)", "XL (16)"],
    colours: [],
    image: "images/shop/vest-2025.jpg",
    stripe: ""
  },
  {
    id: "cotton-vest",
    category: "kit",
    name: "Ladies Cotton Workout Vest",
    price: 20,
    blurb: "Soft cotton training vest, ladies fit.",
    sizes: ["XS (8)", "S (10)", "M (12)", "L (14)", "XL (16)"],
    colours: ["Black"],
    image: "images/shop/cotton-vest.jpg",
    stripe: ""
  },
  {
    id: "bobble-hat",
    category: "kit",
    name: "Bobble Hat",
    price: 15,
    blurb: "Soft feel bobble hat for the cold early sessions.",
    sizes: [],
    colours: ["Grey", "Pink"],
    image: "images/shop/bobble-hat.jpg",
    stripe: ""
  },

  /* ---------- Rise Up Run Club ---------- */
  {
    id: "riseup-ladies",
    category: "run",
    name: "Rise Up Run Club T-Shirt (Ladies)",
    price: 25,
    blurb: "Official Rise Up Run Club tee, ladies fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: [],
    image: "images/shop/riseup-ladies.jpg",
    stripe: ""
  },
  {
    id: "riseup-mens",
    category: "run",
    name: "Rise Up Run Club T-Shirt (Men's)",
    price: 25,
    blurb: "Official Rise Up Run Club tee, men's fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: [],
    image: "images/shop/riseup-mens.jpg",
    stripe: ""
  },

  /* ---------- Recovery & nutrition ---------- */
  {
    id: "massage-gun",
    category: "recovery",
    name: "Deep Tissue Massage Gun",
    price: 49.99,
    blurb: "30 speed, reduced noise motor and 6 interchangeable heads. Carry case and UK charger included.",
    sizes: [],
    colours: [],
    image: "images/shop/massage-gun.jpg",
    stripe: ""
  },
  {
    id: "recipe-book",
    category: "recovery",
    name: "Protein Booster Recipe Book",
    price: 10,
    blurb: "30 easy, healthy recipes: breakfast, lunch, dinner, treats and smoothies. Digital copy plus a printed copy to collect.",
    sizes: [],
    colours: [],
    image: "images/shop/recipe-book.jpg",
    stripe: ""
  }
];

(function () {
  "use strict";

  var grid = document.querySelector("#shop-grid");
  if (!grid) return;

  function money(n) {
    return "£" + (n % 1 === 0 ? n.toFixed(0) : n.toFixed(2));
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function card(p) {
    var opts = "";
    if (p.sizes.length) {
      opts += '<div class="shop-opts"><span class="shop-opts-label">Sizes</span>' +
        p.sizes.map(function (s) { return '<span class="shop-chip">' + esc(s) + "</span>"; }).join("") +
        "</div>";
    }
    if (p.colours.length) {
      opts += '<div class="shop-opts"><span class="shop-opts-label">' +
        (p.colours.length > 1 ? "Colours" : "Colour") + "</span>" +
        '<span class="shop-colours">' + p.colours.map(esc).join(" / ") + "</span></div>";
    }

    var btn;
    if (p.soldOut) {
      btn = '<span class="btn shop-btn shop-btn--off" aria-disabled="true">Sold out</span>';
    } else if (p.stripe) {
      btn = '<a class="btn btn-solid shop-btn" href="' + esc(p.stripe) + '" rel="noopener">Buy now</a>';
    } else {
      btn = '<a class="btn btn-ghost shop-btn" href="contact.html">Ask at the gym</a>';
    }

    return '<article class="shop-card reveal" data-cat="' + esc(p.category) + '">' +
      '<div class="shop-media">' +
        '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" ' +
        "onerror=\"this.parentNode.classList.add('shop-media--empty');this.remove()\">" +
        '<span class="shop-media-mark">BEWDLEY <b>BOOTCAMP</b></span>' +
      "</div>" +
      '<div class="shop-body">' +
        '<div class="shop-top"><h3 class="shop-name">' + esc(p.name) + "</h3>" +
        '<span class="shop-price">' + money(p.price) + "</span></div>" +
        '<p class="shop-blurb">' + esc(p.blurb) + "</p>" +
        opts +
        btn +
      "</div>" +
    "</article>";
  }

  grid.innerHTML = PRODUCTS.map(card).join("");

  /* Category filter */
  var filters = document.querySelectorAll(".shop-filter");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      var cat = f.getAttribute("data-cat");
      filters.forEach(function (o) { o.setAttribute("aria-pressed", o === f ? "true" : "false"); });
      grid.querySelectorAll(".shop-card").forEach(function (c) {
        c.hidden = !(cat === "all" || c.getAttribute("data-cat") === cat);
      });
    });
  });

  /* Cards are injected after main.js runs, so reveal them here */
  grid.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });

  /* Back from Stripe: shop.html?order=thanks */
  if (/[?&]order=thanks\b/.test(location.search)) {
    var t = document.querySelector("#shop-thanks");
    if (t) { t.hidden = false; t.focus(); }
  }
})();
