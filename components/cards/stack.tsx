import { Card } from "../ui/card";
import React from "react";
import { Tooltip } from "../ui/tooltip";
import { stackData } from "@/data/stack";

export const StackCard = () => {
  return (
    <Card title="My Tech Stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((tech, i) => (
          <div
            key={i}
            className="grid items-center gap-[90px]"
            style={{ gridTemplateColumns: "50px 1fr" }}
          >
            {/* Stack group */}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
            </div>

            {/* Tooltip */}
            <div className="flex gap-4">
              {tech.stack.map((t) => (
                <Tooltip
                  key={t.title}
                  title={t.title}
                  image={t.image}
                  bgColor={t.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
