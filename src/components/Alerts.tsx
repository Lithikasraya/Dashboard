import React, { useState } from 'react';
import { 
  Bell, 
  Filter, 
  Download, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  Info, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  FilterX
} from 'lucide-react';

interface Alert {
  id: string;
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
  source: string;
  time: string;
  status: 'active' | 'resolved';
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
}

const INITIAL_ALERTS: Alert[] = [
  { id: '1', type: 'error', message: 'Inverter Overload Fault (DC Input High)', source: 'Inverter-A', time: '2026-02-08 10:45:00', status: 'active', severity: 'Critical' },
  { id: '2', type: 'warning', message: 'Low Generation Detected (Shadowing Effect?)', source: 'String-02', time: '2026-02-08 09:30:15', status: 'active', severity: 'Medium' },
  { id: '3', type: 'info', message: 'Grid Voltage Fluctuating (245V detected)', source: 'Smart Meter', time: '2026-02-08 08:15:40', status: 'resolved', severity: 'Low' },
  { id: '4', type: 'success', message: 'System Health Check Passed', source: 'Optimizer', time: '2026-02-08 06:00:00', status: 'resolved', severity: 'Low' },
  { id: '5', type: 'warning', message: 'Inverter Temperature High (85°C)', source: 'Inverter-A', time: '2026-02-07 16:45:00', status: 'resolved', severity: 'High' },
  { id: '6', type: 'error', message: 'String 3 Communication Lost', source: 'Logger', time: '2026-02-07 14:20:00', status: 'resolved', severity: 'High' },
  { id: '7', type: 'info', message: 'Software Update v4.2.0 Available', source: 'System', time: '2026-02-07 09:00:00', status: 'active', severity: 'Medium' },
];

export const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>(INITIAL_ALERTS);
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all');
  const [search, setSearch] = useState('');

  const filteredAlerts = alerts.filter(a => {
    const matchesFilter = filter === 'all' || a.status === filter;
    const matchesSearch = a.message.toLowerCase().includes(search.toLowerCase()) || 
                         a.source.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertOctagon className="text-rose-500" size={20} />;
      case 'warning': return <AlertTriangle className="text-amber-500" size={20} />;
      case 'success': return <CheckCircle2 className="text-emerald-500" size={20} />;
      default: return <Info className="text-blue-500" size={20} />;
    }
  };

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400';
      case 'High': return 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400';
      case 'Medium': return 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400';
      default: return 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400';
    }
  };

  const toggleStatus = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, status: a.status === 'active' ? 'resolved' : 'active' } : a));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">System Alerts</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage and resolve hardware notifications</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-100 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">
            <Download size={16} />
            <span className="hidden sm:inline">Export to CSV</span>
          </button>
          <button className="flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-amber-500/30">
            <CheckCircle2 size={16} />
            <span>Mark All Resolved</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex bg-slate-50 dark:bg-slate-800 p-1 rounded-xl w-full lg:w-fit">
            {(['all', 'active', 'resolved'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`flex-1 lg:flex-none px-6 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                  filter === t 
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-fit">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search alerts or source..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400">
              <Filter size={16} />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Severity & Message</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {filteredAlerts.length > 0 ? (
                filteredAlerts.map((alert) => (
                  <tr key={alert.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex gap-4">
                        <div className="mt-1">{getIcon(alert.type)}</div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${getSeverityStyle(alert.severity)}`}>
                              {alert.severity}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID: #{alert.id}</span>
                          </div>
                          <p className={`font-semibold ${alert.status === 'active' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-500 line-through'}`}>
                            {alert.message}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-600 dark:text-slate-400">
                        {alert.source}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {alert.time}
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => toggleStatus(alert.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                          alert.status === 'active' 
                            ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' 
                            : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${alert.status === 'active' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                        {alert.status}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <FilterX size={48} className="mb-4 opacity-20" />
                      <p className="font-bold text-lg">No alerts found</p>
                      <p className="text-sm">Try adjusting your filters or search terms</p>
                      <button 
                        onClick={() => {setFilter('all'); setSearch('');}} 
                        className="mt-4 text-amber-500 font-bold hover:underline"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Showing <span className="text-slate-900 dark:text-white font-bold">{filteredAlerts.length}</span> of <span className="text-slate-900 dark:text-white font-bold">{alerts.length}</span> system alerts
          </p>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-100 dark:border-slate-800 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>
              <ChevronLeft size={16} />
            </button>
            <button className="p-2 border border-slate-100 dark:border-slate-800 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
