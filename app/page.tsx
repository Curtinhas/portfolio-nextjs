"use client";

import { AboutSection } from "@/sections/about";
import { ContactSection } from "@/sections/contact";
import { FeaturedSection } from "@/sections/featured";
import { FloatingNav } from "@/components/ui/floatingNavbar";
import Footer from "@/sections/footer";
import { LandingSection } from "@/sections/landing";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems } from "@/data/navItems";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="pb-8">
        <Spotlight
          className="-top-96 left-96 h-[80vh] w-[50vw] md:-left-32 md:-top-20"
          fill="gray"
        />
        <Spotlight
          className="-top-30 left-full h-[80vh] w-[50vw]"
          fill="gray"
        />
        <Spotlight
          className="-top-30 left-64 h-[80vh] w-[50vw] "
          fill="white"
        />
        <FloatingNav navItems={navItems} />
        <LandingSection />
        <FeaturedSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
