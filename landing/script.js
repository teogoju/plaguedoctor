// Header scroll state + progress bar
const header = document.getElementById('header');
const progressBar = document.getElementById('progressBar');

function onScroll() {
  const scrollTop = window.scrollY;
  header.classList.toggle('scrolled', scrollTop > 10);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('open');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  revealObserver.observe(el);
});

// Contact form (front-end only — no backend wired up)
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Спасибо! Заявка отправлена. Отвечу в течение рабочего дня.';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
