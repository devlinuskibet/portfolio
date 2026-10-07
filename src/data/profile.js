// ============================================================
// CENTRAL PROFILE DATA — edit this file to update the site
// ============================================================

// ── Contact & links ──────────────────────────────────────────
export const CONTACT = {
  name: "Linus Kibet",
  location: "Nairobi, Kenya",
  email: "linzskybes@gmail.com",
  github: "https://github.com/devlinuskibet",
  linkedin: "https://www.linkedin.com/in/linus-kibet-813b78243/",
  portfolio: "https://portfolio-six-flax-30.vercel.app/",
  hashnode: "https://devlinuskibet.hashnode.dev/the-future-of-ai",
  // Left on site as-is — owner should decide whether to keep on a professional portfolio
  twitter: "https://twitter.com/linuskibet",
  instagram: "https://www.instagram.com/i_issme",
};

// ── CV / Resume ───────────────────────────────────────────────
// TODO: Replace with Linus_Kibet_CV.pdf once the owner supplies the file.
// Until then, the existing devlinuskibet.pdf is used.
export const CV_PATH = "/src/Assets/devlinuskibet.pdf";
export const CV_FILENAME = "Linus_Kibet_CV.pdf";

// ── Experience (reverse-chronological) ───────────────────────
export const EXPERIENCE = [
  {
    role: "Mobile Application Development Technical Trainer",
    company: "Murang'a University of Technology",
    location: "Murang'a, Kenya",
    period: "2025 – Present",
    current: true,
    bullets: [
      "Prepare and deliver practical mobile application development sessions for learners.",
      "Demonstrate development tools and technologies and guide students through hands-on work.",
      "Help learners resolve technical problems as they arise during practical sessions.",
      "Prepare instructional materials and demonstrations that explain complex concepts in a clear and practical way.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Venturseed",
    location: "Remote (New York)",
    period: "Apr 2026 – Aug 2026",
    current: false,
    bullets: [
      "Built and maintained React interfaces integrated with REST APIs, applying prompt engineering principles to improve AI-assisted UI generation pipelines.",
      "Built a React Native mobile version of the core web product, extending it from web to mobile for end users.",
      "Reduced page load time by 45% and designed a reusable component library of 30+ components that cut feature development time by an estimated 40%.",
    ],
  },
  {
    // Always call this an Attachment, never an Internship
    role: "IT Support & Application Developer (Attachment)",
    company: "Kenyatta University Teaching, Referral & Research Hospital",
    location: "Nairobi, Kenya",
    period: "Jan 2025 – Sep 2025",
    current: false,
    bullets: [
      "Developed and enhanced internal web applications using PHP and JavaScript, improving operational workflows for clinical and administrative teams.",
      "Provided first-line technical support to clinical and administrative staff and explained solutions in non-technical language.",
      "Logged and tracked support requests through ticketing and carried out IP addressing tasks as part of day-to-day ICT support.",
      "Collaborated with ICT teams to resolve issues and improve operational efficiency through digital solutions.",
    ],
  },
  {
    // Keep the existing mention of Zeraki as written — no extra dates or duties
    role: "Software Engineering Intern",
    company: "Zeraki",
    location: "",
    period: "2024",
    current: false,
    bullets: [],
  },
];

// ── Education ────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Murang'a University of Technology",
    location: "Murang'a, Kenya",
    // No graduation month — unconfirmed
    period: "2022 – 2026",
    honours: "Second Class Honours (Upper Division)",
  },
];

// ── Certifications (newest first) ────────────────────────────
export const CERTIFICATIONS = [
  {
    title: "DevOps Engineering Path (100 Days DevOps Challenge)",
    issuer: "KodeKloud",
    date: "Dec 2025",
  },
  {
    title: "Cisco AI Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "Aug 2025",
  },
  {
    title: "Cisco Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2025",
  },
  {
    title: "Data Analysis with SPSS & STATA",
    issuer: "KESAP Research Centre",
    date: "Oct 2023",
  },
];

// ── Open Source & Community ───────────────────────────────────
export const COMMUNITY = [
  {
    title: "Fedora Project",
    description:
      "Active contributor to the Linux distribution community; maintains packages and community documentation.",
  },
  {
    title: "Avalanche Ecosystem",
    description:
      "Contributor to blockchain infrastructure initiatives; led an outreach programme at Murang'a University of Technology.",
  },
];

