/**
 * ============================================================================
 * === CONFIG (put this at the very top of the code; every detail on the site must come from here) ===
 * ============================================================================
 */
export const SITE = {
  name: "Yash Jhorar",
  roles: ["Web Developer", "Design Creator", "AI Builder", "Future Software Engineer"],
  university: "JECRC University, Jaipur",
  degree: "BTech Computer Science Engineering (Core), 1st Year",
  location: "Jaipur, Rajasthan, India",
  email: "yourname@email.com",            // TODO replace
  phone: "+91-XXXXXXXXXX",                // TODO replace
  linkedin: "https://linkedin.com/in/your-handle",   // TODO replace
  github: "https://github.com/your-username",        // TODO replace
  instagram: "https://instagram.com/your-handle",    // TODO replace
  resume: "#",                            // TODO replace
  projects: [
    { id: "nova",    name: "Nova",    link: "https://nova.vercel.app" },     // TODO replace
    { id: "happy",   name: "Happy",   link: "https://happy.vercel.app" },    // TODO replace
    { id: "offcult", name: "Offcult", link: "https://lovable.dev/preview/eNqBgHG4nkydWEb8c4C0CNy83d2eLVPU" }
  ]
};

/**
 * Rule: if a link/contact value still contains "TODO"-style placeholder text or is "#",
 * hide that button or show it as "Coming soon" instead of linking to a broken page.
 */
export function isPlaceholderLink(val?: string | null): boolean {
  if (!val) return true;
  const trimmed = val.trim();
  if (trimmed === "#" || trimmed === "" || trimmed === "javascript:void(0)") return true;
  return /TODO|yourname|your-handle|your-username|XXXXXXXXXX|example\.com/i.test(trimmed);
}

// ============================================================================
// EXTENDED METADATA & SECTION DETAILS (Synchronized with SITE)
// ============================================================================

