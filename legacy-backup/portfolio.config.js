/**
 * =========================================================================
 * YASH JHORAR — PORTFOLIO CONFIGURATION
 * =========================================================================
 * All personal details, projects, skills, education, journey stages,
 * current focus topics, social links, colors, and section visibility
 * are controlled directly from this single file.
 *
 * To customize your portfolio, simply edit the values below.
 * You do not need to edit any HTML or CSS files.
 * =========================================================================
 */

const PORTFOLIO_CONFIG = {
  // -----------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & BRAND
  // -----------------------------------------------------------------------
  personal: {
    name: "Yash Jhorar",
    roles: ["Student", "Creator", "Technology Enthusiast"],
    tagline: "Student. Creator. Builder.",
    heroIntro: "Passionate about building intelligent digital systems, purposeful products, and exploring the frontiers of technology.",
    location: "India",
    statusBadge: {
      show: true,
      text: "Open for Collaborations & Projects",
      pulsing: true
    },
    ctaButtons: {
      primary: { text: "Explore My Work", href: "#projects" },
      secondary: { text: "Get In Touch", href: "#contact" }
    }
  },

  // -----------------------------------------------------------------------
  // 2. THEME & COLORS (Dark Cinematic Palette)
  // -----------------------------------------------------------------------
  colors: {
    // Canvas & backgrounds
    bgBase: "#05070e",           // Deep midnight black/navy
    bgSecondary: "#090d1a",      // Section contrast tone
    bgCard: "rgba(10, 16, 32, 0.65)", // Frosted glass panel
    bgCardHover: "rgba(15, 24, 48, 0.8)",

    // Accents & glows
    cyanAccent: "#00f0ff",        // Futuristic neon cyan
    blueAccent: "#3b82f6",        // Electric royal blue
    violetAccent: "#8b5cf6",      // Subtle depth violet
    glowCyan: "rgba(0, 240, 255, 0.35)",
    glowBlue: "rgba(59, 130, 246, 0.25)",

    // Text & borders
    textPrimary: "#f8fafc",       // Crisp white heading
    textSecondary: "#94a3b8",     // Sleek muted slate
    textMuted: "#64748b",         // Subtle tertiary text
    borderGlass: "rgba(255, 255, 255, 0.08)",
    borderGlow: "rgba(0, 240, 255, 0.35)"
  },

  // -----------------------------------------------------------------------
  // 3. SECTION VISIBILITY TOGGLES
  // -----------------------------------------------------------------------
  // Toggle any section to false to hide it completely from page and nav
  sections: {
    hero: true,
    about: true,
    skills: true,
    projects: true,
    education: true,
    journey: true,
    currentFocus: true,
    achievements: false, // Hidden by default (no data provided)
    contact: true
  },

  // -----------------------------------------------------------------------
  // 4. ABOUT SECTION
  // -----------------------------------------------------------------------
  about: {
    title: "About Me",
    subtitle: "Student, creator, and technology enthusiast building at the intersection of logic and imagination.",
    bioPlaceholder: "I am Yash Jhorar — a student, creator, and builder driven by curiosity for modern technology. I enjoy deconstructing complex problems, developing streamlined digital products, and building tools that make everyday workflows simpler and smarter.",
    educationHighlight: "Pursuing higher education with a focus on computer science, software design, and modern technology paradigms.",
    interests: [
      { title: "Artificial Intelligence", desc: "Autonomous workflows & smart assistants", icon: "fa-robot" },
      { title: "Product Architecture", desc: "End-to-end digital solutions & systems", icon: "fa-cubes" },
      { title: "Creative Technology", desc: "Crafting intuitive & high-performance UI", icon: "fa-wand-magic-sparkles" },
      { title: "Entrepreneurship", desc: "Launching purposeful initiatives & ventures", icon: "fa-rocket" }
    ],
    goals: [
      "Engineer intuitive, autonomous software that automates mundane work",
      "Launch and scale modern digital commerce and consumer platforms",
      "Continuously master frontier technologies through hands-on building"
    ]
  },

  // -----------------------------------------------------------------------
  // 5. SKILLS SECTION (Only skills you provide; fully customizable)
  // -----------------------------------------------------------------------
  skills: {
    title: "Skills & Toolkit",
    subtitle: "Technologies, frameworks, and disciplines I leverage to create.",
    categories: [
      {
        id: "development",
        name: "Software & Web Development",
        icon: "fa-code",
        items: [
          { name: "Frontend Architecture", tag: "Core" },
          { name: "JavaScript / Modern Web", tag: "Core" },
          { name: "Python Scripting", tag: "Building" },
          { name: "REST APIs & Integrations", tag: "Building" },
          { name: "Responsive UI Systems", tag: "Core" }
        ]
      },
      {
        id: "ai-automation",
        name: "AI & Automation",
        icon: "fa-microchip",
        items: [
          { name: "AI Assistant Systems", tag: "Active" },
          { name: "Workflow Automation", tag: "Building" },
          { name: "Prompt Engineering", tag: "Practical" },
          { name: "LLM Orchestration", tag: "Exploring" }
        ]
      },
      {
        id: "product-initiative",
        name: "Product & Digital Operations",
        icon: "fa-layer-group",
        items: [
          { name: "E-Commerce Strategy", tag: "Applied" },
          { name: "Service Initiative Ops", tag: "Applied" },
          { name: "Brand Identity Design", tag: "Creative" },
          { name: "User Experience Design", tag: "Craft" }
        ]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 6. PROJECTS SECTION (STRONGEST SECTION)
  // -----------------------------------------------------------------------
  // Only the exact projects provided: Happy, Offcult, Nova.
  // Descriptions are left as placeholders for you to fill in.
  projects: {
    title: "Featured Projects",
    subtitle: "A selected portfolio of autonomous assistants, e-commerce, and business initiatives.",
    items: [
      {
        id: "happy",
        name: "Happy",
        category: "AI & Automation",
        tagline: "an AI assistant that does my work",
        descriptionPlaceholder: "Add your detailed description of Happy here. Share the core problem it solves, the intelligence pipeline, and how it automates your tasks.",
        tech: ["AI Assistant", "Automation", "Python", "Workflow Engine"],
        metrics: "Autonomous Worker",
        links: {
          github: "https://github.com/yourusername/happy", // Placeholder
          live: "https://happy.example.com"                // Placeholder
        },
        badge: "AI Assistant",
        accent: "cyan"
      },
      {
        id: "offcult",
        name: "Offcult",
        category: "E-Commerce & Fashion",
        tagline: "an online clothing store",
        descriptionPlaceholder: "Add your detailed description of Offcult here. Explain your collection concepts, e-commerce storefront, user experience, and vision.",
        tech: ["E-Commerce", "Web Store", "Brand Design", "Catalog & Checkout"],
        metrics: "Online Brand",
        links: {
          github: "https://github.com/yourusername/offcult", // Placeholder
          live: "https://offcult.example.com"                // Placeholder
        },
        badge: "E-Commerce",
        accent: "blue"
      },
      {
        id: "nova",
        name: "Nova",
        category: "Business & Initiative",
        tagline: "my own salon initiative",
        descriptionPlaceholder: "Add your detailed description of Nova here. Outline your salon initiative's vision, operations, customer service touchpoints, and digital booking.",
        tech: ["Venture Operations", "Service Initiative", "Client Experience", "Digital Presence"],
        metrics: "Salon Initiative",
        links: {
          github: "", // Optional, left blank if not code-based
          live: "https://nova.example.com"                   // Placeholder
        },
        badge: "Initiative",
        accent: "purple"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 7. EDUCATION SECTION (Customizable Entries)
  // -----------------------------------------------------------------------
  education: {
    title: "Education",
    subtitle: "Academic journey and foundation in technology and engineering.",
    entries: [
      {
        degree: "Undergraduate Program / Degree",
        institution: "Your Institution / University Name",
        years: "202X — 202X",
        descriptionPlaceholder: "Add details about your coursework, specialization, major modules, or academic achievements here.",
        tags: ["Computer Science", "Technology", "Engineering"]
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 8. JOURNEY SECTION (Learn → Explore → Build → Improve)
  // -----------------------------------------------------------------------
  journey: {
    title: "The Journey",
    subtitle: "A four-phase progression shaping my philosophy and craftsmanship.",
    stages: [
      {
        phase: "01",
        name: "Learn",
        label: "Foundation",
        description: "Mastering fundamental principles of computing, programming syntax, computational thinking, and software design fundamentals.",
        icon: "fa-book-open"
      },
      {
        phase: "02",
        name: "Explore",
        label: "Curiosity",
        description: "Venturing into modern domains — from generative artificial intelligence and neural workflows to modern web architecture.",
        icon: "fa-compass"
      },
      {
        phase: "03",
        name: "Build",
        label: "Creation",
        description: "Transforming insights into tangible products and real initiatives like Happy, Offcult, and Nova. Shipping functional systems.",
        icon: "fa-hammer"
      },
      {
        phase: "04",
        name: "Improve",
        label: "Iteration",
        description: "Continuously refining performance, aesthetics, user experience, and scalability through deliberate practice and feedback.",
        icon: "fa-chart-line"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 9. CURRENT FOCUS SECTION (Show only topics you select)
  // -----------------------------------------------------------------------
  currentFocus: {
    title: "Current Focus",
    subtitle: "Key areas commanding my curiosity, late-night experiments, and deep work.",
    statusNote: "Active Experiments & Research",
    topics: [
      {
        title: "Autonomous AI Assistants",
        summary: "Developing intelligent workflow agents that execute tasks autonomously, inspired by the vision behind Happy.",
        tag: "Artificial Intelligence",
        icon: "fa-robot"
      },
      {
        title: "Modern E-Commerce Experiences",
        summary: "Designing engaging digital shopping touchpoints and brand narratives for Offcult.",
        tag: "Digital Commerce",
        icon: "fa-bag-shopping"
      },
      {
        title: "Venture & Service Operations",
        summary: "Structuring sustainable operations, customer experience, and digital systems for Nova.",
        tag: "Entrepreneurship",
        icon: "fa-store"
      },
      {
        title: "Next-Gen Web Engineering",
        summary: "Mastering responsive, lightweight, accessible web interfaces with cinematic aesthetics.",
        tag: "Engineering",
        icon: "fa-laptop-code"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 10. ACHIEVEMENTS (Hidden by default; can toggle or use placeholder)
  // -----------------------------------------------------------------------
  achievements: {
    title: "Achievements & Milestones",
    subtitle: "Recognitions, awards, and milestones earned along the way.",
    placeholderText: "Add your achievements here (certifications, competitions, honors).",
    items: [] // Empty as no achievements were provided
  },

  // -----------------------------------------------------------------------
  // 11. CONTACT SECTION
  // -----------------------------------------------------------------------
  // Note: All URLs are placeholders as instructed. Never invent real URLs.
  contact: {
    heading: "Let's Build Something.",
    subtitle: "Whether you have an idea, a project to collaborate on, or simply want to talk technology — feel free to connect.",
    emailPlaceholder: "your-email@example.com",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/yourusername",
        handle: "@yourusername",
        icon: "fa-brands fa-github",
        description: "Code repositories & experiments"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        handle: "Yash Jhorar",
        icon: "fa-brands fa-linkedin-in",
        description: "Professional network & updates"
      },
      {
        name: "Instagram",
        url: "https://instagram.com/yourusername",
        handle: "@yourusername",
        icon: "fa-brands fa-instagram",
        description: "Creative visuals & moments"
      },
      {
        name: "Email",
        url: "mailto:your-email@example.com",
        handle: "your-email@example.com",
        icon: "fa-solid fa-envelope",
        description: "Direct correspondence"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 12. FOOTER & METADATA
  // -----------------------------------------------------------------------
  footer: {
    copyrightYear: 2026,
    credit: "Built with precision for Yash Jhorar",
    tagline: "Student. Creator. Builder."
  }
};

// Export for browser global context
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
