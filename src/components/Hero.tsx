import heroRoof from "@/assets/hero-roof.jpg";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroRoof}
        alt="Roofer working on a shingle roof at sunset"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/45" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-4 duration-700 text-accent">
          That Roofer Chick
        </p>
        <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[0.95] text-background animate-in fade-in slide-in-from-bottom-6 duration-1000 sm:text-6xl lg:text-7xl">
          From the First Rung to Running the Roof.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85 animate-in fade-in duration-1000 sm:text-lg">
          14 years in roofing. From labourer to contractor, one rung at a time.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-accent w-full sm:w-auto">
            Get a Roofing Quote
          </a>
          <a href={PHONE_HREF} className="btn-outline w-full text-background sm:w-auto">
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-background/20 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-background/75 sm:text-sm">
          <span>14 Years in Roofing</span>
          <span className="text-accent">•</span>
          <span>Local</span>
          <span className="text-accent">•</span>
          <span>Professional</span>
        </div>
      </div>
    </section>
  );
}
