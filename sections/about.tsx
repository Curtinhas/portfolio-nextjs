import { Card } from "@/components/ui/card";
import { EducationCard } from "@/components/cards/education";
import { Gallery } from "@/components/ui/gallery";
import { Heading } from "@/components/heading/heading";
import { MeCard } from "@/components/cards/me";
import React from "react";
import { ResumeCard } from "@/components/cards/resume";
import { StackCard } from "@/components/cards/stack";

export const AboutSection = () => {
  return (
    <div className="pt-24 px-3 lg:px-8" id="about">
      {/* Heading */}
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-2">
          <div className="md:col-span-1 2xl:col-span-1">
            <Card>
              <Card>
                <Card>
                  <MeCard />
                </Card>
              </Card>
            </Card>
          </div>

          <div className="md:col-span-1 2xl:col-span-1">
            <Gallery />
          </div>

          <div className="md:col-span-2 2xl:col-span-2">
            <ResumeCard />
          </div>
        </div>

        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-2">
          <StackCard />
          <div className="h-[300px] w-full">
            <EducationCard />
          </div>
        </div>
      </div>
    </div>
  );
};
