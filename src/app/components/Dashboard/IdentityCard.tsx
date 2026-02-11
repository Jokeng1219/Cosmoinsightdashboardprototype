import React from 'react';
import { motion } from 'motion/react';
import { Drawer } from 'vaul';
import CopilotLogo from '../../../imports/Container-6-1212';
import AICoachSheet from './AICoachSheet';

export const IdentityCard = () => {
  return (
    <motion.div 
      className="bg-[#262626] rounded-[12px] p-5 w-full border border-[#333333]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-3">
          <h2 className="font-bold text-white text-[28px] tracking-[0.78px] leading-[30px]">
            Cosmo Yang
          </h2>
          
          <div className="flex items-center gap-2">
            <div className="bg-[#51361e] px-3 py-1 rounded-full flex items-center justify-center">
              <span className="text-[#ff7800] text-[12px] font-bold leading-none">目標</span>
            </div>
            <p className="text-[#bfbfbf] font-normal leading-none text-[13px]">
              產品企劃主管｜5年內達到年薪 150 萬
            </p>
          </div>
        </div>

        {/* AI Insight Card with Drawer */}
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <div className="bg-[#202020] rounded-[6px] p-3 relative cursor-pointer group transition-colors hover:bg-[#252525]">
              <div className="flex flex-col gap-2">
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 relative">
                    <CopilotLogo />
                  </div>
                  <span className="text-white text-[12px] font-bold">AI 洞察</span>
                </div>

                {/* Content */}
                <p className="text-[#d1d5dc] text-[12px] leading-[18px]">你在產品企劃領域頗具專業，但沒有獲得對應薪資，尤其年薪落點顯著低於市場行情，等於一年少賺70萬。建議優先了解[薪資競爭力]與[淘汰指數]</p>

                {/* Action Button */}
                <div className="flex justify-end mt-1">
                  <div className="border border-[#ff8a46] rounded-full px-3 py-1 flex items-center justify-center">
                    <span className="text-[#ff7800] text-[10px] font-bold">想聊聊</span>
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Trigger>
          
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
            <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 outline-none">
              <AICoachSheet />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </motion.div>
  );
};
