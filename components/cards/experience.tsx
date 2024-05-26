import { Timeline, TimelineItem } from "../ui/timeline";

import { Card } from "../ui/card";
import React from "react";

export const ExperienceCard = () => {
  return (
    <Card title="Experience">
      <Timeline>
        <TimelineItem
          date="2011-09-07"
          title="Master's degree in medical-surgical"
        />
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
