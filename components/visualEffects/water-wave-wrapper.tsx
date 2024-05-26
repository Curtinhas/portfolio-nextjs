"use client";

import React, { ReactNode, type FC } from "react";
import WaterWave from "react-water-wave";

type WaterWaveWrapperProps = {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => ReactNode;
};

export const WaterWaveWrapper: FC<WaterWaveWrapperProps> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};
