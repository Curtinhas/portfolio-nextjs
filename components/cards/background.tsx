import { Card } from "../ui/card";
import React from "react";

export const BackgroundCard = () => {
  return (
    <Card className="h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Sou de Murça e faço muitas coisas &nbsp;
          <span className="text-white underline">
            entre elas qualquer coisa
          </span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          pariatur dicta dolores labore corrupti sit libero debitis sint aliquid
          laudantium.
          <br />
          <span className="text-white underline">
            foi o que aconteceu desde entao...
          </span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          excepturi debitis similique quibusdam itaque officia consectetur ipsam
          quam placeat fugiat quasi, magni voluptate nesciunt sunt expedita
          pariatur minus ex hic.
        </p>
      </div>
    </Card>
  );
};
