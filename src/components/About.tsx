import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/about-portrait.jpg";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -left-3 -top-3 hidden h-full w-full border border-accent sm:block" />
            <img
              src={portrait}
              alt="That Roofer Chick on a roof at golden hour"
              loading="lazy"
              width={1200}
              height={1504}
              className="relative w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-4xl leading-[1.02] text-ink sm:text-5xl">
              From Labourer to Contractor.
            </h2>
            <blockquote className="mt-7 border-l-2 border-accent pl-5 font-display text-xl leading-snug text-ink sm:text-2xl">
              “Climbing the ladder 1 rung at a time! From labourer to contractor. 14yrs goes
              quick!”
            </blockquote>
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                It started at the bottom — as a labourer, carrying bundles, cleaning up job sites,
                and learning the trade from the people who did it every day. No shortcuts, no
                office job first. Just the roof, the weather, and the work.
              </p>
              <p>
                Fourteen years later, that same person runs the roofing work: pricing the job,
                planning it, and standing on the roof while it gets done. Every rung of that ladder
                added something — how a roof actually fails, how to build one that lasts, and how
                to talk to a homeowner straight.
              </p>
              <p>
                That's what you get when you call That Roofer Chick: someone who has done every
                part of this job, and still does.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-solid w-full sm:w-auto">
                Get a Roofing Quote
              </a>
              <a href={PHONE_HREF} className="btn-outline w-full text-ink sm:w-auto">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
