import { Reveal } from "@/components/Reveal";
import repair from "@/assets/service-repair.jpg";
import replacement from "@/assets/service-replacement.jpg";
import installation from "@/assets/service-installation.jpg";
import inspection from "@/assets/service-inspection.jpg";
import maintenance from "@/assets/service-maintenance.jpg";

// Swap the imported image paths above to use real project photos.
const SERVICES = [
  {
    n: "01",
    title: "Roof Repair",
    img: repair,
    text: "Leaks, missing shingles, damaged flashing — targeted repairs that stop the problem before it spreads inside.",
  },
  {
    n: "02",
    title: "Roof Replacement",
    img: replacement,
    text: "Tear off the old roof, check the deck, and rebuild it properly with new underlayment and shingles.",
  },
  {
    n: "03",
    title: "Roof Installation",
    img: installation,
    text: "New builds and additions roofed from the deck up, layer by layer, done the way it should be done.",
  },
  {
    n: "04",
    title: "Roof Inspection",
    img: inspection,
    text: "An honest look at what shape your roof is really in, with a straight answer on what it needs.",
  },
  {
    n: "05",
    title: "Roof Maintenance",
    img: maintenance,
    text: "Small fixes, clean eaves and seasonal checks that add years to a roof you already have.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">What I Do</p>
              <h2 className="mt-4 max-w-xl text-4xl leading-[1.02] text-ink sm:text-5xl">
                Roofing work, start to finish.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Five core services, all handled with the same hands-on approach — no runaround, no
              guessing.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article
                className={`group ${i === 0 ? "lg:col-span-2 lg:flex lg:gap-8" : ""} ${
                  i === 3 ? "lg:mt-16" : ""
                }`}
              >
                <div
                  className={`overflow-hidden bg-sand ${i === 0 ? "lg:w-1/2" : ""}`}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                      i === 0 ? "h-72 lg:h-full" : "h-72 sm:h-80"
                    }`}
                  />
                </div>
                <div className={i === 0 ? "lg:flex lg:w-1/2 lg:flex-col lg:justify-center" : ""}>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="font-display text-sm font-bold text-accent">{s.n}</span>
                    <h3 className="text-2xl text-ink">{s.title}</h3>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
