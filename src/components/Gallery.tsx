import { Reveal } from "@/components/Reveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work5 from "@/assets/work-5.jpg";
import afterImg from "@/assets/after-roof.jpg";

// Swap these imports for the client's real project photos — layout adapts to any ratio.
const SHOTS = [
  { src: work1, alt: "Completed dark shingle roof on a two storey home", span: "lg:col-span-7", h: "h-[380px] sm:h-[520px]" },
  { src: work2, alt: "Roofer nailing shingles on a roof", span: "lg:col-span-5 lg:mt-16", h: "h-[300px] sm:h-[380px]" },
  { src: work3, alt: "Close-up of new shingle courses and ridge detail", span: "lg:col-span-5", h: "h-[300px] sm:h-[420px]" },
  { src: afterImg, alt: "Home with a newly finished roof", span: "lg:col-span-7 lg:-mt-10", h: "h-[300px] sm:h-[460px]" },
  { src: work5, alt: "Finished dormer roof with new eavestrough", span: "lg:col-span-12", h: "h-[320px] sm:h-[520px]" },
];

export function Gallery() {
  return (
    <section id="work" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Our Work</p>
              <h2 className="mt-4 max-w-xl text-4xl leading-[1.02] text-ink sm:text-5xl">
                Roofs that speak for themselves.
              </h2>
            </div>
            <a href="#contact" className="btn-solid self-start md:self-auto">
              Get a Roofing Quote
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {SHOTS.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className={s.span}>
              <div className="group overflow-hidden bg-background">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${s.h}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
