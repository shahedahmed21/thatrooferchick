import { useEffect, useState } from "react";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">
            That Roofer Chick
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            14 Years in Roofing
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="btn-accent !px-5 !py-2.5 text-sm">
            Call Now
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0 border-t-0"
        } transition-[max-height] duration-400 ease-in-out`}
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3.5 font-display text-lg font-bold text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="btn-accent mt-5 mb-2">
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}
