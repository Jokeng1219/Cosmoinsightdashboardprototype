import React from 'react';
import { motion } from 'motion/react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-[#1A1A1A] border-b border-[#333333]">
      <h1 className="text-lg font-bold text-white tracking-wide">
        Cosmo的洞察總覽
      </h1>
      <motion.div
        className="relative flex items-center justify-center w-[40px] h-[40px] rounded-full"
        whileTap={{ scale: 0.95 }}
      >
        <div aria-hidden="true" className="absolute inset-0 border-2 border-[#ff7800] rounded-full pointer-events-none" />
        <div className="w-[32px] h-[32px] rounded-full overflow-hidden bg-[#333333] flex items-center justify-center">
          <span className="text-white text-sm font-bold">C</span>
        </div>
      </motion.div>
    </header>
  );
};
