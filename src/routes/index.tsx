import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BeforeAfter } from "@/components/BeforeAfter";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Videos } from "@/components/Videos";
import { Gallery } from "@/components/Gallery";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const TITLE = "That Roofer Chick | Roofing Repair, Replacement & Inspection";
const DESCRIPTION =
  "14 years in roofing. Roof repair, replacement, installation, inspection and maintenance from That Roofer Chick. Call +1 613-801-8582 for a quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <WhyUs />
        <Process />
        <Videos />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
