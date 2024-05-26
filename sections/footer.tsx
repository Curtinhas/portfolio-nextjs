import React from "react";
import { Socials } from "@/components/ui/socials";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center">
        <h1 className=" text-4xl text-primary-foreground mx-8">
          Ready to take <span className="font-extrabold">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-primary-foreground md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
      </div>
      <div className="flex mt-12 md:flex-row flex-col justify-center items-center">
        <p className="text-primary-foreground text-center md:text-base text-sm md:font-normal font-light">
          Copyright© 2024, Carlos Curtinhas
        </p>
      </div>

      <div className=" text-primary-foreground mt-8 flex items-center justify-center">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
