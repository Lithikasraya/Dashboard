import React, { useState, useEffect } from 'react';
import { Thermometer, Droplets, Wind, Gauge, Sprout, Camera, TrendingUp, Video } from 'lucide-react';

const TEMP_DATA = [
  { time: '00:00', value: 18 },
];

const HUMIDITY_DATA = [];
const WIND_DATA = [];
const BATTERY_DATA = [];

const MAINTENANCE_DATA = [];

const MAINTENANCE_HISTORY = [];

export const Sensors = () => {
  const [sprinklerOn, setSprinklerOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second when camera is on
  useEffect(() => {
    if (cameraOn) {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cameraOn]);

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
      id: 'sds011',
      name: 'SDS011 Air Quality',
      icon: Gauge,
      score: 94,
      value: '25 μg/m³',
      status: 'Good',
      accuracy: '98.9%',
      uptime: '99.6%',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500',
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

  const overallScore = Math.round((96 + 92 + 88 + 94) / 4);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sensors & Maintenance</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Current sensor readings and maintenance controls</p>
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

      {/* Maintenance Controls */}
      <div className="space-y-4 mt-8">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Maintenance Controls</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Water Sprinkler Control */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${sprinklerOn ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-700'} bg-opacity-20`}>
                  <Sprout className={sprinklerOn ? 'text-blue-500' : 'text-slate-500'} size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Water Sprinkler</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Panel cleaning system</p>
                </div>
              </div>
              <button
                onClick={() => setSprinklerOn(!sprinklerOn)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
                  sprinklerOn 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {sprinklerOn ? 'ON' : 'OFF'}
              </button>
            </div>
            {sprinklerOn && (
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl">
                <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold">✓ Sprinkler system is active</p>
              </div>
            )}
          </div>

          {/* Live Camera Control */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${cameraOn ? 'bg-red-500' : 'bg-slate-300 dark:bg-slate-700'} bg-opacity-20`}>
                  <Camera className={cameraOn ? 'text-red-500' : 'text-slate-500'} size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Live Camera</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Real-time monitoring</p>
                </div>
              </div>
              <button
                onClick={() => setCameraOn(!cameraOn)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
                  cameraOn 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {cameraOn ? 'ON' : 'OFF'}
              </button>
            </div>
            {cameraOn && (
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-500/10 rounded-xl">
                <p className="text-xs text-red-700 dark:text-red-400 font-semibold">🔴 Camera is streaming</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Live Camera Feed */}
      {cameraOn && (
        <div className="space-y-4 mt-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Live Camera Feed</h3>
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            {/* Camera Feed Container */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
              {/* Video Feed Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Video className="text-red-500 mx-auto animate-pulse" size={64} />
                  <p className="text-white font-bold text-xl">Solar Panel Array - Camera 01</p>
                  <p className="text-slate-300 text-sm">Live Monitoring Feed</p>
                </div>
              </div>

              {/* Live Indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 px-3 py-1.5 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-bold">LIVE</span>
              </div>

              {/* Timestamp */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span className="text-white text-xs font-mono">
                  {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                </span>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase">Camera ID</p>
                    <p className="text-sm font-bold">CAM-001</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase">Location</p>
                    <p className="text-sm font-bold">Solar Roof</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase">Resolution</p>
                    <p className="text-sm font-bold">1920x1080</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase">FPS</p>
                    <p className="text-sm font-bold">30 fps</p>
                  </div>
                </div>
              </div>

              {/* Grid Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
            </div>

            {/* Camera Stats */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Status</p>
                <p className="text-sm font-bold text-green-600 dark:text-green-400">● Active</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Bitrate</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">5.2 Mbps</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Latency</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">45 ms</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Uptime</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">99.8%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Recording</p>
                <p className="text-sm font-bold text-red-600 dark:text-red-400">● REC</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
