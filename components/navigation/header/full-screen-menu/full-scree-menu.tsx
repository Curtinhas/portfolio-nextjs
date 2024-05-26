import React from "react";
import { title } from "process";

export const FullScreenMenu = () => {
  return (
    <div className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald">
      Menu
    </div>
  );
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Featured",
    href: "/#featured",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];
