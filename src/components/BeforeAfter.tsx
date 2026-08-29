import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import beforeImg from "@/assets/before-roof.jpg";
import afterImg from "@/assets/after-roof.jpg";

// Replace these two imports with real before/after photos of the same roof.
export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dragging.current) setFromClientX(e.clientX);
    };
    const touch = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) setFromClientX(e.touches[0].clientX);
    };
    const stop = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", touch, { passive: true });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("touchend", stop);
    };
  }, [setFromClientX]);

  const start = (clientX: number) => {
    dragging.current = true;
    setFromClientX(clientX);
  };

  return (
    <section className="bg-ink py-20 text-background sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Before &amp; After</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
              The Difference Is in the Details.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-background/70 sm:text-base">
              Drag the slider to see the same roof before and after the work. Clean lines, straight
              courses, and flashing that actually keeps water out.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            ref={containerRef}
            onMouseDown={(e) => start(e.clientX)}
            onTouchStart={(e) => e.touches[0] && start(e.touches[0].clientX)}
            className="relative mt-10 aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden bg-black/40 sm:aspect-[16/9]"
          >
            <img
              src={afterImg}
              alt="Roof after the work was completed"
              loading="lazy"
              width={1600}
              height={1072}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={beforeImg}
                alt="Roof before the work started"
                loading="lazy"
                width={1600}
                height={1072}
                draggable={false}
                className="absolute inset-y-0 left-0 h-full w-full max-w-none object-cover"
                style={{ width: containerRef.current?.offsetWidth ?? "100vw" }}
              />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 bg-ink/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
              Before
            </span>
            <span className="pointer-events-none absolute right-4 top-4 bg-accent px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-[2px] bg-background"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-ink shadow-lg">
                <span className="text-lg leading-none">⇄</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10">
            <a href="#contact" className="btn-accent">
              Get a Roofing Quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
