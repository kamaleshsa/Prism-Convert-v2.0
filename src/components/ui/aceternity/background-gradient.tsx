import { cn } from "../../../utils/cn";
import { useEffect, useRef, useState } from "react";

interface BackgroundGradientProps {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}

export const BackgroundGradient = ({
  className,
  containerClassName,
  children,
}: BackgroundGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPosition({ x, y });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-lg p-px",
        containerClassName
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(120, 119, 198, 0.15), transparent 40%)`,
        }}
      />
      <div
        className={cn(
          "relative h-full w-full rounded-lg bg-black",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};