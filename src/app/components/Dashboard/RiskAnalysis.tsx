import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Zap } from 'lucide-react';

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
  const data = {
    risk_level: "高",
    replacement_probability: "70%",
    market_heat: "熱",
    insight: "系統未偵測到您具備「AI 協作技能」，在高薪市場中競爭力嚴重下滑。請確認是否遺漏資料，或立即補充以重新計算。"
  };

  const probability = parseInt(data.replacement_probability);

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
          <p className="text-[13px] text-[#c5c5c5]">主動偵測你的職涯風險</p>
        </div>
        <motion.div
          className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#ef4444] font-bold shadow-[0_0_15px_rgba(239,68,68,0.3)] flex items-center gap-1.5 text-[13px]"
          animate={{ boxShadow: ["0 0 10px rgba(239,68,68,0.2)", "0 0 20px rgba(239,68,68,0.5)", "0 0 10px rgba(239,68,68,0.2)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle size={12} />
          {data.risk_level}
        </motion.div>
      </div>

      <div className="space-y-6">
        {/* Progress Bar & Market Heat */}
        <div className="space-y-4">
          <ProgressBar 
            label="AI 被取代率" 
            value={probability} 
            colorClass="bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]" 
            delay={0.3} 
          />
          
          <div className="flex justify-between items-center py-2 px-1">
            <span className="text-sm text-muted-foreground font-medium">市場熱度</span>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-bold text-[#FF7800]">{data.market_heat}</span>
            </div>
          </div>
        </div>

        {/* Insight Box */}
        <div className="flex items-start gap-3 p-3 bg-[#333333]/30 rounded-lg border border-[#333333]/50">
          <TrendingDown className="text-muted-foreground w-5 h-5 mt-0.5" />
          <div>
            <span className="text-xs text-muted-foreground block mb-1">風險洞察</span>
            <p className="text-sm font-medium text-[#d1d5dc] leading-relaxed">
              {data.insight}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
