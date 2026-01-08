import { cn } from "../../../utils/cn";
import React, { useEffect, useRef, useState } from "react";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1.75rem",
  colors = ["#4D07E3", "#E8590C", "#00CCF5"],
}: {
  children?: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  colors?: string[];
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative", containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${colors[0]} 0%, ${colors[1]} 25%, ${colors[2]} 50%)`,
          opacity: opacity,
          borderRadius: borderRadius,
          filter: "blur(20px)",
          transition: "opacity 0.3s ease",
        }}
      />

      <div
        className={cn(
          "relative bg-white dark:bg-black rounded-[inherit] border border-neutral-200 dark:border-white/[0.1] p-4",
          className
        )}
        style={{
          borderRadius: borderRadius,
        }}
      >
        {children}
      </div>
    </div>
  );
};