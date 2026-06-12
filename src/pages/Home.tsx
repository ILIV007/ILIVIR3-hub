import { Hero } from "@components/sections/Hero";
import { FeaturedProjects } from "@components/sections/FeaturedProjects";
import { AISystems } from "@components/sections/AISystems";
import { TechFeed } from "@components/sections/TechFeed";
import { Timeline } from "@components/sections/Timeline";
import { TelegramCTA } from "@components/sections/TelegramCTA";
import { GitHubCTA } from "@components/sections/GitHubCTA";
import { DonateCTA } from "@components/sections/DonateCTA";
import { Contact } from "@components/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AISystems />
      <TechFeed />
      <Timeline />
      <TelegramCTA />
      <GitHubCTA />
      <DonateCTA />
      <Contact />
    </>
  );
}
