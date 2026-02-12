import React from 'react';
import { AlertTriangle, Info, CheckCircle2, ChevronRight } from 'lucide-react';

export const AlertsPanel = () => {
  const alerts = [
    { id: 1, type: 'error', message: 'Inverter Overload Fault', time: '10:45 AM', severity: 'High' },
    { id: 2, type: 'warning', message: 'Low Generation Detected', time: '09:30 AM', severity: 'Medium' },
    { id: 3, type: 'info', message: 'Grid Voltage Fluctuating', time: '08:15 AM', severity: 'Low' },
    { id: 4, type: 'success', message: 'Daily Backup Completed', time: '06:00 AM', severity: 'Info' },
    { id: 5, type: 'warning', message: 'Panel Cleaning Reminder', time: 'Yesterday', severity: 'Medium' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="text-rose-500" size={18} />;
      case 'warning': return <AlertTriangle className="text-amber-500" size={18} />;
      case 'success': return <CheckCircle2 className="text-emerald-500" size={18} />;
      default: return <Info className="text-blue-500" size={18} />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400';
      case 'Medium': return 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400';
      case 'Low': return 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400';
      default: return 'bg-slate-50 text-slate-600 dark:bg-slate-500/10 dark:text-slate-400';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden h-full flex flex-column">
      <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
        <h3 className="font-bold text-slate-900 dark:text-white">Recent Alerts</h3>
        <button className="text-xs font-bold text-amber-500 hover:text-amber-600 uppercase tracking-wider">View All</button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800 last:border-0"
          >
            <div className="mt-1">{getIcon(alert.type)}</div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate pr-2">
                  {alert.message}
                </p>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${getSeverityColor(alert.severity)}`}>
                  {alert.severity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">{alert.time}</span>
                <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-400">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
