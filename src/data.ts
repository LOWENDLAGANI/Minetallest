export const profile = {
  fullName: "Muhammad Husaini Bin Mohd Hishamuddin",
  preferredName: "Husaini",
  role: "Mobile & IoT Developer | Android & Embedded Systems Specialist",
  bio: "Building native Android apps, smart IoT automation prototypes, and scalable digital utilities.",
  linkHub: "https://minetree.vercel.app",
  // Replace this placeholder with Husaini's verified primary email address.
  email: "YOUR_EMAIL_ADDRESS",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com",
};

export type Project = {
  index: string;
  title: string;
  summary: string;
  tags: string[];
  color: string;
  status: string;
  visual: "farm" | "form" | "bulb" | "placeholder";
  href: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "FarmAssist",
    summary: "Agricultural smart management and tracking solution combining an intuitive mobile interface with connected field intelligence.",
    tags: ["Kotlin", "IoT", "Android"],
    color: "#a3e635",
    status: "Featured build",
    visual: "farm",
    href: profile.linkHub,
  },
  {
    index: "02",
    title: "MineForm",
    summary: "A flexible dynamic form builder that turns repeatable data collection into focused, useful mobile workflows.",
    tags: ["Android", "Firebase", "Kotlin"],
    color: "#67e8f9",
    status: "Featured build",
    visual: "form",
    href: profile.linkHub,
  },
  {
    index: "03",
    title: "Smart Bulb Automation",
    summary: "ESP32-powered RGB strip control with connected device logic and Telegram Bot API automation.",
    tags: ["ESP32", "C/C++", "Telegram API"],
    color: "#f59e0b",
    status: "IoT prototype",
    visual: "bulb",
    href: profile.linkHub,
  },
  {
    index: "04",
    title: "FarmAssist Ads",
    summary: "A planned companion experience for relevant, useful agricultural content and app discovery.",
    tags: ["Android", "Utility", "Planned"],
    color: "#fb7185",
    status: "In development",
    visual: "placeholder",
    href: profile.linkHub,
  },
  {
    index: "05",
    title: "Minefiy",
    summary: "An upcoming lightweight utility concept designed to simplify everyday digital tasks.",
    tags: ["Kotlin", "Jetpack", "Concept"],
    color: "#c084fc",
    status: "Concept",
    visual: "placeholder",
    href: profile.linkHub,
  },
  {
    index: "06",
    title: "Minecom",
    summary: "A planned communication-focused utility for clearer, faster everyday interactions.",
    tags: ["Mobile", "Realtime", "Planned"],
    color: "#f472b6",
    status: "In development",
    visual: "placeholder",
    href: profile.linkHub,
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  id: string;
  category: "Awards" | "Credentials";
  accent: string;
  initials: string;
};

export const certificates: Certificate[] = [
  { title: "International Teaching & Learning Invention Innovation — Silver Award", issuer: "ITLII Competition", date: "Date to confirm", id: "Credential ID pending", category: "Awards", accent: "#a3e635", initials: "ITLII" },
  { title: "Microsoft Minecraft Education Competition — Winner", issuer: "Microsoft in Education", date: "Date to confirm", id: "Credential ID pending", category: "Awards", accent: "#67e8f9", initials: "M" },
  { title: "Minecraft Education Competition — Winner", issuer: "School Technology Program", date: "Date to confirm", id: "Credential ID pending", category: "Awards", accent: "#f59e0b", initials: "MC" },
  { title: "Google Technology Credential", issuer: "Google", date: "Date to confirm", id: "Credential ID pending", category: "Credentials", accent: "#facc15", initials: "G" },
  { title: "Microsoft Technology Credential", issuer: "Microsoft", date: "Date to confirm", id: "Credential ID pending", category: "Credentials", accent: "#67e8f9", initials: "MS" },
  { title: "Coursera Online Course Certificate", issuer: "Coursera", date: "Date to confirm", id: "Credential ID pending", category: "Credentials", accent: "#a78bfa", initials: "C" },
];

export const skillGroups = [
  { number: "01", title: "Mobile Development", items: ["Kotlin", "Jetpack Compose", "Android SDK", "Architecture Components"] },
  { number: "02", title: "Hardware & IoT", items: ["ESP32", "Arduino", "C / C++", "Microcontrollers", "Addressable RGB LEDs"] },
  { number: "03", title: "Web & Backend", items: ["HTML5", "CSS3", "JavaScript", "Firebase", "Vercel"] },
  { number: "04", title: "Developer Tools", items: ["Git / GitHub", "Android Studio", "Linux", "Figma", "Dual-boot workflow"] },
];
