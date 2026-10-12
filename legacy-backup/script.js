/**
 * =========================================================================
 * YASH JHORAR — CINEMATIC PORTFOLIO JAVASCRIPT ENGINE
 * Handles: Config hydration, 3D card tilt, canvas mesh, sticky nav,
 * scrollspy, mobile menu drawer, clipboard toast, and accessibility.
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check if configuration exists
  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    console.error("Portfolio configuration (portfolio.config.js) not found.");
    return;
  }

  // --- 1. INJECT THEME VARIABLES FROM CONFIG ---
  injectThemeVariables(config.colors);

  // --- 2. HYDRATE DOM CONTENT FROM CONFIG ---
  hydratePersonalAndHero(config.personal);
  hydrateAbout(config.about);
  hydrateSkills(config.skills);
  hydrateProjects(config.projects);
  hydrateEducation(config.education);
  hydrateJourney(config.journey);
  hydrateCurrentFocus(config.currentFocus);
  hydrateAchievements(config.achievements, config.sections.achievements);
  hydrateContact(config.contact);
  hydrateFooter(config.footer, config.personal);

  // --- 3. APPLY SECTION VISIBILITY TOGGLES ---
  applySectionVisibility(config.sections);

  // --- 4. CORE INTERACTIVE MODULES ---
  initStickyNavAndScrollProgress();
  initMobileDrawer();
  initScrollspy();
  initProjectCardTilt();
  initAmbientCanvas();
  initDesktopCursorGlow();
  initEmailClipboard(config.contact.emailPlaceholder);
  initBackToTop();
});

/**
 * Injects color palette from config into CSS custom properties
 */
function injectThemeVariables(colors) {
  if (!colors) return;
  const root = document.documentElement;
  if (colors.bgBase) root.style.setProperty("--bg-base", colors.bgBase);
  if (colors.bgSecondary) root.style.setProperty("--bg-secondary", colors.bgSecondary);
  if (colors.bgCard) root.style.setProperty("--bg-card", colors.bgCard);
  if (colors.bgCardHover) root.style.setProperty("--bg-card-hover", colors.bgCardHover);
  if (colors.cyanAccent) root.style.setProperty("--cyan-accent", colors.cyanAccent);
  if (colors.blueAccent) root.style.setProperty("--blue-accent", colors.blueAccent);
  if (colors.violetAccent) root.style.setProperty("--violet-accent", colors.violetAccent);
  if (colors.textPrimary) root.style.setProperty("--text-primary", colors.textPrimary);
  if (colors.textSecondary) root.style.setProperty("--text-secondary", colors.textSecondary);
  if (colors.glowCyan) root.style.setProperty("--glow-cyan", colors.glowCyan);
}

/**
 * Hydrates Hero section and brand elements
 */
function hydratePersonalAndHero(personal) {
  if (!personal) return;

  // Nav brand
  const brandName = document.getElementById("nav-brand-name");
  if (brandName) brandName.textContent = personal.name;

  // Hero Status
  const statusPill = document.getElementById("hero-status-pill");
  const statusText = document.getElementById("hero-status-text");
  if (personal.statusBadge && personal.statusBadge.show) {
    if (statusText) statusText.textContent = personal.statusBadge.text;
  } else if (statusPill) {
    statusPill.style.display = "none";
  }

  // Hero Name & Tagline
  const heroName = document.getElementById("hero-name");
  if (heroName) {
    heroName.innerHTML = `<span class="text-gradient">${escapeHtml(personal.name)}</span>`;
  }

  const heroTagline = document.getElementById("hero-tagline");
  if (heroTagline) heroTagline.textContent = personal.tagline;

  // Hero Intro
  const heroIntro = document.getElementById("hero-intro");
  if (heroIntro) heroIntro.textContent = personal.heroIntro;

  // Hero CTAs
  const ctaPrimary = document.getElementById("hero-cta-primary");
  const ctaSecondary = document.getElementById("hero-cta-secondary");
  if (personal.ctaButtons) {
    if (ctaPrimary && personal.ctaButtons.primary) {
      ctaPrimary.querySelector("span").textContent = personal.ctaButtons.primary.text;
      ctaPrimary.setAttribute("href", personal.ctaButtons.primary.href);
    }
    if (ctaSecondary && personal.ctaButtons.secondary) {
      ctaSecondary.querySelector("span").textContent = personal.ctaButtons.secondary.text;
      ctaSecondary.setAttribute("href", personal.ctaButtons.secondary.href);
    }
  }
}

