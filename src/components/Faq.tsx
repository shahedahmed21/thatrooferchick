import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  {
    q: "What roofing services do you provide?",
    a: "Roof repair, roof replacement, roof installation, roof inspection and roof maintenance.",
  },
  {
    q: "Do you repair existing roofs?",
    a: "Yes. Repairs are a core part of the work — leaks, damaged or missing shingles, and flashing issues.",
  },
  {
    q: "Do you offer roof replacements?",
    a: "Yes. When a roof is past repairing, it can be torn off and rebuilt with new underlayment and shingles.",
  },
  {
    q: "Do you provide inspections?",
    a: "Yes. An inspection tells you the real condition of your roof and what it needs — repair, maintenance or replacement.",
  },
  {
    q: "How do I request a quote?",
    a: "Call +1 613-801-8582 or fill out the contact form on this page with a few details about your roof.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-4xl leading-[1.02] text-ink sm:text-5xl">
              Questions, answered straight.
            </h2>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="border-t border-border last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-bold text-ink sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 text-2xl leading-none text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
