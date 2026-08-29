import { Reveal } from "@/components/Reveal";

const POINTS = [
  {
    n: "Experience",
    text: "Fourteen years in the trade, learned on real roofs in real weather — not from a manual.",
  },
  {
    n: "Personal Service",
    text: "You deal with the person doing the work. Same face on the quote, the roof, and the cleanup.",
  },
  {
    n: "Quality Work",
    text: "Straight courses, proper flashing, tidy details. The parts you can't see matter most.",
  },
  {
    n: "Professional Approach",
    text: "Clear communication, honest assessments, and a job site left the way it should be.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="mt-4 text-4xl leading-[1.02] text-ink sm:text-5xl">
                Four reasons people keep calling back.
              </h2>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            {POINTS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="flex flex-col gap-2 border-t border-border py-8 sm:flex-row sm:gap-10">
                  <h3 className="w-full text-2xl text-ink sm:w-64 sm:shrink-0">{p.n}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
