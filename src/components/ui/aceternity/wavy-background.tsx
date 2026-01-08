import { cn } from "../../../utils/cn";
import React from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  waveOpacity = 0.5,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  waveOpacity?: number;
}) => {
  const _colors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const _waveWidth = waveWidth ?? 50;
  const _backgroundFill = backgroundFill ?? "#fff";

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <svg
        className="absolute top-0 left-0 h-full w-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {_colors.map((color, i) => (
            <path
              key={i}
              d={`M 0 ${
                1080 / _colors.length / 2 + (1080 / _colors.length) * i
              } C 473 ${
                1080 / _colors.length / 2 + (1080 / _colors.length) * i + 50
              } 610 ${
                1080 / _colors.length / 2 + (1080 / _colors.length) * i - 50
              } 1080 ${
                1080 / _colors.length / 2 + (1080 / _colors.length) * i
              } V 1080 H 0 V ${
                1080 / _colors.length / 2 + (1080 / _colors.length) * i
              }`}
              fill={color}
              style={{
                filter: `blur(${blur}px)`,
                opacity: waveOpacity,
              }}
            ></path>
          ))}
        </g>
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};