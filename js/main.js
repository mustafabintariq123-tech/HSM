// HSM Strategic — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  // Header scroll state (only toggles on pages where hero is transparent-over-dark)
  function onScroll() {
    if (!header || header.classList.contains('solid')) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // Scroll reveal — progressive enhancement only. Elements are visible by
  // default (see .reveal in CSS); we opt them into the hidden starting
  // state (.reveal-init) only once we know IntersectionObserver can bring
  // them back, so a slow/broken/disabled script never leaves content stuck
  // invisible.
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    revealEls.forEach(function (el) {
      el.classList.add('reveal-init');
      observer.observe(el);
    });
  }
});
