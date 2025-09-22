// Basic interactivity: mobile nav, smooth scroll, active link, contact form faux submission
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('[data-nav]');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    // animate hamburger
    navToggle.classList.toggle('is-open', open);
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 72,
        behavior: 'smooth'
      });
      // close mobile menu
      nav.classList.remove('open');
      navToggle.classList.remove('is-open');
    });
  });

  // Active link on scroll
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const setActive = () => {
    const offset = 90;
    const scrollPos = window.scrollY + offset;
    let currentId = sections[0].id;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + currentId));
  };
  setActive();
  window.addEventListener('scroll', throttle(setActive, 100));

  // Contact form fake submit
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';
    // Simulate network delay
    setTimeout(() => {
      status.textContent = 'Message sent — thank you!';
      form.reset();
    }, 900);
  });
});

// Simple throttle
function throttle(fn, wait){
  let last = 0;
  return function(...args){
    const now = Date.now();
    if (now - last >= wait){
      last = now;
      fn.apply(this, args);
    }
  };
}
