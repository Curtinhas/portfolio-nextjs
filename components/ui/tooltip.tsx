import React, { FC, useState } from "react";

import Image from "next/image"; // Import the Image component from the 'next/image' package
import { cn } from "@/lib/utils";

type TooltipProps = {
  title: string;
  image: any;
  bgColor?: string;
};
export const Tooltip: FC<TooltipProps> = ({
  title,
  image,
  bgColor,
}: TooltipProps) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "link relative bg-[#2D2C33] w-10 h-10 cursor-pointer grid place-items-center ",
        "border border-border rounded-xl",
        "hover:scale-125 transition-all duration-200"
      )}
      style={{ background: `${bgColor || "#2D2C33"}` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="w-[27px] h-[27px]">
        <Image
          src={image}
          alt={title}
          className="w-full h-full overflow-clip object-contain"
        />
      </div>

      {/* Title */}
      {active ? (
        <div className="absolute -top-6 bg-black/[0.2] py-1.5 rounded-xl backdrop-blur-[6px] transition-al duration-200">
          <p className="font-pixel text-[10px] whitespace-nowrap">{title}</p>
        </div>
      ) : null}
    </div>
  );
};
