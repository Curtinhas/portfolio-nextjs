import React from "react";
import { cn } from "@/lib/utils";

export const GrainEffect = () => {
  return (
    <div
      className={cn(
        "fixed top-0 w-full h-full",
        "before-content-none before:-top-40 before:-left-40 before:w-[calc(100%+20rem)] before:h-[calc(100%+20rem)]",
        "before:fixed before:bg-grain before:opacity-5 pointer-events-none before:animate-noisy-bg "
      )}
    >
      grain-effect
    </div>
  );
};
