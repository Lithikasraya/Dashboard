import React from 'react';
import { Download, Filter, Search, MoreHorizontal, Zap, Battery } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const MOCK_MONTHLY_DATA = [
  { month: 'Jan', generation: 520, export: 400, import: 120 },
  { month: 'Feb', generation: 642, export: 510, import: 90 },
  { month: 'Mar', generation: 710, export: 580, import: 130 },
  { month: 'Apr', generation: 850, export: 720, import: 80 },
  { month: 'May', generation: 920, export: 800, import: 70 },
  { month: 'Jun', generation: 450, export: 300, import: 200 },
];

export const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Historical Analytics</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Deep dive into your energy consumption patterns</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              const csv = 'Month,Generation,Export,Import\nJan,520,400,120\nFeb,642,510,90\nMar,710,580,130\nApr,850,720,80\nMay,920,800,70\nJun,450,300,200';
              const blob = new Blob([csv], { type: 'text/csv' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'solar-analytics.csv';
              a.click();
            }}
            className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-100 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Download size={16} />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-amber-500/30">
            <Filter size={16} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-slate-900 dark:text-white">Monthly Generation vs Grid Activity</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Generation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Export</span>
              </div>
            </div>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_MONTHLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-800" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="generation" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                <Bar dataKey="export" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden">
            <Zap className="absolute -right-4 -bottom-4 w-32 h-32 text-indigo-500 opacity-20 rotate-12" />
            <p className="text-indigo-100 text-sm font-medium mb-1">Total Savings Estimate</p>
            <h4 className="text-3xl font-bold mb-4">₹84,250.00</h4>
            <div className="flex items-center gap-2 text-indigo-100 text-xs bg-indigo-500/50 w-fit px-2 py-1 rounded-lg">
              <Zap size={14} />
              <span>Based on ₹7.50/unit tariff</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Efficiency Trends</h3>
            <div className="space-y-4">
              {[
                { label: 'Inverter Conversion', value: '98.2%', progress: 98 },
                { label: 'Panel Performance', value: '84.5%', progress: 84 },
                { label: 'Self Consumption', value: '32.0%', progress: 32 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-slate-900 dark:text-white">{item.value}</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 rounded-full" 
                      style={{ width: `${item.progress}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="font-bold text-slate-900 dark:text-white">Detailed Daily Logs</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search logs..." 
              className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm w-full md:w-64 focus:ring-2 focus:ring-amber-500/20"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Generation (kWh)</th>
                <th className="px-6 py-4">Export (kWh)</th>
                <th className="px-6 py-4">Import (kWh)</th>
                <th className="px-6 py-4">Efficiency</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {[
                { date: 'Feb 07, 2026', gen: '26.4', exp: '20.1', imp: '2.5', eff: '94%', status: 'Optimal' },
                { date: 'Feb 06, 2026', gen: '24.8', exp: '18.5', imp: '3.1', eff: '92%', status: 'Optimal' },
                { date: 'Feb 05, 2026', gen: '12.2', exp: '4.2', imp: '12.4', eff: '65%', status: 'Cloudy' },
                { date: 'Feb 04, 2026', gen: '28.1', exp: '22.4', imp: '1.8', eff: '96%', status: 'Optimal' },
                { date: 'Feb 03, 2026', gen: '25.5', exp: '19.8', imp: '2.9', eff: '93%', status: 'Optimal' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{row.date}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.gen}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.exp}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.imp}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: row.eff }} />
                      </div>
                      <span>{row.eff}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                      row.status === 'Optimal' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
