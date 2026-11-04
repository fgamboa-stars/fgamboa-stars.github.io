/*
  ============================================================
  PORTFOLIO SCRIPT
  ============================================================
  Tracks which slide is in the middle of the screen, then:
    - underlines the matching link in the navigation bar
    - updates the "01 / 04" counter in the footer bar

  This is an extra. If it doesn't load, the page still works.
  ============================================================
*/

const slides = [...document.querySelectorAll('.slide')];
const counter = document.querySelector('.slide-counter');
const navLinks = [...document.querySelectorAll('.nav-links a')];

const pad = (number) => String(number).padStart(2, '0');

function showSlide(slide) {
  counter.textContent = `${pad(slides.indexOf(slide) + 1)} / ${pad(slides.length)}`;

  navLinks.forEach((link) => {
    if (link.hash === `#${slide.id}`) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

// The margins shrink the watched area to a line across the middle of the
// screen, so exactly one slide counts as "current" at a time.
const observer = new IntersectionObserver(
  (entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => showSlide(entry.target));
  },
  { rootMargin: '-50% 0px -50% 0px' }
);

slides.forEach((slide) => observer.observe(slide));
counter.hidden = false;
