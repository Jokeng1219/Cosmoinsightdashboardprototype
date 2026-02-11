import React from 'react';
import { motion } from 'motion/react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { subject: '產品感', A: 40, C: 40, fullMark: 100 },
  { subject: '數據分析', A: 40, C: 40, fullMark: 100 },
  { subject: '策略與商業思維', A: 40, C: 40, fullMark: 100 },
  { subject: '技術素養', A: 40, C: 80, fullMark: 100 },
  { subject: '執行與專案管理', A: 40, C: 80, fullMark: 100 },
  { subject: '溝通與領導力', A: 40, C: 80, fullMark: 100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // payload[0] usually corresponds to the first Radar defined (Target/C)
    // payload[1] usually corresponds to the second Radar defined (Self/A)
    // But Recharts payload order depends on definition order.
    // Let's find them by name or dataKey to be safe.
    
    const targetData = payload.find((p: any) => p.dataKey === 'C');
    const selfData = payload.find((p: any) => p.dataKey === 'A');

    const targetValue = targetData ? targetData.value : 0;
    const selfValue = selfData ? selfData.value : 0;
    
    const gap = targetValue - selfValue;

    return (
      <div className="bg-[#1A1A1A] border border-[#333333] p-3 rounded shadow-lg text-xs">
        <p className="text-white font-bold mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#bfbfbf]">自己</span>
            <span className="text-[#FF7800] font-medium">{selfValue}%</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#bfbfbf]">目標</span>
            <span className="text-[#8A4100] font-medium">{targetValue}%</span>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-[#333333] pt-1 mt-1">
            <span className="text-[#bfbfbf]">差距</span>
            <span className={`${gap > 0 ? 'text-red-400' : 'text-green-400'} font-medium`}>
              {gap > 0 ? `-${gap}%` : '達成'}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const CompetencyRadar = () => {
  return (
    <motion.div
      className="bg-[#262626] border border-[#333333] rounded-[12px] p-5 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mb-4 flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-white text-[20px]">職能戰力</h3>
          <p className="text-[#999999] text-[12px]">透過專業測驗了解你的技能程度</p>
        </div>
        <span className="font-medium text-[#FF7800] bg-[#FF7800]/10 px-2 py-1 rounded text-[13px]">
          等級 B → 目標 B+
        </span>
      </div>

      <div className="h-[250px] w-full relative min-w-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#444444" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#999999', fontSize: 10 }} 
            />
            
            <Tooltip content={<CustomTooltip />} cursor={false} />

            {/* Future Goal (Dark Brown Dashed) */}
            <Radar
              name="目標"
              dataKey="C"
              stroke="#8A4100"
              strokeWidth={1}
              strokeDasharray="4 4"
              fill="transparent"
              fillOpacity={0}
            />

            {/* Self (Brand Orange) */}
            <Radar
              name="自己"
              dataKey="A"
              stroke="#FF7800"
              strokeWidth={1}
              fill="#FF7800"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="flex justify-center items-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF7800]"></div>
          <span className="text-[#d1d5dc] text-xs">自己</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#8A4100]"></div>
          <span className="text-[#d1d5dc] text-xs">目標</span>
        </div>
      </div>
    </motion.div>
  );
};