// ── Projects (display order) ──────────────────────────────────
export const PROJECTS = [
  {
    title: "LeadForgeAI",
    category: "AI Automation / B2B Outreach",
    featured: true,
    description:
      "An enterprise-grade, autonomous AI-powered B2B prospecting, company discovery and automated email outreach orchestration platform. Automated reliability and telemetry: a GitHub Actions schedule runs 12 times a day (every 2 hours at :17 UTC), validating the full 34-unit test suite and probing production endpoint health. Resilient streak automation: Git rebase concurrency protection and GitHub keepalive automation to prevent dropped runs.",
    tech: ["AI", "Automation", "GitHub Actions", "Testing"],
    // TODO(repo-link): verify additional tech tags from the LeadForgeAI repository
    ghLink: "https://github.com/devlinuskibet/LeadForgeAI",
    demoLink: "https://lead-forge-ai-seven.vercel.app/",
    live: true,
  },
  {
    title: "MamaCare",
    category: "AI-Powered Healthcare",
    featured: false,
    description:
      "A real-time predictive digital triage platform for maternal health emergencies, with a FastAPI backend and a RAG-powered AI assistant. A life-saving intelligent maternal healthcare platform acting as a 24/7 digital nurse for expectant mothers. Addresses the 'Three Delays' in maternal healthcare: identifying danger signs, reaching facilities, and receiving care.",
    tech: ["React.js", "Node.js", "Python", "FastAPI", "RAG", "Geolocation", "Cloud Integration"],
    ghLink: "https://github.com/devlinuskibet/mother",
    demoLink: "https://mother-gules.vercel.app/",
    live: true,
  },
  {
    title: "NumeraAI",
    category: "AI Automation / FinTech",
    featured: false,
    description:
      "A full-stack AI-powered bookkeeping assistant that automates financial record management and lets users query their financial data in natural language using an LLM. Reduced manual bookkeeping workload and significantly improved reporting efficiency through automated workflows.",
    tech: ["Python", "AI APIs", "Automation Workflows", "PostgreSQL", "React.js"],
    // TODO(repo-link): NumeraAI repo URL not found on this machine — linking to profile
    ghLink: "https://github.com/devlinuskibet",
    demoLink: null,
    live: false,
  },
  {
    title: "Customer Intelligence & Engagement System",
    category: "AI Analytics / BI",
    featured: false,
    description:
      "Customer segmentation, churn-risk prediction and personalised recommendation systems for small businesses, built on behavioural and transactional data. Built predictive models for customer segmentation and churn risk identification, driving personalised engagement.",
    tech: ["Python", "Machine Learning", "Data Analytics", "Predictive Modeling", "React.js"],
    // TODO(repo-link): repo URL not found on this machine — linking to profile
    ghLink: "https://github.com/devlinuskibet",
    demoLink: null,
    live: false,
  },
  {
    title: "Murang'a University RAG Chatbot",
    category: "Generative AI / RAG",
    featured: false,
    description:
      "Advanced Retrieval-Augmented Generation chatbot for high-precision academic information retrieval. Implemented vector search architecture with Pinecone, resulting in optimised contextual response generation.",
    tech: ["Python", "Pinecone", "Mistral", "OpenRouter", "n8n"],
    // TODO(repo-link): RAG chatbot repo URL not found on this machine — linking to profile
    ghLink: "https://github.com/devlinuskibet",
    demoLink: null,
    live: false,
  },
  {
    title: "AI Skin Disease Detection",
    category: "Deep Learning / Healthcare",
    featured: false,
    description:
      "CNN-based deep learning system for classifying skin conditions using medical image analysis. Winner of an Inter-University AI Hackathon; provides real-time predictions via a web-based interface.",
    tech: ["Python", "TensorFlow", "CNNs", "Flask", "React.js"],
    // TODO(repo-link): skin detection repo URL not found on this machine — linking to profile
    ghLink: "https://github.com/devlinuskibet",
    demoLink: null,
    live: false,
  },
];

// ── Selected Achievements (Home page) ─────────────────────────
export const ACHIEVEMENTS = [
  {
    title: "LeadForgeAI",
    desc: "Live, autonomous AI B2B prospecting and outreach platform with an automated 34-unit test suite and scheduled production health checks.",
  },
  {
    title: "Winner, Inter-University AI Hackathon",
    desc: "Recognised for innovation in applying AI to solve regional challenges.",
  },
  {
    title: "CNN-based AI Skin Disease Detection",
    desc: "Developed a deep learning system for automated dermatological triage.",
  },
  {
    title: "NumeraAI Bookkeeping Assistant",
    desc: "Built an intelligent assistant for automated financial record management.",
  },
  {
    title: "Murang'a University RAG Chatbot",
    desc: "Architected a knowledge-aware assistant using state-of-the-art RAG patterns.",
  },
];

// ── Writing / Articles ────────────────────────────────────────
export const ARTICLES = [
  {
    // TODO(verify-title): confirm this matches the actual Hashnode article title
    title: "The Future of AI",
    platform: "Hashnode",
    url: "https://devlinuskibet.hashnode.dev/the-future-of-ai",
    description:
      "An exploration of where artificial intelligence is headed and what it means for software engineering and society.",
  },
];
