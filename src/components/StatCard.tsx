import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

interface StatCardProps {
  title: string;
  value: string;
  unit: string;
  change: number;
  icon: React.ElementType;
  color: string;
  sparklineData: { value: number }[];
}

export const StatCard = ({ title, value, unit, change, icon: Icon, color, sparklineData }: StatCardProps) => {
  const isPositive = change >= 0;

  // Safe check for color class
  const textColor = color.replace('bg-', 'text-');
  const bgColor = color.replace('bg-', 'bg-');

  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className={`p-2 rounded-xl ${bgColor} bg-opacity-10 dark:bg-opacity-20`}>
          <Icon className={`w-5 h-5 ${textColor}`} />
        </div>
        <div className={`flex items-center gap-0.5 text-xs font-bold ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {Math.abs(change)}%
        </div>
      </div>
      
      <div>
        <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">{title}</p>
        <div className="flex items-baseline gap-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-none">{value}</h3>
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">{unit}</span>
        </div>
      </div>

      <div className="h-8 mt-3 -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sparklineData}>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={isPositive ? '#10b981' : '#f43f5e'} 
              strokeWidth={1.5}
              fillOpacity={0.1} 
              fill={isPositive ? '#10b981' : '#f43f5e'} 
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
