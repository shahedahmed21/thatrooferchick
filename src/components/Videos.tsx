import { Reveal } from "@/components/Reveal";

const VIDEOS = [
  {
    title: "That Roofer Chick — roofing video",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FThatRooferChick%2Fvideos%2F1977817682607970%2F&show_text=false&width=265&t=0",
    width: 265,
  },
  {
    title: "That Roofer Chick — roofing reel",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F635080159671573%2F&show_text=false&width=267&t=0",
    width: 267,
  },
];

export function Videos() {
  return (
    <section id="videos" className="bg-ink py-20 text-background sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Videos</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
              See That Roofer Chick in Action
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-background/70 sm:text-base">
              Real roofing work. Real projects. See the work behind the brand.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-12">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.src} delay={i * 120}>
              <div className="w-full max-w-[280px] border border-background/15 bg-black/30 p-2">
                <iframe
                  src={v.src}
                  title={v.title}
                  width={v.width}
                  height={476}
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="block h-[476px] w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
