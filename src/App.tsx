import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GitFork,
  Globe2,
  ContactRound,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { certificates, profile, projects, skillGroups, type Certificate, type Project } from "./data";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mb-12 grid gap-5 md:grid-cols-[1fr_2fr] md:items-end">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[var(--accent)]">{index}</span>
        <span className="h-px w-8 bg-[var(--accent)]" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">{title}</h2>
    </motion.div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative h-72 overflow-hidden border-b border-[var(--line)] bg-[#0c1116] sm:h-80">
      <div className="absolute inset-0 grid-field opacity-50" />
      <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/65 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.color }} />
        {project.status}
      </div>

      {project.visual === "farm" && (
        <div className="absolute inset-0 flex items-end justify-center gap-4 px-10 pb-0">
          <div className="relative h-[68%] w-[42%] rounded-t-[2rem] border border-white/15 bg-[#161e24] p-4 shadow-2xl">
            <div className="mb-5 flex items-center justify-between"><span className="h-2 w-12 rounded bg-white/20" /><span className="h-5 w-5 rounded-full bg-lime-300/80" /></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 h-20 rounded-xl bg-gradient-to-br from-lime-300/30 to-emerald-700/20 p-3"><div className="mt-7 h-1.5 w-16 rounded bg-lime-200/60" /></div>
              <div className="h-16 rounded-xl bg-white/5 p-2"><div className="h-full rounded-lg bg-cyan-300/20" /></div>
              <div className="h-16 rounded-xl bg-white/5 p-2"><div className="h-full rounded-lg bg-lime-300/15" /></div>
            </div>
          </div>
          <div className="mb-8 h-24 w-24 rounded-[50%] border border-lime-200/20 bg-lime-300/10 shadow-[0_0_60px_rgba(163,230,53,.18)]">
            <div className="m-auto mt-7 h-10 w-10 rounded-full border border-lime-200/40" />
          </div>
        </div>
      )}

      {project.visual === "form" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-64 w-44 rotate-[-5deg] rounded-[2rem] border border-white/15 bg-[#151c22] p-3 shadow-2xl transition-transform duration-500 hover:-translate-y-1">
            <div className="mx-auto mb-5 h-1 w-10 rounded bg-white/15" />
            <div className="rounded-2xl bg-cyan-300/10 p-3"><div className="mb-3 h-2 w-14 rounded bg-cyan-200/70" />{[1, 2, 3].map((item) => <div key={item} className="mb-2 h-7 rounded-lg border border-white/10 bg-black/15" />)}</div>
          </div>
          <div className="absolute right-[14%] top-[24%] h-56 w-40 rotate-[8deg] rounded-[1.8rem] border border-white/10 bg-[#10161b] p-4 shadow-2xl">
            <div className="mb-6 flex items-center gap-2"><span className="h-6 w-6 rounded-lg bg-cyan-300/20" /><span className="h-1.5 w-14 rounded bg-white/25" /></div>
            {["Name", "Category", "Notes"].map((label) => <div key={label} className="mb-4"><div className="mb-1.5 h-1.5 w-8 rounded bg-white/15" /><div className="h-8 rounded-lg border border-white/10" /></div>)}
          </div>
        </div>
      )}

      {project.visual === "bulb" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-40 w-72">
            <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_35px_rgba(244,114,182,.65)]" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((dot) => <span key={dot} className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_16px_white]" style={{ left: `${dot * 14.2}%` }} />)}
          </div>
          <div className="absolute bottom-7 flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
            <Cpu className="h-5 w-5 text-amber-300" /><span className="font-mono text-[10px] text-white/70">ESP32 // ONLINE</span><span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" />
          </div>
        </div>
      )}

      {project.visual === "placeholder" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/10 bg-white/5" style={{ boxShadow: `0 0 60px ${project.color}18` }}>
            <CircleDot className="h-8 w-8" style={{ color: project.color }} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/35">Project in progress</span>
        </div>
      )}
      <div className="preview-scan absolute inset-x-0 bottom-0 h-24 translate-y-full bg-gradient-to-t from-[#0c1116] to-transparent opacity-0 transition duration-500" />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="project-card panel group overflow-hidden rounded-[1.6rem] transition duration-500 hover:-translate-y-1 hover:border-white/25">
      <ProjectVisual project={project} />
      <div className="p-6 sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="font-mono text-[10px]" style={{ color: project.color }}>PROJECT / {project.index}</span>
          <ArrowRight className="h-4 w-4 -translate-x-2 text-[var(--muted)] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-[10px] text-[var(--muted)]">{tag}</span>)}
        </div>
        <a href={project.href} target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3">
          View through MineTree <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

