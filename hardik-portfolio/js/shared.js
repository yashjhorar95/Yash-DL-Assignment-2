/* ============================================================
   SHARED JS — Loaded on every page
   Handles: custom cursor, scroll progress, navbar, theme,
            back-to-top, scroll-reveal, page transitions
   ============================================================ */

/* ---- Custom Cursor ---- */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.transform  = `translate(${mouseX}px, ${mouseY}px)`;
});

// Lag the ring slightly for a nice trailing effect
function animateRing() {
  ringX += (mouseX - ringX) * 0.14;
  ringY += (mouseY - ringY) * 0.14;
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();

// Hover states
document.querySelectorAll('a, button, [role="button"], .glass-card, .skill-card, .project-card, .achievement-card')
  .forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });

/* ---- Scroll Progress Bar ---- */
const progressBar = document.getElementById('scroll-progress');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ---- Navbar active link ---- */
function setActiveLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', href === path);
  });
}
setActiveLink();

/* ---- Hamburger / Mobile Nav ---- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
// Close on link click
mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ---- Theme Toggle ---- */
const themeToggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('hm-theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
updateThemeIcon(saved);

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('hm-theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  if (!themeToggle) return;
  themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

/* ---- Back To Top ---- */
const btt = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  btt?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---- Scroll Reveal ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Also trigger skill bars
      entry.target.querySelectorAll?.('.skill-level-fill').forEach(bar => {
        bar.style.width = bar.parentElement.parentElement.style.getPropertyValue('--skill-w');
      });
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .skill-card').forEach(el => {
  revealObserver.observe(el);
});

/* ---- Page Transition ---- */
const overlay = document.getElementById('page-transition');
// Exit animation on internal link clicks
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) return;
  link.addEventListener('click', e => {
    e.preventDefault();
    if (!overlay) { window.location.href = href; return; }
    overlay.classList.add('enter');
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});
// Entry animation
window.addEventListener('DOMContentLoaded', () => {
  if (!overlay) return;
  overlay.classList.add('exit');
  setTimeout(() => overlay.classList.remove('exit'), 600);
});
