import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Get in Touch",
    text: "Call or send a message with what's going on up there. Photos help, but they're not required.",
  },
  {
    n: "02",
    title: "Assess the Roof",
    text: "The roof gets looked at properly so you know what it needs — repair, replacement, or just maintenance.",
  },
  {
    n: "03",
    title: "Get the Work Done",
    text: "The job gets scheduled, done right, and cleaned up when it's finished.",
  },
];

export function Process() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">Our Process</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.02] text-ink sm:text-5xl">
            Three steps. No mystery.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className={`border-t-2 border-ink pt-6 ${i === 1 ? "md:mt-10" : ""} ${i === 2 ? "md:mt-20" : ""}`}>
                <span className="font-display text-5xl font-extrabold text-accent">{s.n}</span>
                <h3 className="mt-4 text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
