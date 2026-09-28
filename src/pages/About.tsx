import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import ScrollRevealText from "@/components/ScrollRevealText";
import { contactEmail } from "@/data/projects";
import { Mail, MapPin, Instagram, Linkedin, Download, Quote, Play } from "lucide-react";

const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionHeading = ({ index, title }: { index: string; title: string }) => (
  <div className="mb-10 md:mb-14">
    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
      {index}
    </p>
    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">{title}</h2>
  </div>
);

// PLACEHOLDER — replace with Mary's confirmed figures
const metrics = [
  { value: "15+", label: "years in international education and workforce development" },
  { value: "2", label: "countries of long-term field delivery — Tanzania and Kenya" },
  { value: "4 yrs", label: "leading a donor-funded program from proposal to close-out" },
  { value: "2", label: "Folk Development Colleges strengthened as delivery partners" },
];

const practiceAreas = [
  {
    title: "TVET Systems & Curriculum Reform",
    body: "Competency-based curriculum design, labour-market alignment, and industry linkages that turn classroom training into real employment pathways.",
  },
  {
    title: "Gender Equality & Social Inclusion",
    body: "Gender audits, safeguarding, and practical barrier removal — childcare access, safe learning spaces, and recruitment into non-traditional trades.",
  },
  {
    title: "Institutional & Instructor Capacity",
    body: "Master-trainer coaching, pedagogical upskilling, and college management systems that partners continue to run after a program closes.",
  },
  {
    title: "Program Lifecycle Advisory",
    body: "Technical proposal design, results-based management, monitoring frameworks, and sustainability planning through close-out.",
  },
];

// PLACEHOLDER — swap in Mary's own field photos from the public folder
const fieldPhotos = [
  { src: "/TZ_Header.JPG", caption: "Skills training session, Morogoro region, Tanzania" },
  { src: "/TZ_Opportunities.jpeg", caption: "Community consultation with women entrepreneurs" },
  { src: "/TZ_Approach.jpeg", caption: "Instructor coaching at a Folk Development College" },
];

// PLACEHOLDER — replace with real, attributable testimonials
const testimonials = [
  {
    quote:
      "Mary brought the technical depth to move our curriculum from theory into workshops that employers actually recognise.",
    name: "College Principal",
    role: "Folk Development College, Tanzania — placeholder attribution",
  },
  {
    quote:
      "She built gender inclusion into the design of the program rather than reporting on it afterwards.",
    name: "Program Partner",
    role: "Ministry counterpart — placeholder attribution",
  },
];

// PLACEHOLDER — add YouTube or Vimeo embed URLs when ready
const videos: { title: string; embedUrl: string }[] = [];

const credentials = [
  { label: "Education", items: ["Master's degree — add program and institution"] },
  { label: "Certifications", items: ["Results-Based Management", "Gender Analysis / GESI", "Project Management"] },
  { label: "Languages", items: ["English", "Add additional working languages"] },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background page-transition">

        {/* 01 — Hero statement */}
        <section className="min-h-[60vh] flex flex-col justify-center px-6 pt-32 pb-16">
          <div className="max-w-[95%]">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Mary Bantug — Technical Specialist
            </p>
            <ScrollRevealText
              text="Technical specialist in TVET reform, gender mainstreaming, and institutional capacity building — designing skills systems that partners keep running long after the program closes."
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-serif"
            />
          </div>
        </section>

        {/* 02 — Impact metrics */}
        <section className="px-6 py-16 border-t border-border">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <p className="font-serif text-4xl md:text-5xl mb-3">{m.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 03 — Practice narrative */}
        <section className="px-6 py-24 border-t border-border">
          <SectionHeading index="01 — Practice" title="Field-grounded technical leadership" />
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
            <Reveal>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                My work begins where policy meets the workshop floor. Strong strategies fail when instructors
                lack materials, when colleges have no path to local employers, or when the women a program is
                designed for cannot reach the classroom. I work inside institutions to close those gaps.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Gender equity is built into design, not reported on afterwards. That means childcare access,
                safe learning environments, targeted recruitment into non-traditional trades, and management
                structures that hold once external funding ends.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 04 — Areas of practice */}
        <section className="px-6 py-24 border-t border-border">
          <SectionHeading index="02 — Expertise" title="Areas of technical practice" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl">
            {practiceAreas.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <h3 className="font-serif text-xl md:text-2xl mb-3">{a.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 05 — From the field */}
        <section className="px-6 py-24 border-t border-border">
          <SectionHeading index="03 — From the field" title="Photographs and footage" />
          <div className="grid md:grid-cols-3 gap-6">
            {fieldPhotos.map((p, i) => (
              <Reveal key={p.src} delay={i * 100}>
                <figure className="project-card">
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <figcaption className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {p.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            {videos.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((v) => (
                  <Reveal key={v.embedUrl}>
                    <div className="aspect-video w-full border border-border">
                      <iframe
                        src={v.embedUrl}
                        title={v.title}
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">{v.title}</p>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="border border-dashed border-border aspect-video max-w-2xl flex flex-col items-center justify-center gap-3 text-muted-foreground">
                  <Play size={28} strokeWidth={1} />
                  <p className="text-sm">Video space reserved — share a YouTube or Vimeo link to fill it</p>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* 06 — Testimonials */}
        <section className="px-6 py-24 border-t border-border">
          <SectionHeading index="04 — Perspectives" title="What partners say" />
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <Quote size={24} strokeWidth={1} className="text-muted-foreground mb-4" />
                <blockquote className="font-serif text-xl md:text-2xl leading-snug mb-5">
                  {t.quote}
                </blockquote>
                <p className="text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 07 — Credentials */}
        <section className="px-6 py-24 border-t border-border">
          <SectionHeading index="05 — Credentials" title="Education, certification, languages" />
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl">
            {credentials.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
                  {c.label}
                </h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <a
              href="/Mary-Bantug-CV.pdf"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <Download size={16} />
              Download executive CV
            </a>
          </Reveal>
        </section>

        {/* 08 — Contact */}
        <section id="contact" className="px-6 py-24 border-t border-border">
          <SectionHeading index="06 — Contact" title="Get in touch" />
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
            <Reveal>
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm hover:opacity-70 transition-opacity flex items-center gap-2 mb-3"
              >
                <Mail size={14} />
                {contactEmail}
              </a>
              <p className="text-sm flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} />
                Toronto, Canada — available for international assignments
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
};

export default About;
