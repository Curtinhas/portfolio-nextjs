import "./globals.css";

import { Bricolage_Grotesque, Oswald } from "next/font/google";

import { Cursor } from "@/components/cursor/cursor";
import { GrainEffect } from "@/components/visualEffects/grain-effect";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Carlos Curtinhas",
  description: "C. Curtinhas official portfolio",
  creator: " Carlos Curtinhas",
};
//Fonts
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel font-7.ttf",
  variable: "--font-pixel",
});
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
