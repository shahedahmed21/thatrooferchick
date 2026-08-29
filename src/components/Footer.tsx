import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF, TIKTOK, TIKTOK_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink py-16 text-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl">That Roofer Chick</h3>
            <p className="mt-3 text-sm text-background/70">14 years in roofing</p>
            <p className="mt-5 max-w-xs text-sm italic leading-relaxed text-background/60">
              “Climbing the ladder 1 rung at a time! From labourer to contractor. 14yrs goes
              quick!”
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Contact
            </p>
            <a href={PHONE_HREF} className="mt-4 block text-lg font-semibold hover:text-accent">
              {PHONE_DISPLAY}
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-background/70 hover:text-accent"
            >
              TikTok: {TIKTOK}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-background/75 hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/15 pt-6 text-xs text-background/50">
          © 2026 That Roofer Chick
        </div>
      </div>
    </footer>
  );
}
