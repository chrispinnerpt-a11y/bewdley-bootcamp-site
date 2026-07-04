/* Bewdley Bootcamp — shared behaviour */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Contact form (Formspree) */
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = document.querySelector("#form-status");
      var btn = form.querySelector("button[type=submit]");
      var action = form.getAttribute("action") || "";

      if (action.indexOf("YOUR_FORM_ID") !== -1) {
        status.textContent =
          "The contact form isn't connected yet — please email chrispinner.pt@gmail.com or call 07817 299336.";
        status.className = "form-status err";
        return;
      }

      btn.disabled = true;
      status.textContent = "Sending…";
      status.className = "form-status";

      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            status.textContent = "Thanks — your message is on its way. We'll get back to you within one working day.";
            status.className = "form-status ok";
          } else {
            throw new Error("send failed");
          }
        })
        .catch(function () {
          status.textContent =
            "Something went wrong sending your message. Please email chrispinner.pt@gmail.com or call 07817 299336 instead.";
          status.className = "form-status err";
        })
        .then(function () { btn.disabled = false; });
    });
  }
})();
