import Link from "next/link";
import { type FC, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
  text: string;
  icon: ReactNode;
};

export const FancyButton: FC<ButtonProps> = ({ text, icon }) => {
  return (
    <>
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#444546] via-[#414142] to-[#444546] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="#contact"
          title="Get in touch"
          className="relative border-slate-100 inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-primary-foreground transition-all duration-200 bg-zinc-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <p className="pr-4">Get in touch</p> <FaArrowRight />
        </Link>
      </div>
    </>
  );
};
