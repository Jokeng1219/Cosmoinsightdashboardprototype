import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown } from 'lucide-react';

const ProgressBar = ({ label, value, colorClass, delay }: { label: string, value: number, colorClass: string, delay: number }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm text-muted-foreground font-medium">{label}</span>
        <span className="text-sm font-bold text-foreground">{value}%</span>
      </div>
      <div className="h-2 w-full bg-[#333333] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const RiskAnalysis = () => {
  return (
    <motion.div
      className="bg-[#262626] border border-[#333333] rounded-[12px] p-5 w-full relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-white text-[20px]">淘汰指數</h3>
          <p className="text-[#999999] text-[12px]">主動偵測你的職涯風險</p>
        </div>
        <motion.div
          className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center gap-1.5 text-[13px]"
          animate={{ boxShadow: ["0 0 10px rgba(168,85,247,0.2)", "0 0 20px rgba(168,85,247,0.5)", "0 0 10px rgba(168,85,247,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle size={12} />
          極高
        </motion.div>
      </div>

      <div className="space-y-6">
        <div>
          <ProgressBar 
            label="AI 被取代率" 
            value={82} 
            colorClass="bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]" 
            delay={0.3} 
          />
          <ProgressBar 
            label="職務決策權重" 
            value={25} 
            colorClass="bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]" 
            delay={0.5} 
          />
        </div>

        <div className="flex items-center gap-3 p-3 bg-[#333333]/30 rounded-lg border border-[#333333]/50">
          <TrendingDown className="text-muted-foreground w-5 h-5" />
          <div>
            <span className="text-xs text-muted-foreground block">產業趨勢預估</span>
            <span className="text-sm font-bold text-foreground">成熟期 / 增長放緩</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
