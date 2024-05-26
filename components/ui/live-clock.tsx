"use client";

import moment from "moment-timezone";
import React, { type FC, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

type LiveClockProps = {
  timeZone: string;
};

export const LiveClock: FC<LiveClockProps> = ({ timeZone }: LiveClockProps) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH:mm");
      setTime(currentTime);
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div className="text-3xl text-secondary-foreground font-semibold">
      {time ? (
        <div className="flex items-center justify-center gap-[0.5vw] ">
          <span>{time}h</span>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