function CertificateModal({ certificate, onClose }: { certificate: Certificate | null; onClose: () => void }) {
  useEffect(() => {
    if (!certificate) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="certificate-title" onMouseDown={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} className="panel relative w-full max-w-xl rounded-[2rem] p-7 shadow-2xl sm:p-10">
            <button onClick={onClose} aria-label="Close certificate details" className="focus-ring absolute right-5 top-5 rounded-full border border-[var(--line)] p-2"><X className="h-4 w-4" /></button>
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl font-mono text-sm font-bold text-[#080b0f]" style={{ backgroundColor: certificate.accent }}>{certificate.initials}</div>
            <span className="eyebrow">Credential details / {certificate.category}</span>
            <h3 id="certificate-title" className="mt-3 pr-8 text-2xl font-semibold leading-tight">{certificate.title}</h3>
            <dl className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {[['Issuing organization', certificate.issuer], ['Date earned', certificate.date], ['Credential ID', certificate.id]].map(([term, value]) => (
                <div key={term} className="grid grid-cols-[130px_1fr] gap-4 py-4 text-sm"><dt className="text-[var(--muted)]">{term}</dt><dd className="font-medium">{value}</dd></div>
              ))}
            </dl>
            <a href={profile.linkHub} target="_blank" rel="noreferrer" className="button-primary mt-8"><CheckCircle2 className="h-4 w-4" /> View verification source</a>
            <p className="mt-4 text-xs leading-5 text-[var(--muted)]">Replace the placeholder metadata and connect the official verification URL before publishing the final credential record.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    setSent(true);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad border-t border-[var(--line)]">
      <div className="page-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="mb-5 flex items-center gap-3"><span className="font-mono text-xs text-[var(--accent)]">05</span><span className="h-px w-8 bg-[var(--accent)]" /><span className="eyebrow">Start a conversation</span></div>
          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Have a bold idea?<br /><span className="text-[var(--muted)]">Let’s make it real.</span></h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[var(--muted)]">Have a mobile product, connected device, or thoughtful digital utility in mind? I’d love to hear about it.</p>
          <a href={profile.email.includes("YOUR_") ? profile.linkHub : `mailto:${profile.email}`} target={profile.email.includes("YOUR_") ? "_blank" : undefined} rel="noreferrer" className="focus-ring mt-9 inline-flex items-center gap-3 font-medium">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)]"><Mail className="h-4 w-4 text-[var(--accent)]" /></span>
            Get in touch directly <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.form variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} onSubmit={submit} className="panel rounded-[2rem] p-6 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-medium text-[var(--muted)]">Name<input required name="name" autoComplete="name" placeholder="Your name" className="focus-ring h-12 rounded-xl border border-[var(--line)] bg-transparent px-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/60" /></label>
            <label className="grid gap-2 text-xs font-medium text-[var(--muted)]">Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className="focus-ring h-12 rounded-xl border border-[var(--line)] bg-transparent px-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/60" /></label>
          </div>
          <label className="mt-5 grid gap-2 text-xs font-medium text-[var(--muted)]">Message<textarea required name="message" rows={6} placeholder="Tell me about your idea..." className="focus-ring resize-none rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/60" /></label>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button type="submit" className="button-primary">{sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}{sent ? "Opening your email app" : "Send message"}</button>
            <p className="text-xs text-[var(--muted)]">Your details stay private.</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [certificateFilter, setCertificateFilter] = useState<"All" | Certificate["category"]>("All");

  useEffect(() => {
    const saved = localStorage.getItem("husaini-theme-v2");
    const shouldUseDark = saved === "dark";
    setDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("husaini-theme-v2", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  const visibleCertificates = certificates.filter((item) => certificateFilter === "All" || item.category === certificateFilter);
  const navItems = ["Work", "Credentials", "Stack", "Contact"];

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--page)] text-[var(--text)] transition-colors duration-300">
      <header className="fixed inset-x-3 top-3 z-50 rounded-full border border-black/5 bg-[#fffdfb]/80 shadow-[0_10px_40px_rgba(66,24,20,.08)] backdrop-blur-xl sm:inset-x-5 sm:top-4">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <a href="#top" className="focus-ring rounded-full text-lg font-medium tracking-[-.04em] text-[#8f0000]" aria-label="Husaini home">husaini</a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring rounded-full px-2 py-1 text-xs font-medium text-[#756c68] transition hover:text-[#8f0000]">{item}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} theme`} className="focus-ring rounded-full p-2.5 text-[#756c68] transition hover:bg-black/5 hover:text-[#8f0000]">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
            <a href="#contact" className="focus-ring hidden rounded-full bg-[#f4a8df] px-5 py-2.5 text-xs font-semibold text-[#3c1230] transition hover:bg-[#ff91d8] sm:block">Contact me</a>
            <button className="focus-ring rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mx-3 mb-3 overflow-hidden rounded-[1.5rem] border border-black/5 bg-[#fffdfb] shadow-xl md:hidden"><div className="grid px-4 py-2">{navItems.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="border-b border-black/5 py-3 text-sm last:border-0">{item}</a>)}</div></motion.nav>}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="editorial-hero relative min-h-[100svh] overflow-hidden pb-10 pt-28 sm:pt-32">
          <div className="pointer-events-none absolute -right-20 -top-16 h-40 w-40 rounded-full bg-[#f5a4e3] sm:h-56 sm:w-56" />
          <div className="page-shell relative">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="hero-word relative z-20 -ml-[1vw] select-none text-[clamp(5.2rem,18.2vw,17.5rem)] font-medium leading-[.72] tracking-[-.085em] text-[#990000]">portfolio</motion.h1>
            <motion.figure initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .08 }} className="editorial-art relative z-10 -mt-[1.5vw] h-[46vh] min-h-[350px] w-full overflow-hidden sm:h-[55vh] sm:min-h-[440px] lg:h-[59vh]">
              <div className="art-cloud art-cloud-one" /><div className="art-cloud art-cloud-two" />
              <div className="art-object"><span className="art-gloss" /><span className="art-dot art-dot-one" /><span className="art-dot art-dot-two" /><span className="art-dot art-dot-three" /></div>
              <div className="art-hand"><span className="nail nail-one" /><span className="nail nail-two" /><span className="nail nail-three" /><span className="nail nail-four" /></div>
              <div className="art-caption">mobile · iot · embedded</div>
            </motion.figure>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .3 }} className="relative z-20 -mt-5 grid items-end gap-8 sm:-mt-8 lg:grid-cols-[.7fr_1fr_auto] lg:gap-12">
              <div><h2 className="text-2xl font-normal tracking-[-.05em] text-[#8f0000] sm:text-3xl">husaini</h2><p className="mt-1 max-w-xs text-[11px] leading-4 text-[#756c68]">Mobile & IoT Developer<br />Android & Embedded Systems Specialist</p></div>
              <div className="max-w-md"><p className="text-sm leading-6 text-[#5f5753]">{profile.bio}</p><div className="mt-4 flex flex-wrap gap-2"><a href="#work" className="editorial-pill">Explore work <ArrowRight className="h-3.5 w-3.5" /></a><a href="#credentials" className="editorial-pill editorial-pill-ghost">Certificates</a><button onClick={() => window.print()} className="editorial-pill editorial-pill-ghost">Resume <Download className="h-3.5 w-3.5" /></button></div></div>
              <div className="flex flex-wrap items-center gap-2 lg:justify-end"><a href={profile.github} target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub"><GitFork className="h-4 w-4" /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn"><ContactRound className="h-4 w-4" /></a><a href={profile.email.includes("YOUR_") ? profile.linkHub : `mailto:${profile.email}`} target="_blank" rel="noreferrer" className="social-pill" aria-label="Email"><Mail className="h-4 w-4" /></a><a href={profile.linkHub} target="_blank" rel="noreferrer" className="social-pill" aria-label="MineTree link hub"><Globe2 className="h-4 w-4" /></a></div>
            </motion.div>
          </div>
          <div className="absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full bg-lime-300/10 blur-[120px]" />
          <div className="hero-legacy page-shell relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.12fr_.88fr] lg:pb-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-[11px] text-[var(--muted)]"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" /></span>Available for meaningful work</div>
              <p className="font-mono text-xs uppercase tracking-[.2em] text-[var(--accent)]">{profile.role}</p>
              <h1 className="mt-5 text-[clamp(3.15rem,8.4vw,6.8rem)] font-semibold leading-[.9] tracking-[-.065em]">Husaini<span className="text-[var(--accent)]">.</span></h1>
              <h2 className="mt-4 max-w-2xl text-xl font-normal leading-snug tracking-tight text-[var(--muted)] sm:text-2xl">Muhammad Husaini Bin<br className="hidden sm:block" /> Mohd Hishamuddin</h2>
              <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">{profile.bio}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className="button-primary">View Projects <ArrowDown className="h-4 w-4" /></a>
                <a href="#credentials" className="button-secondary"><Award className="h-4 w-4" /> Certificates</a>
                <button onClick={() => window.print()} className="button-secondary"><Download className="h-4 w-4" /> Download Resume</button>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-3 text-[var(--muted)]">
                {[
                  { href: profile.github, label: "GitHub", icon: GitFork },
                  { href: profile.linkedin, label: "LinkedIn", icon: ContactRound },
                  { href: profile.email.includes("YOUR_") ? profile.linkHub : `mailto:${profile.email}`, label: "Email", icon: Mail },
                ].map(({ href, label, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="focus-ring rounded-full border border-[var(--line)] p-2.5 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)]"><Icon className="h-4 w-4" /></a>)}
                <a href={profile.linkHub} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-xs font-medium transition hover:border-[var(--accent)]"><Globe2 className="h-3.5 w-3.5" /> MineTree link hub <ExternalLink className="h-3 w-3" /></a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: -1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
              <div className="code-card overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[#0d1217]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" /><span className="h-2.5 w-2.5 rounded-full bg-lime-300/70" /></div><span className="font-mono text-[10px] text-white/35">husaini.profile</span></div>
                <div className="relative p-6 font-mono text-[12px] leading-6 sm:p-8 sm:text-[13px]">
                  <div className="noise pointer-events-none absolute inset-0 opacity-20" />
                  <p><span className="text-violet-300">const</span> <span className="text-cyan-300">developer</span> <span className="text-white/40">=</span> <span className="text-white/40">&#123;</span></p>
                  <p className="pl-5"><span className="text-cyan-300">name</span><span className="text-white/40">:</span> <span className="text-lime-300">"Husaini"</span><span className="text-white/40">,</span></p>
                  <p className="pl-5"><span className="text-cyan-300">focus</span><span className="text-white/40">:</span> <span className="text-lime-300">["Android", "IoT", "Embedded"]</span><span className="text-white/40">,</span></p>
                  <p className="pl-5"><span className="text-cyan-300">approach</span><span className="text-white/40">:</span> <span className="text-lime-300">"useful + thoughtful"</span><span className="text-white/40">,</span></p>
                  <p className="pl-5"><span className="text-cyan-300">status</span><span className="text-white/40">:</span> <span className="text-amber-300">"building"</span></p>
                  <p><span className="text-white/40">&#125;</span> <span className="text-violet-300">as const</span><span className="text-white/40">;</span></p>
                  <div className="mt-8 border-t border-white/10 pt-5"><p className="text-white/30">// Current signal</p><div className="mt-3 flex items-center gap-3"><Zap className="h-4 w-4 text-lime-300" /><div className="flex-1"><div className="mb-2 flex justify-between text-[10px] uppercase tracking-widest text-white/35"><span>Mobile systems</span><span>90%</span></div><div className="h-1 rounded bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ delay: 0.7, duration: 1 }} className="h-full rounded bg-lime-300" /></div></div></div></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-xl sm:flex"><Terminal className="h-5 w-5 text-[var(--accent)]" /><div><div className="text-xs font-semibold">Prototype to product</div><div className="mt-1 text-[10px] text-[var(--muted)]">Mobile × connected hardware</div></div></div>
            </motion.div>
          </div>
          <div className="hero-legacy page-shell flex items-center gap-4 pb-10"><span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">Scroll to explore</span><span className="h-px flex-1 bg-[var(--line)]" /><ArrowDown className="h-3.5 w-3.5 text-[var(--accent)]" /></div>
        </section>

        <section id="work" className="section-pad border-t border-[var(--line)]">
          <div className="page-shell">
            <SectionHeading index="01" eyebrow="Selected work" title="Ideas, connected to the real world." />
            <div className="grid gap-6 lg:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          </div>
        </section>

        <section id="credentials" className="section-pad border-y border-[var(--line)] bg-[var(--surface)]">
          <div className="page-shell">
            <SectionHeading index="02" eyebrow="Credentials" title="Proof of practice, not just promise." />
            <div className="mb-8 flex flex-wrap gap-2">
              {(["All", "Awards", "Credentials"] as const).map((filter) => <button key={filter} onClick={() => setCertificateFilter(filter)} className={`focus-ring rounded-full border px-4 py-2 text-xs font-medium transition ${certificateFilter === filter ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--text)]"}`}>{filter}</button>)}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visibleCertificates.map((certificate, index) => (
                <motion.button layout key={certificate.title} onClick={() => setActiveCertificate(certificate)} className="focus-ring group panel min-h-64 rounded-[1.4rem] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-white/25">
                  <div className="flex items-start justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl font-mono text-[10px] font-black text-[#080b0f]" style={{ backgroundColor: certificate.accent }}>{certificate.initials}</span><span className="font-mono text-[10px] text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</span></div>
                  <span className="eyebrow mt-7 block">{certificate.category}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{certificate.title}</h3>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4"><span className="text-xs text-[var(--muted)]">{certificate.issuer}</span><ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section-pad">
          <div className="page-shell">
            <SectionHeading index="03" eyebrow="Technology" title="A practical toolkit for digital and physical products." />
            <div className="grid overflow-hidden rounded-[1.7rem] border border-[var(--line)] md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <motion.div key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`group p-7 transition hover:bg-[var(--surface)] sm:p-9 ${index < 2 ? "border-b border-[var(--line)]" : ""} ${index % 2 === 0 ? "md:border-r" : ""} ${index === 1 ? "md:border-b" : ""}`}>
                  <div className="flex items-center justify-between"><span className="font-mono text-xs text-[var(--accent)]">{group.number}</span>{[Code2, Cpu, Globe2, Terminal].map((Icon, itemIndex) => itemIndex === index && <Icon key={group.title} className="h-5 w-5 text-[var(--muted)]" />)}</div>
                  <h3 className="mt-7 text-xl font-semibold">{group.title}</h3>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((item) => <span key={item} className="rounded-lg border border-[var(--line)] bg-[var(--page)] px-3 py-2 text-xs text-[var(--muted)] transition group-hover:border-[var(--accent)] group-hover:text-[var(--text)]">{item}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="page-shell flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
          <p className="text-xs text-[var(--muted)]">© {new Date().getFullYear()} Husaini. All systems operational.</p>
          <div className="flex items-center gap-6"><a href="#top" className="focus-ring inline-flex items-center gap-2 rounded text-xs text-[var(--muted)] transition hover:text-[var(--text)]">Back to top <ArrowDown className="h-3.5 w-3.5 rotate-180" /></a><span className="h-4 w-px bg-[var(--line)]" /><p className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">Built by Husaini • Deployed on Vercel</p></div>
        </div>
      </footer>
      <article className="print-resume hidden">
        <header>
          <h1>Husaini — Muhammad Husaini Bin Mohd Hishamuddin</h1>
          <p><strong>Mobile & IoT Developer</strong> · Android & Embedded Systems Specialist</p>
          <p>{profile.bio}</p>
          <p>{profile.linkHub} · {profile.email === "YOUR_EMAIL_ADDRESS" ? profile.linkHub : profile.email}</p>
        </header>
        <section><h2>Technical strengths</h2><p>Kotlin · Jetpack Compose · Android SDK · Architecture Components · ESP32 · Arduino · C/C++ · Microcontrollers · Addressable RGB LED Systems</p></section>
        <section><h2>Web & platform</h2><p>HTML5 · CSS3 · JavaScript · Firebase · Vercel · Git/GitHub · Android Studio · Figma · Linux</p></section>
        <section><h2>Selected projects</h2><p><strong>FarmAssist</strong> — Agricultural smart management and tracking with mobile and IoT. <strong>MineForm</strong> — Dynamic form builder and utility. <strong>Smart Bulb Automation</strong> — ESP32 RGB strip controller with Telegram automation.</p></section>
        <section><h2>Focus</h2><p>Thoughtful native mobile products, useful digital utilities, and connected hardware prototypes.</p></section>
      </article>
      <CertificateModal certificate={activeCertificate} onClose={() => setActiveCertificate(null)} />
    </div>
  );
}