/**
 * Hydrates About section (bio, education highlight, interests, goals)
 */
function hydrateAbout(about) {
  if (!about) return;

  const aboutTitle = document.getElementById("about-title");
  if (aboutTitle && about.title) aboutTitle.textContent = about.title;

  const aboutSubtitle = document.getElementById("about-subtitle");
  if (aboutSubtitle && about.subtitle) aboutSubtitle.textContent = about.subtitle;

  const aboutBio = document.getElementById("about-bio-text");
  if (aboutBio && about.bioPlaceholder) aboutBio.textContent = about.bioPlaceholder;

  const aboutEdu = document.getElementById("about-edu-text");
  if (aboutEdu && about.educationHighlight) aboutEdu.textContent = about.educationHighlight;

  // Interests Grid
  const interestsContainer = document.getElementById("about-interests-container");
  if (interestsContainer && Array.isArray(about.interests)) {
    interestsContainer.innerHTML = about.interests.map(item => `
      <div class="interest-item">
        <i class="fa-solid ${escapeHtml(item.icon || 'fa-sparkles')} interest-icon"></i>
        <span class="interest-title">${escapeHtml(item.title)}</span>
        <span class="interest-desc">${escapeHtml(item.desc || '')}</span>
      </div>
    `).join("");
  }

  // Goals List
  const goalsContainer = document.getElementById("about-goals-container");
  if (goalsContainer && Array.isArray(about.goals)) {
    goalsContainer.innerHTML = about.goals.map(goal => `
      <li class="goal-item">
        <span class="goal-bullet" aria-hidden="true"><i class="fa-solid fa-check"></i></span>
        <span>${escapeHtml(goal)}</span>
      </li>
    `).join("");
  }
}

/**
 * Hydrates Skills section (Categories and specific items only)
 */
