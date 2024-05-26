import { FaArrowRight } from "react-icons/fa";
import { FancyButton } from "@/components/ui/fancy-button";
import { FullScreenMenu } from "./full-screen-menu/full-scree-menu";
import { MagneticWrapper } from "@/components/visualEffects/magnetic-wrapper";
import { Profile } from "@/components/ui/profile";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex items-center justify-center md:justify-end">
      {/*  <Profile /> */}
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let`s talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* Full screen menu */}
      {/*  {open && <FullScreenMenu />} */}
    </div>
  );
};
