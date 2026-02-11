import React from 'react';
import { motion } from 'motion/react';
import { Book, PlayCircle, CheckCircle2 } from 'lucide-react';

const CourseItem = ({ title, category, progress, delay }: { title: string, category: string, progress: number, delay: number }) => {
  return (
    <div className="bg-[#333333]/20 rounded-lg p-3 border border-[#333333]/50">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#333333] rounded-md text-accent">
            <PlayCircle size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground line-clamp-1">{title}</h4>
            <span className="text-xs text-muted-foreground inline-block px-1.5 py-0.5 bg-[#333333] rounded mt-1">
              {category}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-accent">{progress}%</span>
        </div>
      </div>
      
      <div className="h-1.5 w-full bg-[#333333] rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const GrowthPlan = () => {
  return (
    <motion.div
      className="bg-[#262626] border border-[#333333] rounded-[12px] p-5 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-start gap-2 mb-6">
        <div className="flex flex-col gap-1">
           <h3 className="font-bold text-white text-[20px]">轉職推薦</h3>
           <p className="text-[13px] text-[#c5c5c5]">AI推薦你適合的職涯路徑</p>
        </div>
      </div>

      <div className="space-y-3">
        {[
          {
            role: "資深產品經理 (Senior PM)",
            upside: 45,
            target: 245,
            reason: "發揮強大執行力，補齊數據短板，即可穩健挑戰更高薪水。"
          },
          {
            role: "產品經理主管 (PM Manager)",
            upside: 58,
            target: 258,
            reason: "溝通力已達標，強化商業佈局與賦能，轉向高薪管理職。"
          },
          {
            role: "技術產品經理 (Technical PM)",
            upside: 50,
            target: 250,
            reason: "放大技術與專案管理優勢，在科技門檻中獲取高額溢價。"
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="bg-[#333333]/20 rounded-lg p-4 border border-[#333333]/50 hover:bg-[#333333]/40 transition-colors cursor-pointer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + (index * 0.1) }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-[14px] font-bold text-white leading-tight">{item.role}</h4>
              <span className="text-[12px] font-bold text-[#FF7800] bg-[#FF7800]/10 px-2 py-0.5 rounded whitespace-nowrap ml-2">
                +{item.upside}萬
              </span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[12px] text-[#999999]">目標年薪</span>
              <span className="text-[12px] font-bold text-[#d1d5dc]">{item.target}萬/年</span>
            </div>

            <p className="text-[12px] text-[#999999] leading-[18px]">
              {item.reason}
            </p>
          </motion.div>
        ))}
      </div>
      
      
    </motion.div>
  );
};