function hydrateSkills(skills) {
  if (!skills) return;

  const titleEl = document.getElementById("skills-title");
  if (titleEl && skills.title) titleEl.textContent = skills.title;

  const subtitleEl = document.getElementById("skills-subtitle");
  if (subtitleEl && skills.subtitle) subtitleEl.textContent = skills.subtitle;

  const container = document.getElementById("skills-grid-container");
  if (!container || !Array.isArray(skills.categories)) return;

  container.innerHTML = skills.categories.map(cat => `
    <div class="skill-category-card glass-panel" data-category="${escapeHtml(cat.id || '')}">
      <div class="category-card-header">
        <div class="category-icon-box">
          <i class="fa-solid ${escapeHtml(cat.icon || 'fa-code')}"></i>
        </div>
        <h3 class="category-name">${escapeHtml(cat.name)}</h3>
      </div>
      <div class="skills-list">
        ${cat.items.map(skill => `
          <div class="skill-pill">
            <span class="skill-name">${escapeHtml(skill.name)}</span>
            ${skill.tag ? `<span class="skill-level-tag">${escapeHtml(skill.tag)}</span>` : ''}
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/**
 * Hydrates Projects section (STRONGEST SECTION)
 * Displays Happy, Offcult, Nova with exact summaries and placeholder descriptions.
 */
function hydrateProjects(projects) {
  if (!projects) return;

  const titleEl = document.getElementById("projects-title");
  if (titleEl && projects.title) titleEl.textContent = projects.title;

  const subtitleEl = document.getElementById("projects-subtitle");
  if (subtitleEl && projects.subtitle) subtitleEl.textContent = projects.subtitle;

  const container = document.getElementById("projects-container");
  if (!container || !Array.isArray(projects.items)) return;

  container.innerHTML = projects.items.map(proj => {
    const hasGithub = proj.links && proj.links.github && proj.links.github.trim() !== "";
    const hasLive = proj.links && proj.links.live && proj.links.live.trim() !== "";

    return `
      <article class="project-card-3d" data-accent="${escapeHtml(proj.accent || 'cyan')}" id="project-${escapeHtml(proj.id)}">
        <div class="project-card-top">
          <div class="project-meta-bar">
            <span class="project-badge-tag">${escapeHtml(proj.badge || proj.category)}</span>
            <div class="project-status-dot">
              <span class="dot" aria-hidden="true"></span>
              <span>${escapeHtml(proj.metrics || 'Active Project')}</span>
            </div>
          </div>

          <h3 class="project-name">
            <span>${escapeHtml(proj.name)}</span>
          </h3>
          <p class="project-category-label">${escapeHtml(proj.category)}</p>

          <p class="project-tagline">"${escapeHtml(proj.tagline)}"</p>

          <p class="project-desc-placeholder">
            ${escapeHtml(proj.descriptionPlaceholder || 'Add your project description here.')}
          </p>

          ${Array.isArray(proj.tech) && proj.tech.length > 0 ? `
            <div class="project-tech-stack" aria-label="Technologies used">
              ${proj.tech.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}
            </div>
          ` : ''}
        </div>

        <div class="project-card-bottom">
          ${hasGithub ? `
            <a href="${escapeHtml(proj.links.github)}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="View repository for ${escapeHtml(proj.name)}">
              <i class="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
          ` : `
            <span class="project-action-link disabled" title="Private or operational initiative">
              <i class="fa-solid fa-lock"></i>
              <span>Initiative</span>
            </span>
          `}

          ${hasLive ? `
            <a href="${escapeHtml(proj.links.live)}" target="_blank" rel="noopener noreferrer" class="project-action-link primary-action" title="Open live project for ${escapeHtml(proj.name)}">
              <span>Explore</span>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          ` : `
            <span class="project-action-link disabled">
              <span>Preview</span>
            </span>
          `}
        </div>
      </article>
    `;
  }).join("");
}

/**
 * Hydrates Education section
 */
function hydrateEducation(education) {
  if (!education) return;

  const titleEl = document.getElementById("education-title");
  if (titleEl && education.title) titleEl.textContent = education.title;

  const subtitleEl = document.getElementById("education-subtitle");
  if (subtitleEl && education.subtitle) subtitleEl.textContent = education.subtitle;

  const container = document.getElementById("education-container");
  if (!container || !Array.isArray(education.entries)) return;

  container.innerHTML = education.entries.map(entry => `
    <div class="edu-entry-card glass-panel">
      <div class="edu-top-row">
        <div>
          <h3 class="edu-degree-title">${escapeHtml(entry.degree)}</h3>
          <p class="edu-institution">${escapeHtml(entry.institution)}</p>
        </div>
        <span class="edu-years-badge">${escapeHtml(entry.years)}</span>
      </div>

      <p class="edu-desc-placeholder">
        ${escapeHtml(entry.descriptionPlaceholder || 'Add your educational notes and highlights here.')}
      </p>

      ${Array.isArray(entry.tags) && entry.tags.length > 0 ? `
        <div class="edu-tags-row">
          ${entry.tags.map(t => `<span class="edu-tag-pill">${escapeHtml(t)}</span>`).join("")}
        </div>
      ` : ''}
    </div>
  `).join("");
}

/**
 * Hydrates Journey section (Learn → Explore → Build → Improve)
 */
function hydrateJourney(journey) {
  if (!journey) return;

  const titleEl = document.getElementById("journey-title");
  if (titleEl && journey.title) titleEl.textContent = journey.title;

  const subtitleEl = document.getElementById("journey-subtitle");
  if (subtitleEl && journey.subtitle) subtitleEl.textContent = journey.subtitle;

  const container = document.getElementById("journey-stages-container");
  if (!container || !Array.isArray(journey.stages)) return;

  container.innerHTML = journey.stages.map(stage => `
    <div class="journey-stage-card glass-panel">
      <div class="stage-step-row">
        <span class="stage-phase-badge">${escapeHtml(stage.phase)}</span>
        <i class="fa-solid ${escapeHtml(stage.icon || 'fa-arrow-trend-up')} stage-icon"></i>
      </div>
      <h3 class="stage-name">${escapeHtml(stage.name)}</h3>
      <span class="stage-label-tag">${escapeHtml(stage.label || '')}</span>
      <p class="stage-description">${escapeHtml(stage.description)}</p>
    </div>
  `).join("");
}

/**
 * Hydrates Current Focus section
 */
function hydrateCurrentFocus(focus) {
  if (!focus) return;

  const titleEl = document.getElementById("focus-title");
  if (titleEl && focus.title) titleEl.textContent = focus.title;

  const subtitleEl = document.getElementById("focus-subtitle");
  if (subtitleEl && focus.subtitle) subtitleEl.textContent = focus.subtitle;

  const container = document.getElementById("focus-grid-container");
  if (!container || !Array.isArray(focus.topics)) return;

  container.innerHTML = focus.topics.map(topic => `
    <div class="focus-card glass-panel">
      <div class="focus-icon-box">
        <i class="fa-solid ${escapeHtml(topic.icon || 'fa-crosshairs')}"></i>
      </div>
      <div class="focus-body">
        <span class="focus-tag">${escapeHtml(topic.tag || 'Focus Area')}</span>
        <h3 class="focus-title">${escapeHtml(topic.title)}</h3>
        <p class="focus-summary">${escapeHtml(topic.summary)}</p>
      </div>
    </div>
  `).join("");
}

/**
 * Hydrates Achievements (hidden if not enabled or empty)
 */
function hydrateAchievements(achievements, isEnabled) {
  const section = document.getElementById("achievements");
  if (!section) return;

  if (!isEnabled) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");
  const container = document.getElementById("achievements-container");
  if (!container) return;

  if (!achievements.items || achievements.items.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <i class="fa-solid fa-award empty-state-icon"></i>
        <h3 class="empty-state-title">Achievements Placeholder</h3>
        <p class="empty-state-text">${escapeHtml(achievements.placeholderText || 'Add your achievements and recognitions in portfolio.config.js.')}</p>
      </div>
    `;
  }
}

/**
 * Hydrates Contact section (Strict placeholders only, no invented links)
 */
function hydrateContact(contact) {
  if (!contact) return;

  const heading = document.getElementById("contact-heading");
  if (heading && contact.heading) heading.textContent = contact.heading;

  const subtitle = document.getElementById("contact-subtitle");
  if (subtitle && contact.subtitle) subtitle.textContent = contact.subtitle;

  const emailVal = document.getElementById("contact-email-val");
  if (emailVal && contact.emailPlaceholder) emailVal.textContent = contact.emailPlaceholder;

  const socialsContainer = document.getElementById("contact-socials-container");
  if (socialsContainer && Array.isArray(contact.socials)) {
    socialsContainer.innerHTML = contact.socials.map(soc => `
      <a href="${escapeHtml(soc.url)}" target="_blank" rel="noopener noreferrer" class="social-card" title="${escapeHtml(soc.name)} Profile">
        <div class="social-card-icon">
          <i class="${escapeHtml(soc.icon)}"></i>
        </div>
        <span class="social-card-name">${escapeHtml(soc.name)}</span>
        <span class="social-card-handle">${escapeHtml(soc.handle || '')}</span>
      </a>
    `).join("");
  }
}

/**
 * Hydrates Footer
 */
function hydrateFooter(footer, personal) {
  if (!footer) return;

  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = footer.copyrightYear || new Date().getFullYear();

  const creditEl = document.getElementById("footer-credit");
  if (creditEl && footer.credit) creditEl.textContent = footer.credit;

  const taglineEl = document.getElementById("footer-tagline");
  if (taglineEl && footer.tagline) taglineEl.textContent = footer.tagline;
}

/**
 * Handles section toggling & hides navigation links for disabled sections
 */
function applySectionVisibility(sections) {
  if (!sections) return;

  const navMap = {
    hero: "hero",
    about: "about",
    skills: "skills",
    projects: "projects",
    education: "education",
    journey: "journey",
    currentFocus: "current-focus",
    achievements: "achievements",
    contact: "contact"
  };

  Object.entries(sections).forEach(([key, isVisible]) => {
    const sectionId = navMap[key] || key;
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      if (!isVisible) {
        sectionEl.classList.add("hidden");
      } else {
        sectionEl.classList.remove("hidden");
      }
    }

    // Hide or show nav links
    const desktopNavLink = document.querySelector(`.nav-link[data-nav="${key}"]`);
    if (desktopNavLink) {
      desktopNavLink.parentElement.style.display = isVisible ? "block" : "none";
    }

    const mobileNavLink = document.querySelector(`.mobile-nav-link[data-nav="${key}"]`);
    if (mobileNavLink) {
      mobileNavLink.parentElement.style.display = isVisible ? "block" : "none";
    }
  });
}

/**
 * Sticky Navbar styling on scroll + Scroll progress bar calculation
 */
function initStickyNavAndScrollProgress() {
  const navbar = document.getElementById("navbar");
  const progressBar = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Sticky navbar glass style
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Scroll progress bar
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

/**
 * Mobile Drawer Menu Open/Close & Keyboard Accessibility
 */
function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !drawer.classList.contains("open");
    drawer.classList.toggle("open", isOpen);
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    drawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  toggleBtn.addEventListener("click", () => toggleMenu());

  // Close when tapping any nav link
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      toggleMenu(true);
    }
  });
}

/**
 * Scrollspy with IntersectionObserver to highlight current active section
 */
function initScrollspy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute("id");

        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${activeId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        mobileLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${activeId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * 3D Tilt Engine for Project Cards (Strongest Section)
 * Features dynamic perspective tilt and specular light tracking
 */
function initProjectCardTilt() {
  // Disable 3D tilt on touch devices or if user prefers reduced motion
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (isTouch || prefersReducedMotion) return;

  const cards = document.querySelectorAll(".project-card-3d");

  cards.forEach(card => {
    let bounds;

    function onMouseEnter() {
      bounds = card.getBoundingClientRect();
    }

    function onMouseMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();

      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;

      // Moderate, cinematic tilt angles (max +/- 7 degrees)
      const rotateX = ((mouseY - centerY) / centerY) * -6.5;
      const rotateY = ((mouseX - centerX) / centerX) * 6.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.setProperty("--mouse-x", `${mouseX}px`);
      card.style.setProperty("--mouse-y", `${mouseY}px`);
    }

    function onMouseLeave() {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
  });
}

/**
 * Lightweight Ambient Particle Canvas Background
 * High performance, 60fps, automatically pauses when out of view
 */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 20 : 42; // Low count for optimal performance
  let animId = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", debounce(resize, 200), { passive: true });

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = -Math.random() * 0.45 - 0.1;
      this.radius = Math.random() * 1.5 + 0.8;
      this.alpha = Math.random() * 0.4 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  // Initialize particle pool
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connected subtle constellation lines for nearby nodes
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.update();
      p1.draw();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          const lineAlpha = (1 - dist / 110) * 0.12;
          ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(render);
  }

  // Pause when tab is inactive to preserve CPU / battery
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (animId) cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(render);
    }
  });

  animId = requestAnimationFrame(render);
}

/**
 * Desktop Subtle Spotlight Glow following mouse
 */
function initDesktopCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) {
    glow.style.display = "none";
    return;
  }

  window.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}

/**
 * Email 1-Click Clipboard Copy with Feedback Toast
 */
function initEmailClipboard(email) {
  const btn = document.getElementById("copy-email-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const textToCopy = email || "your-email@example.com";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Email address copied to clipboard!");
        feedbackButton(btn);
      }).catch(() => {
        fallbackCopy(textToCopy, btn);
      });
    } else {
      fallbackCopy(textToCopy, btn);
    }
  });
}

function feedbackButton(btn) {
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>Copied!</span>`;
  btn.style.background = "#10b981";
  btn.style.borderColor = "#10b981";

  setTimeout(() => {
    btn.innerHTML = originalHtml;
    btn.style.background = "";
    btn.style.borderColor = "";
  }, 2200);
}

function fallbackCopy(text, btn) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  try {
    document.execCommand("copy");
    showToast("Email address copied to clipboard!");
    feedbackButton(btn);
  } catch (err) {
    showToast("Could not copy automatically. Email: " + text);
  }
  document.body.removeChild(input);
}

/**
 * Toast Notification System
 */
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px) scale(0.95)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/**
 * Smooth Back to Top Button
 */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * Utility: HTML Escaper to prevent XSS
 */
function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Utility: Debounce function for resize events
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
