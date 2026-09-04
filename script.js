const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

menuButton.addEventListener('click', () => {
  const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(willOpen));
  navigation.classList.toggle('is-open', willOpen);
  document.body.classList.toggle('menu-open', willOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 80);
}, { passive: true });

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const desktopBreakpoint = window.matchMedia('(min-width: 48rem)');
desktopBreakpoint.addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const revealElements = document.querySelectorAll('.manifesto, .pillars, .routine, .memory, .memory-copy, .memory-grid, .pillar-list li, .routine-sequence article');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

if (!prefersReducedMotion.matches) {
  revealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 600ms ease, transform 600ms ease';
    revealObserver.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.querySelector('.hero picture img') || document.querySelector('.hero > img');
  if (heroImg) {
    heroImg.style.willChange = 'transform';
  }
});

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking && !prefersReducedMotion.matches) {
    ticking = true;
    requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const heroImg = document.querySelector('.hero picture img') || document.querySelector('.hero > img');
      if (heroImg && scrolled < window.innerHeight) {
        const translateY = scrolled * 0.15;
        heroImg.style.transform = `translateY(${translateY}px) scale(1)`;
      }
      ticking = false;
    });
  }
}, { passive: true });
