import React from 'react';
import { motion } from 'motion/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from 'recharts';

const rawData = [
  {
    "year": 2017,
    "user_salary": 390000,
    "p50_market_salary": 620000,
    "role": "產品企劃助理",
    "status": "past",
    "insight": "低於市場 (-37%)"
  },
  {
    "year": 2018,
    "user_salary": 390000,
    "p50_market_salary": 670000,
    "role": "產品企劃助理",
    "status": "past",
    "insight": "差距擴大"
  },
  {
    "year": 2019,
    "user_salary": 550000,
    "p50_market_salary": 730000,
    "role": "產品企劃",
    "status": "past",
    "insight": "稍微拉近"
  },
  {
    "year": 2020,
    "user_salary": 550000,
    "p50_market_salary": 800000,
    "role": "產品企劃",
    "status": "past",
    "insight": "薪資停滯"
  },
  {
    "year": 2021,
    "user_salary": 550000,
    "p50_market_salary": 870000,
    "role": "產品企劃",
    "status": "past",
    "insight": "落後市場幅度加大"
  },
  {
    "year": 2022,
    "user_salary": 550000,
    "p50_market_salary": 950000,
    "role": "產品企劃",
    "status": "past",
    "insight": "急需調整"
  },
  {
    "year": 2023,
    "user_salary": 550000,
    "p50_market_salary": 1050000,
    "role": "資深產品企劃",
    "status": "past",
    "insight": "嚴重低估 (-47%)"
  },
  {
    "year": 2024,
    "user_salary": 550000,
    "p50_market_salary": 1150000,
    "role": "資深產品企劃",
    "status": "past",
    "insight": "落差達 60 萬"
  },
  {
    "year": 2025,
    "user_salary": 550000,
    "p50_market_salary": 1250000,
    "role": "產品經理",
    "status": "current",
    "insight": "您的薪資可能已過時"
  },
  {
    "year": 2026,
    "user_salary": 550000,
    "p50_market_salary": 1360000,
    "role": "產品經理主管 (目標)",
    "status": "target",
    "insight": "立即更新以查看真實身價"
  }
];

const data = rawData.map(item => ({
  name: item.year.toString(),
  salary: item.user_salary / 10000,
  market: item.p50_market_salary / 10000,
  insight: item.insight,
  role: item.role,
  status: item.status
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    const currentSalary = dataPoint.salary;
    const marketSalary = dataPoint.market;
    const diff = marketSalary - currentSalary;

    return (
      <div className="bg-[#1A1A1A] border border-[#333333] p-3 rounded-lg shadow-xl min-w-[200px] z-50">
        <p className="text-foreground font-bold mb-1">{label} - {dataPoint.role}</p>
        <div className="space-y-1 text-xs">
          <p className="text-[#3b82f6]">實際: {currentSalary}萬</p>
          <p className="text-[#ef4444]">市場: {marketSalary}萬</p>
          <p className="text-accent font-medium pt-1 border-t border-[#333333] mt-1">
            差距: -{diff}萬
          </p>
          <p className="text-[#999999] italic mt-1 border-t border-[#333333] pt-1">
            {dataPoint.insight}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export const MarketValueChart = () => {
  // Calculate the gap for the "current" status (2025)
  const currentData = data.find(d => d.status === 'current') || data[data.length - 1];
  const gap = currentData.market - currentData.salary;

  return (
    <motion.div
      className="bg-[#262626] border border-[#333333] rounded-[12px] p-5 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-white text-[20px]">薪資競爭力</h3>
          <p className="text-[13px] text-[#c5c5c5]">了解你的薪水行情是否合理</p>
        </div>
        <motion.div
          className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 font-bold shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse text-[13px] text-[#ff2c2e]"
        >
          -{gap} 萬
        </motion.div>
      </div>

      <div className="h-[200px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#666666" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="#666666" 
              tick={{ fontSize: 10 }} 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#333333', strokeWidth: 1 }} />
            
            {/* Market Value Line (Red Dashed) */}
            <Line
              type="monotone"
              dataKey="market"
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 6, fill: '#ef4444', stroke: '#1A1A1A', strokeWidth: 2 }}
            />
            
            {/* Real Value Line (Blue Solid) */}
            <Line
              type="monotone"
              dataKey="salary"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4, fill: '#1A1A1A', stroke: '#3b82f6', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#ffffff', stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 text-center">
        您的薪資目前低於市場行情，建議強化核心決策能力以提升議價空間。
      </p>
    </motion.div>
  );
};
