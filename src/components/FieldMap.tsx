import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import worldData from "world-atlas/countries-110m.json";
import { mapLocations, type MapLocation } from "@/data/fieldMap";
import { getProjectById } from "@/data/projects";

// Unique country flags for the project locations (home base excluded).
// Each flag is wired to one representative location so clicking it behaves
// like clicking that country's pin on the map.
const countryFlags = mapLocations
  .filter((l) => l.kind !== "home")
  .reduce<{ code: string; country: string; location: MapLocation }[]>((acc, l) => {
    if (!acc.some((c) => c.code === l.countryCode)) {
      acc.push({ code: l.countryCode, country: l.country, location: l });
    }
    return acc;
  }, []);

const FieldMap = () => {
  const [active, setActive] = useState<MapLocation | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectLocation = (location: MapLocation) => {
    setActive(location);
    if (window.matchMedia("(max-width: 767px)").matches) {
      requestAnimationFrame(() => detailsRef.current?.scrollIntoView({ behavior: "instant", block: "nearest" }));
    }
  };

  return (
    <section className="px-6 pt-28 md:pt-32 pb-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border pb-6">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Field Deployments
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl font-serif">
              Where the work has taken place
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Eleven engagements across five countries — capacity building and
            curriculum development, adapted to each context.
          </p>
        </div>

        {/* Map and location briefing */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,1.8fr)_minmax(280px,1fr)] border-y border-border">
          <div className="relative flex w-full items-center overflow-hidden bg-secondary/40">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 175, center: [10, 8] }}
              width={900}
              height={420}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={worldData}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className="fill-muted stroke-border"
                      strokeWidth={0.4}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {mapLocations.map((loc) => {
                const isActive = active?.id === loc.id;
                return (
                  <Marker
                    key={loc.id}
                    coordinates={loc.coordinates}
                    role="button"
                    tabIndex={0}
                    aria-label={`${loc.city}, ${loc.country}${loc.kind === "home" ? ", home base" : `, ${loc.engagements.length} ${loc.engagements.length === 1 ? "project" : "projects"}`}`}
                    aria-pressed={isActive}
                     onMouseEnter={() => setActive(loc)}
                     onFocus={() => setActive(loc)}
                    onClick={() => selectLocation(loc)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        selectLocation(loc);
                      }
                    }}
                    style={{ default: { cursor: "pointer" } }}
                  >
                     {loc.pinOffset && (
                       <line x1={0} y1={0} x2={loc.pinOffset.dx} y2={loc.pinOffset.dy} className="stroke-foreground/40 pointer-events-none" strokeWidth={0.7} />
                     )}
                     <g transform={`translate(${loc.pinOffset?.dx ?? 0},${loc.pinOffset?.dy ?? 0})`}>
                       <circle r={12} className="fill-background/0" />
                       <circle
                         r={isActive ? 11 : 8}
                         className={`${loc.kind === "home" ? "fill-primary/25" : "fill-foreground/10"} transition-all duration-300`}
                       />
                       <circle
                         r={isActive ? 4.5 : 3.5}
                         className={`${loc.kind === "home" ? "fill-primary" : "fill-foreground"} transition-all duration-300`}
                       />
                       <text
                         textAnchor="middle"
                         x={loc.labelOffset?.dx ?? 0}
                         y={loc.labelOffset?.dy ?? -13}
                         className="fill-foreground"
                         style={{
                           fontSize: 9,
                           letterSpacing: "0.08em",
                           textTransform: "uppercase",
                           pointerEvents: "none",
                         }}
                       >
                         {loc.city}{loc.kind === "home" ? " · Base" : ""}
                       </text>
                     </g>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

          {/* Detail panel */}
          <div ref={detailsRef} className="min-w-0 border-t md:border-t-0 md:border-l border-border px-5 py-7 md:px-7 md:py-8 md:min-h-[420px]" aria-live="polite">
            {active ? (
              <div key={active.id} className="animate-fade-in">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  {active.country} · {active.years}
                </p>
                <h3 className="mt-2 text-xl md:text-2xl font-serif">
                  {active.city}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                  {active.summary}
                </p>
                {active.kind !== "home" && (
                  <div className="mt-6 border-t border-border">
                    {active.engagements.map((e) => {
                      const project = getProjectById(e.to.split("/").pop() ?? "");
                      return (
                        <Link
                          key={e.to + e.focus}
                          to={e.to}
                          className="group flex items-start justify-between gap-4 border-b border-border py-4 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-colors"
                        >
                          <div>
                            <p className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                              {project?.title ?? e.title}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {e.years} · {e.focus}
                            </p>
                          </div>
                          <ArrowUpRight size={16} className="shrink-0 text-muted-foreground" aria-hidden="true" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-fade-in">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Global practice</p>
                <h3 className="mt-3 text-xl md:text-2xl font-serif">Across contexts, grounded in place.</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Institutional capacity building and curriculum development across five countries, spanning education, workforce, and sector partnerships.</p>
                <div className="mt-8 border-t border-border pt-4 flex justify-between text-sm">
                  <span>Project locations</span><span className="font-serif text-xl">06</span>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {countryFlags.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => selectLocation(c.location)}
                      aria-label={`Show projects in ${c.country}`}
                      title={c.country}
                      className="rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <img
                        src={`https://flagcdn.com/w80/${c.code}.png`}
                        alt=""
                        loading="lazy"
                        className="h-7 w-7 rounded-full object-cover ring-1 ring-border shadow-sm"
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-3 border-t border-border pt-4 flex justify-between text-sm">
                  <span>Engagements</span><span className="font-serif text-xl">11</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldMap;
