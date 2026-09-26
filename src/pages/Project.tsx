import { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProjectById, projects, services, contactEmail } from "@/data/projects";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import { Check, ArrowDown, ArrowLeft, ArrowRight, Quote } from "lucide-react";

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
    <h2 className="font-serif text-headline">{title}</h2>
  </div>
);

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <main className="min-h-screen bg-background">
          <Navbar />
          <div className="pt-40 pb-24 px-6 text-center">
            <h1 className="text-headline mb-4">Project not found</h1>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </main>
        <FloatingNav />
      </>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const related = project.relatedIds
    .map((rid) => projects.find((p) => p.id === rid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const galleryImages = project.images.slice(3);

  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        {/* ============ 1. HERO ============ */}
        <section className="relative h-[80vh] md:h-[92vh] overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-24 md:pb-28">
            <div className="max-w-5xl text-white fade-in-up">
              <p className="text-xs uppercase tracking-widest mb-4 opacity-90">
                {project.location} &nbsp;|&nbsp; {project.year} &nbsp;|&nbsp; {project.type}
              </p>
              <h1 className="font-serif text-display mb-5">{project.title}</h1>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl opacity-90 mb-6">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs rounded-full border border-white/40 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
            <ArrowDown size={18} />
          </div>
        </section>

        {/* ============ 2. PROJECT OVERVIEW ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <SectionHeading index="01 — Overview" title="Project Overview" />
            </Reveal>
            <div className="md:col-span-8">
              <Reveal>
                <p className="text-lg leading-relaxed text-foreground/90 mb-10">
                  {project.overview}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8">
                  {[
                    ["Organization", project.client || "Independent initiative"],
                    ["Location", project.location],
                    ["Timeframe", project.timeframe],
                    ["Focus Area", project.focusArea],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        {label}
                      </dt>
                      <dd className="text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 3. EXPERTISE DEMONSTRATED ============ */}
        <section className="py-20 md:py-28 px-6 border-t border-border">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="02 — Capabilities" title="Expertise Demonstrated" />
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-3">
                {project.expertise.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    <Check size={14} className="shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ 4. THE OPPORTUNITY ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="03 — Context" title="The Opportunity" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <Reveal>
                <p className="text-lg leading-relaxed text-foreground/90">
                  {project.opportunity}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={project.images[1]}
                    alt={`${project.title} — context`}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 5. THE APPROACH ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="04 — Method" title="The Approach" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <Reveal className="order-2 md:order-1">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={project.images[2]}
                    alt={`${project.title} — approach`}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={100} className="order-1 md:order-2">
                <p className="text-lg leading-relaxed text-foreground/90">
                  {project.approach}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ 6. THE WORK IN THE FIELD ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="05 — Delivery" title="The Work in the Field" />
            </Reveal>
            <div>
              {project.work.map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="group flex gap-6 md:gap-10 items-baseline border-t border-border py-6 md:py-8 last:border-b">
                    <span className="font-serif text-2xl md:text-3xl text-muted-foreground w-12 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base md:text-lg leading-relaxed group-hover:translate-x-2 transition-transform duration-300">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 7. RESULTS & IMPACT ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="06 — Outcomes" title="Results & Impact" />
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {project.results.map((result, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="rounded-3xl border border-border p-6 md:p-8 h-full hover:bg-muted transition-colors duration-300">
                    <p className="font-serif text-4xl md:text-5xl mb-3">{result.value}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {result.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 8. VOICES FROM THE FIELD ============ */}
        <section className="py-20 md:py-28 px-6 border-t border-border">
          <div className="max-w-4xl">
            <Reveal>
              <SectionHeading index="07 — Perspectives" title="Voices from the Field" />
            </Reveal>
            <div className="space-y-14">
              {project.voices.map((voice, i) => (
                <Reveal key={i} delay={i * 100}>
                  <figure className="text-center">
                    <Quote size={24} className="mx-auto mb-6 text-muted-foreground" />
                    <blockquote className="font-serif text-2xl md:text-3xl leading-snug italic mb-6">
                      “{voice.quote}”
                    </blockquote>
                    <figcaption className="text-sm">
                      <span className="font-medium">{voice.name}</span>
                      <span className="text-muted-foreground"> — {voice.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 9. GALLERY OF MOMENTS ============ */}
        {galleryImages.length > 0 && (
          <section className="py-20 md:py-28 px-6">
            <div className="max-w-6xl">
              <Reveal>
                <SectionHeading index="08 — Gallery" title="Moments from the Field" />
              </Reveal>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {galleryImages.map((image, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="overflow-hidden rounded-3xl">
                      <img
                        src={image}
                        alt={`${project.title} — moment ${i + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ 10. LESSONS LEARNED ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl grid md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <SectionHeading index="09 — Reflection" title="Lessons Learned" />
            </Reveal>
            <div className="md:col-span-8 space-y-8">
              {project.lessons.map((lesson, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-5 items-start">
                    <span className="text-muted-foreground text-sm mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-relaxed text-foreground/90">{lesson}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 11. FIELD NOTE ============ */}
        <section className="py-20 md:py-28 px-6">
          <Reveal>
            <div className="max-w-4xl mx-auto rounded-3xl bg-muted p-8 md:p-14">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
                10 — Field Note
              </p>
              <blockquote className="font-serif text-2xl md:text-4xl leading-snug italic mb-8">
                “{project.fieldNote.quote}”
              </blockquote>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90 max-w-2xl">
                {project.fieldNote.reflection}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ============ 12. WHY THIS MATTERS ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="11 — Perspective" title="Why This Matters" />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {project.whyItMatters.map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="rounded-3xl border border-border p-6 md:p-8 h-full hover:bg-muted transition-colors duration-300">
                    <p className="font-serif text-xl md:text-2xl mb-3">
                      {["International development", "Systems thinking", "Partnership building"][i % 3]}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 13. EXPLORE MORE ============ */}
        <section className="py-20 md:py-28 px-6 border-t border-border">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="12 — Field Stories" title="Explore More" />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {related.map((rel, i) => (
                <Reveal key={rel.id} delay={i * 80}>
                  <Link to={`/project/${rel.id}`} className="project-card group block">
                    <div className="relative overflow-hidden rounded-3xl bg-muted aspect-[4/3]">
                      <img
                        src={rel.images[0]}
                        alt={rel.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="pt-4">
                      <h3 className="font-serif text-xl mb-1 group-hover:opacity-70 transition-opacity duration-300">
                        {rel.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {rel.summary}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 14. HOW I HELP ============ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl">
            <Reveal>
              <SectionHeading index="13 — Services" title="How I Help Organizations" />
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) * 80}>
                  <div className="rounded-3xl border border-border p-6 md:p-8 h-full hover:bg-muted transition-colors duration-300">
                    <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 15. CALL TO ACTION ============ */}
        <section className="py-24 md:py-36 px-6 border-t border-border text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-headline mb-6">
                Working on a Similar Challenge?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-10">
                I help organizations design, implement, and strengthen education,
                workforce development, and partnership initiatives across diverse
                contexts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`mailto:${contactEmail}`}
                  className="px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity duration-300"
                >
                  Let's Connect
                </a>
                <Link
                  to="/"
                  className="px-8 py-3.5 rounded-full border border-border text-sm font-medium hover:bg-muted transition-colors duration-300"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Prev / Next */}
        <section className="py-12 px-6 border-t border-border">
          <div className="max-w-6xl flex items-center justify-between">
            {prevProject ? (
              <button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="group flex items-center gap-3 text-left hover:opacity-70 transition-opacity duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Previous
                  </p>
                  <p className="text-sm">{prevProject.title}</p>
                </div>
              </button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="group flex items-center gap-3 text-right hover:opacity-70 transition-opacity duration-300"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Next
                  </p>
                  <p className="text-sm">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
};

export default Project;
