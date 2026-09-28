import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import worldData from "world-atlas/countries-110m.json";
import { mapLocations, type MapLocation } from "@/data/fieldMap";

const FieldMap = () => {
  const [active, setActive] = useState<MapLocation | null>(null);

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
          <div
            className="relative w-full overflow-hidden bg-secondary/40"
            onClick={() => setActive(null)}
          >
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
                    onClick={(event) => {
                      event.stopPropagation();
                      setActive(isActive ? null : loc);
                    }}
                    onMouseEnter={() => setActive(loc)}
                    style={{ default: { cursor: "pointer" } }}
                  >
                    <circle
                      r={isActive ? 11 : 8}
                      className="fill-foreground/10 transition-all duration-300"
                    />
                    <circle
                      r={isActive ? 4.5 : 3.5}
                      className="fill-foreground transition-all duration-300"
                    />
                    <text
                      textAnchor="middle"
                      y={-13}
                      className="fill-foreground"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        pointerEvents: "none",
                      }}
                    >
                      {loc.city}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

          {/* Detail panel */}
          <div className="mt-6 border-t border-border pt-6 min-h-[150px]">
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
                <div className="mt-5 grid gap-px bg-border sm:grid-cols-2">
                  {active.engagements.map((e) => (
                    <Link
                      key={e.title + e.focus}
                      to={e.to}
                      className="group bg-background p-4 hover:bg-secondary transition-colors"
                    >
                      <p className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                        {e.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {e.years} · {e.focus}
                      </p>
                    </Link>
                  ))}
                </div>
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
