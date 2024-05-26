import { Timeline, TimelineItem } from "../ui/timeline";

import { Card } from "../ui/card";
import React from "react";

export const EducationCard = () => {
  return (
    <Card title="Experience | Education " className="">
      <Timeline>
        <TimelineItem
          date="2023-11-07"
          title="Mindera Code Academy-Fullstack"
        />
        <TimelineItem date="2018-02-01" title="Nurse at UCCI-Murça" />
        <TimelineItem
          date="2013-01-12"
          title="Nurse at St Thomas' Hospital-London"
        />

        <TimelineItem date="2008-11-01" title="Nurse at UCCI-Murça" />
        <hr className="text-secondary-foreground" />

        <TimelineItem
          date="2010-09-03"
          title="Postgraduate degree in emergency"
        />
        <TimelineItem
          date="2010-03-28"
          title="Postgraduate degree in intensive care"
        />
        <TimelineItem date="2008-08-30" title="Nursing degree" />
      </Timeline>
    </Card>
  );
};
