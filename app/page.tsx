import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { EventDetails } from "@/components/event-details";
import { Timeline } from "@/components/timeline";
import { Sponsorship } from "@/components/sponsorship";
import { Contact } from "@/components/contact";
import { Guidelines } from "@/components/guidelines";
import { Navbar } from "@/components/navbar";
import { SponsorSlider } from "@/components/sponsor-slider";
import { ProblemStatements } from "@/components/ps";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="event-details">
        <EventDetails />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="guidelines">
        <Guidelines />
      </div>

      <div id="ps">
        <ProblemStatements />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="sponsorship">
        <SponsorSlider />
      </div>
    </main>
  );
}
