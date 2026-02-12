import React from 'react';
import { Target, Zap, Leaf, ShieldCheck } from 'lucide-react';

export const PerformanceCards = () => {
  const metrics = [
    { 
      label: 'Exp vs Actual', 
      value: '98.5%', 
      detail: 'Expected: 24.5 kWh', 
      icon: Target, 
      color: 'text-indigo-500', 
      bg: 'bg-indigo-50 dark:bg-indigo-500/10' 
    },
    { 
      label: 'Performance Ratio', 
      value: '82.4%', 
      detail: 'Industry Avg: 78%', 
      icon: Zap, 
      color: 'text-amber-500', 
      bg: 'bg-amber-50 dark:bg-amber-500/10' 
    },
    { 
      label: 'CO₂ Reduction', 
      value: '1.2 Tons', 
      detail: 'Last 30 days', 
      icon: Leaf, 
      color: 'text-emerald-500', 
      bg: 'bg-emerald-50 dark:bg-emerald-500/10' 
    },
    { 
      label: 'System Health', 
      value: 'Optimal', 
      detail: 'Inverter & Grid OK', 
      icon: ShieldCheck, 
      color: 'text-blue-500', 
      bg: 'bg-blue-50 dark:bg-blue-500/10' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, i) => (
        <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${item.bg}`}>
              <item.icon className={item.color} size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.label}</p>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.value}</h4>
              <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">{item.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
