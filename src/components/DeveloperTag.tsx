import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

const DeveloperTag: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          layout
          initial={false}
          animate={{
            width: isExpanded ? 'auto' : '48px',
            borderRadius: '24px',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl h-12"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-500/20 opacity-50" />

          {/* Content Container */}
          <div className="relative flex items-center h-full">
            {/* Developer Image */}
            <motion.div
              layout
              className="w-12 h-12 flex items-center justify-center flex-shrink-0 cursor-pointer z-10"
            >
              <img
                src="/assets/developer.jpg"
                alt="KAMALESH S A"
                className={`w-10 h-10 rounded-full object-cover border border-white/20 shadow-lg transition-transform duration-300 ${isExpanded ? 'scale-90' : 'hover:scale-110'}`}
              />
            </motion.div>

            {/* Text Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: -10, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-center whitespace-nowrap pr-5 overflow-hidden"
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <Code2 className="w-3 h-3 text-purple-400" />
                    <span className="text-[9px] font-semibold text-purple-300 uppercase tracking-wider">
                      Developer
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-white leading-none">
                    KAMALESH S A
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeveloperTag;
