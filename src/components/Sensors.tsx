import React, { useState } from 'react';
import { Thermometer, Droplets, Wind, Battery, TrendingUp } from 'lucide-react';

const TEMP_DATA = [
  { time: '00:00', value: 18 },
];

const HUMIDITY_DATA = [];
const WIND_DATA = [];
const BATTERY_DATA = [];

const MAINTENANCE_DATA = [];

const MAINTENANCE_HISTORY = [];

export const Sensors = () => {
  const sensors = [
    {
      id: 'temperature',
      name: 'Temperature Sensor',
      icon: Thermometer,
      score: 96,
      value: '32°C',
      status: 'Excellent',
      accuracy: '99.2%',
      uptime: '99.8%',
      color: 'text-red-500',
      bgColor: 'bg-red-500',
    },
    {
      id: 'humidity',
      name: 'Humidity Sensor',
      icon: Droplets,
      score: 92,
      value: '45%',
      status: 'Very Good',
      accuracy: '98.5%',
      uptime: '99.5%',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500',
    },
    {
      id: 'wind',
      name: 'Wind Speed Sensor',
      icon: Wind,
      score: 88,
      value: '12 m/s',
      status: 'Good',
      accuracy: '97.8%',
      uptime: '98.9%',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500',
    },
    {
      id: 'battery',
      name: 'Battery Unit',
      icon: Battery,
      score: 98,
      value: '98%',
      status: 'Excellent',
      accuracy: '99.8%',
      uptime: '99.9%',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500',
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-emerald-600 dark:text-emerald-400';
    if (score >= 90) return 'text-blue-600 dark:text-blue-400';
    if (score >= 80) return 'text-amber-600 dark:text-amber-400';
    return 'text-rose-600 dark:text-rose-400';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 95) return 'bg-emerald-50 dark:bg-emerald-500/10';
    if (score >= 90) return 'bg-blue-50 dark:bg-blue-500/10';
    if (score >= 80) return 'bg-amber-50 dark:bg-amber-500/10';
    return 'bg-rose-50 dark:bg-rose-500/10';
  };

  const overallScore = Math.round((96 + 92 + 88 + 98) / 4);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sensors</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Current sensor readings</p>
      </div>

      {/* Individual Sensor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sensors.map((sensor) => {
          const Icon = sensor.icon;
          return (
            <div key={sensor.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
              {/* Header with Icon */}
              <div className={`p-3 rounded-2xl ${sensor.bgColor} bg-opacity-10 mb-4 w-fit`}>
                <Icon className={sensor.color} size={24} />
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">{sensor.name}</h3>

              {/* Current Value - Large Display */}
              <p className={`text-4xl font-bold ${sensor.color}`}>{sensor.value}</p>
            </div>
          );
        })}
      </div>

      {/* Performance Section */}
      <div className="space-y-4 mt-8">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sensor Performance</h3>
        
        {/* Performance Scores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sensors.map((sensor) => (
            <div key={sensor.id} className={`${getScoreBgColor(sensor.score)} p-4 rounded-2xl border border-slate-200 dark:border-slate-700`}>
              <div className="mb-3">
                <p className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mb-2">{sensor.name}</p>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Performance</span>
                <TrendingUp className={getScoreColor(sensor.score)} size={16} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-3xl font-bold ${getScoreColor(sensor.score)}`}>{sensor.score}</span>
                <span className={`text-sm font-semibold ${getScoreColor(sensor.score)}`}>/100</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-3 overflow-hidden">
                <div 
                  className={`h-full ${sensor.score >= 95 ? 'bg-emerald-600' : sensor.score >= 90 ? 'bg-blue-600' : 'bg-amber-600'}`}
                  style={{ width: `${sensor.score}%` }}
                />
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between">
                  <span className="text-[10px] text-slate-600 dark:text-slate-400">Accuracy</span>
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">{sensor.accuracy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-slate-600 dark:text-slate-400">Uptime</span>
                  <span className="text-[10px] font-semibold text-slate-900 dark:text-white">{sensor.uptime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
