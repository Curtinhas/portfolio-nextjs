"use client";
import { type FC, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
type MagneticWrapperProps = {
  className?: string;
  children: ReactNode;
};

export const MagneticWrapper: FC<MagneticWrapperProps> = ({
  className,
  children,
}: MagneticWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const boudingRect = ref.current?.getBoundingClientRect();
    if (boudingRect) {
      const { width, height, top, left } = boudingRect;
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};
