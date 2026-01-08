import { cn } from "../../../utils/cn";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 dark:border-white/[0.1] dark:bg-black",
        className
      )}
    >
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.25,
              },
            },
          }}
        >
          <h2 className="mb-3 text-3xl font-bold text-neutral-800 dark:text-white">
            {text}
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            },
          }}
        >
          <p className="mb-8 text-base font-normal text-neutral-600 dark:text-neutral-300">
            {revealText}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.75,
              },
            },
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};