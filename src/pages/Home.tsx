import { useState, Fragment, type ReactNode } from "react";
import { Ear, Users, BarChart3, Heart, Menu, X, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ContactDrawer from "@/components/ContactDrawer";
import professionalPhoto from "@/assets/mary-bantug-natural-headshot.png";
import aboutPhoto from "@/assets/mary-kilimanjaro-uhuru-peak.jpg";
import {
  profile, nav, impact, countries, caseStudies, principles, about,
  type CaseStudy,
} from "@/data/site";

/** Renders [bracketed] text as a visible, editable placeholder. */
const T = ({ children }: { children: string }) => {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") ? (
          <span key={i} className="placeholder-text">{p}</span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
};

const icons = { ear: Ear, users: Users, chart: BarChart3, heart: Heart };

const scrollTo = (id: string) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
};

const Section = ({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) => (
  <section id={id} className="scroll-mt-20 py-20 md:py-28 fade-in">
    <div className="mx-auto max-w-6xl px-5 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-accent">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">{title}</h2>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState<CaseStudy | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const go = (id: string) => { setMenuOpen(false); scrollTo(id); };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] btn-primary">Skip to content</a>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-serif text-xl text-primary focus-ring rounded">
            {profile.name}
          </button>
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-8">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={(e) => { e.preventDefault(); go(n.id); }}
                    className="text-[15px] text-foreground/80 hover:text-primary focus-ring rounded">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden focus-ring rounded p-2" aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile" className="md:hidden border-t border-border bg-background">
            <ul className="px-5 py-3">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={(e) => { e.preventDefault(); go(n.id); }}
                    className="block py-3 text-lg focus-ring rounded">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 md:grid-cols-[1.4fr_1fr] md:px-8 md:pt-24 fade-in">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-accent">{profile.name} · {profile.location}</p>
            <h1 className="mt-5 font-serif text-[1.9125rem] leading-tight text-primary md:text-[2.55rem] lg:text-[2.89rem]">{profile.headline}</h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">{profile.subline}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button className="btn-primary" onClick={() => setContactOpen(true)}>Get in touch</button>
            </div>
          </div>
          <img
            src={professionalPhoto}
            alt="Portrait of Mary Bantug"
            className="aspect-[4/5] w-full max-w-sm justify-self-center rounded-2xl object-cover md:-translate-y-[4.625rem]"
          />
        </section>

        {/* IMPACT */}
        <section aria-label="Impact" className="border-y border-border bg-card">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impact.map((s) => (
                <li key={s.label} className="rounded-xl bg-background p-6">
                  <p className="font-serif text-4xl text-primary">{s.value}</p>
                  <p className="mt-2 text-base text-muted-foreground">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHERE I WORK */}
        <Section id="where" eyebrow="Select regions I've worked in" title="Two continents, five countries">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {countries.map((c) => (
              <li key={c.name} className="rounded-xl border border-border bg-card p-5">
                <img src={`https://flagcdn.com/w80/${c.code}.png`} alt="" aria-hidden width={32} height={32}
                  className="h-8 w-8 rounded-full object-cover ring-1 ring-border" loading="lazy" />
                <p className="mt-4 font-serif text-xl text-primary">{c.name}</p>
                <p className="mt-1 text-sm text-muted-foreground"><T>{c.line}</T></p>
              </li>
            ))}
          </ul>
        </Section>

        {/* CASE STUDIES */}
        <Section id="work" eyebrow="Work" title="Selected case studies">
          <ul className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <li key={cs.id}>
                <button onClick={() => setOpen(cs)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-shadow hover:shadow-lg focus-ring">
                  {cs.image && (
                    <img src={cs.image} alt={cs.imageAlt} loading="lazy" width={1536} height={864} className="aspect-[16/9] w-full object-cover" />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm text-secondary-accent"><T>{cs.tag}</T></p>
                    <h3 className="mt-2 font-serif text-2xl text-primary">{cs.title}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{cs.summary}</p>
                    <div className="mt-auto flex items-end justify-between pt-6">
                      <p><span className="font-serif text-3xl text-primary">{cs.keyNumber}</span> <span className="text-muted-foreground">{cs.keyLabel}</span></p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">Read story <ArrowUpRight className="h-4 w-4" aria-hidden /></span>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </Section>

        {/* HOW I WORK */}
        <div className="bg-card border-y border-border">
          <Section id="how-i-work" eyebrow="How I work" title="Principles behind every program">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p) => {
                const Icon = icons[p.icon];
                return (
                  <li key={p.title}>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden /></span>
                    <h3 className="mt-4 font-serif text-xl text-primary">{p.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{p.text}</p>
                  </li>
                );
              })}
            </ul>
          </Section>
        </div>

        {/* ABOUT */}
        <div className="bg-card border-y border-border">
          <Section id="about" eyebrow="About" title="A little about me">
            <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
              <div>
                <img
                  src={aboutPhoto}
                  alt="Mary Bantug holding a Canadian flag at Uhuru Peak on Mount Kilimanjaro"
                  className="aspect-square w-full max-w-xs rounded-2xl object-cover"
                />
                <div className="mt-10">
                  <h3 className="font-serif text-xl text-primary">Education</h3>
                  <ul className="mt-4 space-y-4">
                    {about.education.map((e) => (
                      <li key={e.school}><p className="font-medium">{e.school}</p><p className="text-muted-foreground">{e.credential}</p></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed"><T>{about.story}</T></p>
                <div className="mt-10">
                  <h3 className="font-serif text-xl text-primary">Areas of focus</h3>
                  <ul className="mt-4 space-y-2">
                    {about.focus.map((f) => <li key={f} className="text-muted-foreground">— {f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <h2 className="font-serif text-4xl md:text-5xl">Let's talk.</h2>
            <p className="mt-4 max-w-xl text-lg opacity-90">Open to conversations about partnerships, program leadership, and international education.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-light"><Linkedin className="h-4 w-4" aria-hidden /> LinkedIn</a>
              <button onClick={() => setContactOpen(true)} className="btn-light">
                <MessageSquare className="h-4 w-4" aria-hidden /> Contact form
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 {profile.name}</footer>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-background">
          {open && (
            <>
              <DialogHeader>
                <p className="text-sm text-secondary-accent"><T>{open.tag}</T></p>
                <DialogTitle className="font-serif text-3xl font-normal text-primary">{open.title}</DialogTitle>
                <DialogDescription className="text-base">{open.summary}</DialogDescription>
              </DialogHeader>
              {open.image && <img src={open.image} alt={open.imageAlt} loading="lazy" width={1536} height={864} className="mt-2 aspect-[16/9] w-full rounded-xl object-cover" />}
              <div className="space-y-7 text-base leading-relaxed">
                <div><h3 className="story-h">Context</h3><p><T>{open.context}</T></p></div>
                <div><h3 className="story-h">My Role</h3><p><T>{open.role}</T></p></div>
                <div><h3 className="story-h">Approach</h3><ul className="list-disc space-y-2 pl-5">{open.approach.map((a, i) => <li key={i}><T>{a}</T></li>)}</ul></div>
                <div><h3 className="story-h">Outcomes</h3><ul className="list-disc space-y-2 pl-5">{open.outcomes.map((a, i) => <li key={i}><T>{a}</T></li>)}</ul></div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <ContactDrawer open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Home;
