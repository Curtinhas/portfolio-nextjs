import { FaArrowRight } from "react-icons/fa";
import { FancyButton } from "@/components/ui/fancy-button";
import { Header } from "@/components/navigation/header/header";
import { LiveClock } from "@/components/ui/live-clock";
import { MagneticWrapper } from "@/components/visualEffects/magnetic-wrapper";
import React from "react";
import ScrollDown from "@/components/visualEffects/scroll-down";

export const LandingSection = () => {
  return (
    <div className=" relative h-screen overflow-hidden p-8" id="home">
      {/* Header */}
      <Header />

      {/* Show magnetic fancy button on sm screens and hide it on sd screens */}
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton text="Let`s talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>

      {/* Live clock */}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="Europe/Lisbon" />
      </div>

      {/* Slogan */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] h-[40rem] tracking-[-0.3rem]  ">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase py-20 ">
          <div>
            <span>Code</span>
          </div>
          <div>
            <span>Crafting</span>
          </div>
          <div className="relative">
            <span className="glitch" data-glitch="Brilliance">
              Brilliance
            </span>
            <div className="text-[1rem] pt-4 pl-4 leading-[1.4rem] tracking-[-0.05rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal lg:pb-10">
              <span>Empowering innovation</span>
              <br />
              <span>through inspired design</span>
              <br />
              <span>where challenges spark creativity</span>
              <br />
              <span>and solutions redefine possibilities.</span>
            </div>
          </div>
        </div>

        {/* Magnetic scroll down */}
        <MagneticWrapper className="  absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10">
          <ScrollDown className="hidden md:block" />
        </MagneticWrapper>
      </div>
    </div>
  );
};
