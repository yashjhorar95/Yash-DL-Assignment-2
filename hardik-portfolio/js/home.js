/* ============================================================
   HOME PAGE JS — index.html
   Handles: typing effect, particle background
   ============================================================ */

/* ---- Typing Effect ---- */
const roles = ['Web Developer', 'Problem Solver', 'CSE Student', 'Future Tech Builder', 'Open-Source Enthusiast'];
const typedEl = document.getElementById('typed-text');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  if (!typedEl) return;
  const word = roles[roleIdx];

  if (!deleting) {
    typedEl.textContent = word.slice(0, ++charIdx);
    if (charIdx === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1800); return;
    }
  } else {
    typedEl.textContent = word.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 60 : 90);
}
typeLoop();

/* ---- Particle Background ---- */
const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W = canvas.width  = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  const NUM = Math.min(Math.floor(W / 12), 100);
  const particles = Array.from({ length: NUM }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.8 + 0.4,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    opacity: Math.random() * 0.5 + 0.2
  }));

  const CONN_DIST = 120;

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    const alpha = isDark() ? 1 : 0.4;

    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,179,237,${p.opacity * alpha})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < CONN_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const lineAlpha = (1 - dist/CONN_DIST) * 0.12 * alpha;
          ctx.strokeStyle = `rgba(99,179,237,${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
}

/* ---- Stats counter animation ---- */
document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  const target = +el.getAttribute('data-target');
  const suffix = el.getAttribute('data-suffix') || '';
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      let count = 0;
      const step = Math.ceil(target / 50);
      const interval = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count + suffix;
        if (count >= target) clearInterval(interval);
      }, 30);
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(el);
});
