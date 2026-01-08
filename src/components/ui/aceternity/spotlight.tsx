import { cn } from "../../../utils/cn";
import { useEffect, useRef, useState } from "react";

interface SpotlightProps {
  className?: string;
  children?: React.ReactNode;
}

export const Spotlight = ({ children, className }: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ w: 0, h: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const onMouseMove = (ev: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const { w, h } = containerSize.current;
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    mousePosition.current = { x, y };
    
    // Calculate the position of the spotlight
    if (isHovering) {
      mouse.current.x = x;
      mouse.current.y = y;
    } else {
      // If not hovering, move the spotlight to the center
      mouse.current.x = w / 2;
      mouse.current.y = h / 2;
    }
  };

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerSize.current.w = rect.width;
    containerSize.current.h = rect.height;
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      containerSize.current.w = rect.width;
      containerSize.current.h = rect.height;
    });
  }, []);

  useEffect(() => {
    containerRef.current?.addEventListener("mousemove", onMouseMove);
    containerRef.current?.addEventListener("mouseenter", onMouseEnter);
    containerRef.current?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      containerRef.current?.removeEventListener("mousemove", onMouseMove);
      containerRef.current?.removeEventListener("mouseenter", onMouseEnter);
      containerRef.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-md",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(120,119,198,0.15)_10%,transparent_80%)]"
        style={{
          "--x": `${mouse.current.x}px`,
          "--y": `${mouse.current.y}px`,
        } as React.CSSProperties}
      />
      {children}
    </div>
  );
};