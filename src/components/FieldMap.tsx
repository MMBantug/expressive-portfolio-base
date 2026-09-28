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

const FieldMap = () => {
  const [active, setActive] = useState<MapLocation | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selectLocation = (location: MapLocation) => {
    setActive(location);
    if (window.matchMedia("(max-width: 767px)").matches) {
      requestAnimationFrame(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }));
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

        {/* Map */}
        <div className="relative mt-8">
          <div className="relative w-full overflow-hidden bg-secondary/40">
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
                    onClick={() => selectLocation(loc)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        selectLocation(loc);
                      }
                    }}
                    style={{ default: { cursor: "pointer" } }}
                  >
                    <circle r={17} className="fill-background/0" />
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
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

          {/* Detail panel */}
          <div ref={detailsRef} className="mt-6 border-t border-border pt-6 min-h-[150px]" aria-live="polite">
            {active ? (
              <div className="animate-fade-in">
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
                  <div className="mt-5 grid gap-px bg-border sm:grid-cols-2">
                    {active.engagements.map((e) => {
                      const project = getProjectById(e.to.split("/").pop() ?? "");
                      return (
                        <Link
                          key={e.to + e.focus}
                          to={e.to}
                          className="group flex items-start justify-between gap-4 bg-background p-4 hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition-colors"
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
              <p className="text-sm text-muted-foreground">
                Select a location to see the engagements based there.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldMap;