export const PORTFOLIO_DATA = {
  tagline: "I build things people actually use: websites, AI, and ideas.",
  shortBio: "I'm Yash Jhorar, a first-year BTech CSE (Core) student at JECRC University, Jaipur. I'm a web developer and design creator. I fell in love with coding the moment I started, and my mind just \"works\" with it. I started as a total beginner, I'm learning C right now, and my goal is to master C++ and then go deep into web development and AI. I like turning ideas into real products: websites, brands, and my own AI assistant.",
  
  // Navigation Links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "All Sites", href: "#sites" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],

  // Section 2: About Stats Strip
  stats: [
    { label: "Projects Built", value: "3", suffix: "+", sub: "Nova, Happy, Offcult" },
    { label: "Academic Level", value: "1st", suffix: " Year", sub: "BTech CSE (Core)" },
    { label: "Core Journey", value: "C → C++", suffix: "", sub: "Foundational mastery" },
    { label: "Builder Drive", value: "∞", suffix: "", sub: "Relentless curiosity" },
  ],

  // Section 2: 4 Quick-Fact Cards
  quickFacts: [
    {
      id: "fact-1",
      icon: "Code2",
      title: "Loves building from scratch",
      description: "Turns clean blank canvases into living, responsive web platforms and intuitive user experiences.",
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "#06b6d4"
    },
    {
      id: "fact-2",
      icon: "Rocket",
      title: "Beginner who ships real projects",
      description: "Doesn't stay stuck in tutorial loops; builds real products, platforms, and AI assistants that solve actual problems.",
      color: "from-purple-500/20 to-fuchsia-500/10",
      accent: "#a855f7"
    },
    {
      id: "fact-3",
      icon: "Sparkles",
      title: "Design + code together",
      description: "Blends futuristic cyber aesthetics, glassmorphism, and micro-interactions with clean, scalable logic.",
      color: "from-pink-500/20 to-rose-500/10",
      accent: "#ec4899"
    },
    {
      id: "fact-4",
      icon: "Zap",
      title: "Always learning & leveling up",
      description: "Currently mastering procedural C and memory models, with sights set firmly on C++, systems, and applied AI.",
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "#10b981"
    }
  ],

  // Section 3: Education
  education: {
    institution: "JECRC University, Jaipur",
    degree: "BTech Computer Science Engineering (Core)",
    currentYear: "1st Year (Class of 2029)",
    statusBadge: "Currently Learning: C → C++",
    overview: "Building rock-solid computational foundations in core computer science, discrete math, and systems architecture while actively participating in collegiate tech clubs and makerspace engineering.",
    highlights: [
      "Rigorous core curriculum in computing structures and low-level algorithms",
      "Active explorer at the JECRC Makerspace engineering hardware-software prototypes",
      "Pitching and developing real-world product ideas like Nova & Happy in university initiatives"
    ]
  },

  // Section 4: Skills & Progress
  skills: [
    {
      category: "Web Development",
      tags: ["HTML5", "CSS3 / Tailwind", "JavaScript (ES6+)", "Responsive Design", "DOM Manipulation"],
      level: 88,
      icon: "Globe",
      description: "Crafting fast, modern, and accessible single-page web experiences with glassmorphism and reactive layouts.",
      accent: "#06b6d4"
    },
    {
      category: "UI/UX & Brand Design",
      tags: ["Design Systems", "Glassmorphism", "Micro-Interactions", "Typography", "Figma to Code"],
      level: 90,
      icon: "Palette",
      description: "Designing high-contrast dark cyberpunk themes, futuristic palettes, and seamless conversion journeys.",
      accent: "#a855f7"
    },
    {
      category: "AI Assistants & Chatbots",
      tags: ["Python", "Botpress AI", "Voice Pipelines", "Automated Workflows", "Knowledge Retrieval"],
      level: 82,
      icon: "Bot",
      description: "Developing intelligent assistant agents with voice recognition and citation-backed knowledge bases.",
      accent: "#ec4899"
    },
    {
      category: "Programming: C & C++",
      tags: ["C (Learning)", "C++ (Mastery Goal)", "Pointers & Memory", "Algorithms", "Data Structures"],
      level: 78,
      icon: "Cpu",
      description: "Deepening algorithmic intuition and memory management, bridging high-level web tech with raw system performance.",
      accent: "#10b981"
    },
    {
      category: "Developer Tools & Ecosystem",
      tags: ["GitHub / Git", "Vercel", "Antigravity", "Lovable", "VS Code"],
      level: 85,
      icon: "Terminal",
      description: "Streamlined CI/CD deployment pipelines, modern AI-accelerated workflows, and rapid iteration environments.",
      accent: "#f59e0b"
    }
  ],

  // Currently learning ticker tags
  learningTicker: [
    "Pointers & Memory Management in C",
    "Object-Oriented Programming in C++",
    "Botpress Autonomous Workflows",
    "Arduino Robotics & Sensor Interfaces",
    "Modern React & Component State",
    "Tailwind CSS Utility Architecture",
    "Low-Latency Speech Recognition with Python",
    "Full-Stack Web Deployments on Vercel"
  ],

  // Section 5: Detailed Project Showcases
  detailedProjects: [
    {
      id: "nova",
      name: "NOVA",
      subtitle: "My Own Salon Initiative",
      badge: "In Progress",
      tags: ["Web", "Startup", "UI/UX", "Marketplace"],
      accentColor: "#a855f7",
      gradient: "from-purple-600/30 via-indigo-600/20 to-transparent",
      shortSummary: "A modern salon platform idea: city-wise salon listings, price comparison, vacancy/availability check, and salon logins so salons can manage their own profile. Born from a startup-class pitch.",
      origin: "Conceived during a competitive startup pitch class at JECRC University, solving real salon wait-times and opaque pricing.",
      problem: "Customers waste hours waiting in salon lines without upfront pricing or real-time chair availability, while local salon owners lack affordable digital booking infrastructure.",
      solution: "A unified platform connecting customers to local salons with transparent service pricing, instant chair vacancy checks, and self-serve management portals for salon owners.",
      keyFeatures: [
        "City-wise salon directory with geo-filtering and curated ratings",
        "Transparent price comparisons across cuts, coloring, and styling",
        "Live vacancy & stylist availability checker to eliminate wait-times",
        "Dedicated salon owner login portal to manage menus, pricing, and bookings"
      ],
      techStack: ["HTML5", "CSS3 / Tailwind", "JavaScript", "Responsive UI", "Vercel"],
      roadmap: "Expanding merchant portal mockups and testing geolocation search with local Jaipur salon partners."
    },
    {
      id: "happy",
      name: "HAPPY",
      subtitle: "Personal AI Assistant & Robotics Vision",
      badge: "Growing",
      tags: ["Python", "AI", "Botpress", "Voice", "Arduino"],
      accentColor: "#06b6d4",
      gradient: "from-cyan-600/30 via-blue-600/20 to-transparent",
      shortSummary: "My own AI assistant that does tasks and work for me. Includes a Python voice assistant and a Botpress chatbot that takes tasks and answers with sources. Long-term vision: put Happy inside a movable Arduino robot built at the JECRC makerspace.",
      origin: "Built to automate daily developer routines, desktop tasks, and research queries, with a bold vision to bring software into the physical world.",
      problem: "Standard desktop assistants lack customized automation routines, while learning AI feels incomplete without bridging intelligence to hardware.",
      solution: "A dual-tier AI system: a local Python voice engine for hands-free computer control, coupled with a Botpress agent that pulls verified knowledge with citations.",
      keyFeatures: [
        "Hands-free Python speech recognition and real-time audio synthesis",
        "Botpress chatbot workflow capable of executing research tasks with citations",
        "Autonomous routine execution for developers (browsing, summaries, reminders)",
        "Hardware Roadmap: housing Happy inside a movable Arduino robot chassis built at JECRC makerspace"
      ],
      techStack: ["Python", "SpeechRecognition", "Botpress", "Arduino", "C / C++"],
      roadmap: "Prototyping chassis motor controllers and ultrasonic distance sensors at the university makerspace."
    },
    {
      id: "offcult",
      name: "OFFCULT",
      subtitle: "Global Street-Fashion Marketplace",
      badge: "Live Prototype",
      tags: ["Lovable", "E-commerce", "Web", "Street Fashion"],
      accentColor: "#ec4899",
      gradient: "from-pink-600/30 via-rose-600/20 to-transparent",
      shortSummary: "An online clothing store that brings street vendors from across the world onto one platform, giving street fashion a global stage.",
      origin: "Inspired by the vibrant, untapped creativity of local street vendors whose unique streetwear never reaches global buyers.",
      problem: "Independent street fashion vendors and indie apparel makers possess incredible aesthetics but lack access to global e-commerce channels and high-converting storefronts.",
      solution: "A borderless digital boutique where street fashion creators showcase limited drops, tell their origin stories, and sell directly to an international audience.",
      keyFeatures: [
        "Vendor-first digital storefronts empowering indie fashion artisans",
        "Aesthetic lookbook UI with high-definition product visualizers",
        "Curated street apparel collections spanning graphic tees, hoodies, and accessories",
        "Streamlined catalog browsing with responsive mobile checkout flow"
      ],
      techStack: ["Lovable AI", "React", "Tailwind CSS", "JavaScript", "E-commerce UI"],
      roadmap: "Live interactive Lovable preview deployed; onboarding street vendors and refining drop logistics."
    }
  ],

  // Section 6: All My Sites In One Place Grid
  allSites: [
    {
      id: "nova",
      name: "Nova",
      roleBadge: "Startup Initiative",
      oneLiner: "A smart salon discovery and booking platform.",
      detailedDesc: "Empowering everyday users to find verified salons, compare transparent service prices, check live stylist availability, and book appointments without waiting.",
      configKey: "nova",
      accent: "#a855f7",
      colorGradient: "from-purple-900/50 via-purple-600/20 to-slate-900",
      icon: "Scissors"
    },
    {
      id: "happy",
      name: "Happy",
      roleBadge: "AI & Hardware",
      oneLiner: "My personal AI assistant that gets tasks done through chat and voice.",
      detailedDesc: "A multi-modal AI companion combining Python voice commands and Botpress cited research, destined to power an Arduino-driven movable robot companion.",
      configKey: "happy",
      accent: "#06b6d4",
      colorGradient: "from-cyan-900/50 via-cyan-600/20 to-slate-900",
      icon: "Bot"
    },
    {
      id: "offcult",
      name: "Offcult",
      roleBadge: "E-Commerce",
      oneLiner: "A global street-fashion marketplace for street vendors.",
      detailedDesc: "Bridging local streetwear culture to an international stage, uniting indie street vendors with fashion enthusiasts seeking authentic, unique apparel.",
      configKey: "offcult",
      accent: "#ec4899",
      colorGradient: "from-pink-900/50 via-pink-600/20 to-slate-900",
      icon: "ShoppingBag"
    },
    {
      id: "portfolio",
      name: "Portfolio",
      roleBadge: "Digital Base",
      oneLiner: "This site, my home base.",
      detailedDesc: "The single-page nexus showcasing my evolving developer journey, design experiments, live applications, and technical milestones as I grow in CSE.",
      configKey: null,
      customLink: "#hero",
      accent: "#10b981",
      colorGradient: "from-emerald-900/50 via-teal-600/20 to-slate-900",
      icon: "Sparkles"
    }
  ],

  // Section 7: My Journey Timeline & Next Goals
  journeyMilestones: [
    {
      step: "01",
      title: "Started BTech CSE @ JECRC",
      subtitle: "The Beginning",
      desc: "Stepped onto campus at JECRC University, Jaipur, enrolled in core Computer Science Engineering, ready to explore computers from the metal up.",
      accent: "#06b6d4",
      icon: "GraduationCap"
    },
    {
      step: "02",
      title: "Discovered the Spark of Coding",
      subtitle: "The Click",
      desc: "Wrote my very first lines of code and realized my mind naturally thinks in algorithms and structure. Total beginner turned obsessive builder.",
      accent: "#a855f7",
      icon: "Heart"
    },
    {
      step: "03",
      title: "Learned C Fundamentals",
      subtitle: "Low-Level Foundations",
      desc: "Mastered variables, loops, control structures, pointers, and memory layout in C, laying an uncompromising foundation for computer architecture.",
      accent: "#ec4899",
      icon: "Cpu"
    },
    {
      step: "04",
      title: "Started C++ & OOP",
      subtitle: "Leveling Up",
      desc: "Stepping from procedural C into C++, data structures, object-oriented paradigms, and high-performance problem solving.",
      accent: "#38bdf8",
      icon: "Terminal"
    },
    {
      step: "05",
      title: "Built Nova, Happy & Offcult",
      subtitle: "Shipping Real Ideas",
      desc: "Turned pitches and ideas into living digital products: a salon booking startup, an AI voice/chat assistant, and a global streetwear marketplace.",
      accent: "#f59e0b",
      icon: "Rocket"
    },
    {
      step: "06",
      title: "Launched This Portfolio",
      subtitle: "Digital Headquarters",
      desc: "Crafted this dark, futuristic showcase to document my work, share my vision, and connect with fellow developers, mentors, and collaborators.",
      accent: "#10b981",
      icon: "Globe"
    }
  ],

  nextGoals: [
    { title: "Master C++ & Data Structures", detail: "Deep dive into STL, memory management, and competitive algorithmic mastery." },
    { title: "Go Deeper into Web & AI", detail: "Master full-stack frameworks, modern vector databases, and neural agent pipelines." },
    { title: "Land Engineering Internships", detail: "Apply foundational and product skills to real-world software engineering teams." },
    { title: "Earn Useful Certifications", detail: "Complete industry credentials in cloud architecture and core algorithms." },
    { title: "Build the Happy Arduino Robot", detail: "Bring Happy to physical life using 3D prints, servos, and Arduino at JECRC makerspace." }
  ]
};
