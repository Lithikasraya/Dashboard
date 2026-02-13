import React, { useState, useRef } from 'react';
import {
  Zap,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Wind,
  Thermometer,
} from 'lucide-react';
import { StatCard } from './StatCard';
import { PowerCurveChart, NetMeteringChart } from './Charts';
import { PerformanceCards } from './PerformanceCards';
import { ProductionConsumption } from './ProductionConsumption';

const MOCK_POWER_DATA_TODAY = [
  { time: '06:00', power: 0.1 },
  { time: '07:00', power: 0.5 },
  { time: '08:00', power: 1.2 },
  { time: '09:00', power: 2.1 },
  { time: '10:00', power: 3.4 },
  { time: '11:00', power: 4.2 },
  { time: '12:00', power: 4.8 },
  { time: '13:00', power: 4.5 },
  { time: '14:00', power: 3.8 },
  { time: '15:00', power: 2.9 },
  { time: '16:00', power: 1.8 },
  { time: '17:00', power: 0.6 },
  { time: '18:00', power: 0.1 },
];

const MOCK_POWER_DATA_WEEK = [
  { time: 'Mon', power: 28.5 },
  { time: 'Tue', power: 32.1 },
  { time: 'Wed', power: 25.8 },
  { time: 'Thu', power: 31.2 },
  { time: 'Fri', power: 35.4 },
  { time: 'Sat', power: 22.0 },
  { time: 'Sun', power: 20.5 },
];

const MOCK_POWER_DATA_MONTH = [
  { time: 'Week 1', power: 195 },
  { time: 'Week 2', power: 218 },
  { time: 'Week 3', power: 205 },
  { time: 'Week 4', power: 225 },
];

const MOCK_NET_DATA = [
  { day: 'Mon', export: 18, import: 5 },
  { day: 'Tue', export: 22, import: 4 },
  { day: 'Wed', export: 15, import: 7 },
  { day: 'Thu', export: 20, import: 6 },
  { day: 'Fri', export: 25, import: 3 },
  { day: 'Sat', export: 12, import: 10 },
  { day: 'Sun', export: 10, import: 12 },
];

const SPARKLINE_DATA = [
  { value: 10 },
  { value: 15 },
  { value: 8 },
  { value: 20 },
  { value: 18 },
  { value: 25 },
  { value: 22 },
];

export const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState<'today' | 'week' | 'month'>('today');
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 11));
  const dateInputRef = useRef<HTMLInputElement>(null);

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  let powerData = MOCK_POWER_DATA_TODAY;
  let exportValue = '18.2';
  let importValue = '3.5';

  if (timePeriod === 'week') {
    powerData = MOCK_POWER_DATA_WEEK;
    exportValue = '142.5';
    importValue = '28.3';
  } else if (timePeriod === 'month') {
    powerData = MOCK_POWER_DATA_MONTH;
    exportValue = '598.2';
    importValue = '125.6';
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            3kW Solar Plant
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Live monitoring of your solar ecosystem
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-100 dark:border-slate-800">
            {(['today', 'week', 'month'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setTimePeriod(period)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${
                  timePeriod === period
                    ? 'bg-amber-500 text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {period.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              ref={dateInputRef}
              type="date"
              className="absolute opacity-0 pointer-events-none"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
            <button
              onClick={() => dateInputRef.current?.showPicker?.()}
              className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border text-sm font-semibold"
            >
              <Calendar size={16} />
              {formatDate(selectedDate)}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard title="Live Power" value="4.20" unit="kW" change={5} color="bg-yellow-500" icon={Zap} sparklineData={SPARKLINE_DATA} />
        <StatCard title="Voltage" value="240" unit="V" change={2} color="bg-blue-500" icon={Activity} sparklineData={SPARKLINE_DATA} />
        <StatCard title="Current" value="18.5" unit="A" change={1} color="bg-purple-500" icon={Wind} sparklineData={SPARKLINE_DATA} />
        <StatCard title="Grid Export" value={exportValue} unit="kWh" change={8} color="bg-green-500" icon={ArrowUpRight} sparklineData={SPARKLINE_DATA} />
        <StatCard title="Grid Import" value={importValue} unit="kWh" change={-3} color="bg-red-500" icon={ArrowDownRight} sparklineData={SPARKLINE_DATA} />
        <StatCard title="Temperature" value="32" unit="°C" change={3} color="bg-orange-500" icon={Thermometer} sparklineData={SPARKLINE_DATA} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <PowerCurveChart data={powerData} />
          <NetMeteringChart data={MOCK_NET_DATA} />
          <PerformanceCards />
        </div>
        <ProductionConsumption />
      </div>
    </div>
  );
};

