import React from 'react';
import { BarChart, TrendingUp, TrendingDown } from 'lucide-react';

// Production and Consumption Component
export const ProductionConsumption = () => {
  const data = [
    { id: 1, time: '00:00', production: 0, consumption: 2.1, type: 'production' },
    { id: 2, time: '06:00', production: 0.5, consumption: 1.8, type: 'production' },
    { id: 3, time: '12:00', production: 4.8, consumption: 2.3, type: 'production' },
    { id: 4, time: '18:00', production: 0.1, consumption: 3.2, type: 'consumption' },
    { id: 5, time: '23:00', production: 0, consumption: 2.0, type: 'consumption' },
  ];

  const totalProduction = 28.5;
  const totalConsumption = 15.2;
  const netProduction = totalProduction - totalConsumption;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart size={20} className="text-amber-500" />
          Production & Consumption
        </h3>
      </div>
      
      <div className="max-h-64 overflow-y-auto">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800 last:border-0"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.time}</p>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <TrendingUp size={14} className="text-emerald-500" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">{item.production} kW</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingDown size={14} className="text-rose-500" />
                  <span className="text-xs text-slate-600 dark:text-slate-400">{item.consumption} kW</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-slate-50 dark:border-slate-800 space-y-3 bg-slate-50 dark:bg-slate-800/50">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Total Production</span>
          <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{totalProduction} kWh</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Total Consumption</span>
          <span className="text-base font-bold text-rose-600 dark:text-rose-400">{totalConsumption} kWh</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-slate-200 dark:border-slate-700">
          <span className="text-sm font-semibold text-slate-900 dark:text-white">Net Production</span>
          <span className="text-base font-bold text-amber-600 dark:text-amber-400">{netProduction} kWh</span>
        </div>
      </div>
    </div>
  );
};
