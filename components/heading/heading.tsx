import { type FC } from "react";
import SvgCurve from "../visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

type HeadingProps = {
  number: string;
  title_1: string;
  title_2: string;
};

export const Heading: FC<HeadingProps> = ({
  number,
  title_1,
  title_2,
}: HeadingProps) => {
  return (
    <div className="relative my-10 px-8 z-20">
      {/* Number */}
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-20 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p4">
            {number}
          </span>
        </h2>
      </div>

      {/* Heading text wrapper */}
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald ">
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">
          {title_1}
        </p>
        <HeadingAnimatedSvg text="LEAR* MORE* ABOUT* MY* WORK*" />

        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground italic">
          {title_2}
        </p>
      </div>

      {/* Svg curve */}
      <SvgCurve />
    </div>
  );
};