import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import MySignature from "@/public/assets/images/me/MySignature.png";
import React from "react";
import { Socials } from "../ui/socials";

export const ResumeCard = () => {
  return (
    <Card className="md:h-full text-lg 2xl:text-2xl font-medium text-primary-foreground">
      <div>
        <p>
          Thrilled to be transitioning into software development and eager to
          engage with the community! Over the past five months, I&apos;ve been
          actively studying at Mindera Code Academy - Programming and Tech
          Education, delving into various tools and techniques from both backend
          and frontend perspectives.
        </p>
        <br />
        <p>
          Throughout the course, I&apos;ve gained proficiency in Java, Spring
          Boot, sequential databases, Docker, RESTful APIs, as well as frontend
          technologies like JavaScript, Typescript, CSS, and HTML. Additionally,
          I&apos;ve gained proficiency in frameworks such as React and Next.js,
          and have refined my version control skills using Git.
        </p>
        <br />
        <p>
          Drawing from my background as a registered nurse, I bring a unique set
          of qualities to the table. Years of working in intensive care units at
          London&apos;s largest hospital provided me with invaluable experience
          in high-stress, multicultural environments. I developed resilience,
          strong teamwork abilities, and the capacity to thrive under pressure.
        </p>
        <br />
        <p>
          I am excited to leverage my diverse background and newly acquired
          software development skills to make meaningful contributions to
          innovative projects and collaborate with like-minded individuals.
        </p>
      </div>

      {/* Signature */}
      <div>
        <Image src={MySignature} alt="Carlos Curtinhas" />
      </div>

      {/*Resume and Social buttons */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        <Socials />
        <Link href="https://vercel.com/curtinhas-projects">
          <Button className="uppercase w-10 text-xl underline">
            <FaDownload />
            Check my deployed work
          </Button>
        </Link>
      </div>
    </Card>
  );
};
