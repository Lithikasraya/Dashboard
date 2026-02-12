import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  Activity, 
  Database, 
  RefreshCw, 
  HardDrive, 
  Cpu, 
  ShieldCheck,
  CheckCircle2,
  Clock,
  X,
  Bell,
  Lock,
  Monitor,
  Save,
  Mail,
  Globe
} from 'lucide-react';

export const Admin = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    systemName: 'Solar Monitoring System',
    timezone: 'Asia/Kolkata',
    dataRetention: '90',
    emailNotifications: true,
    smsNotifications: false,
    alertThreshold: '80',
    autoSync: true,
    displayUnits: 'metric',
  });

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
    setShowSettings(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Installer Dashboard</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">System configuration and hardware monitoring</p>
        </div>
        <button 
          onClick={() => setShowSettings(true)}
          className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors cursor-pointer"
        >
          <Settings size={16} />
          <span>Settings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'System Uptime', value: '142 Days', icon: Clock, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
          { label: 'Active Users', value: '4 Accounts', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
          { label: 'Inverter Status', value: 'Connected', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
          { label: 'Storage Sync', value: 'Synced', icon: Database, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${stat.bg}`}>
              <stat.icon className={stat.color} size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white">Device Logs</h3>
              <button className="flex items-center gap-2 text-xs font-bold text-indigo-500 hover:text-indigo-600 uppercase tracking-wider">
                <RefreshCw size={14} />
                <span>Sync</span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                { time: '12:04:15', type: 'INFO', msg: 'Inverter frequency stabilized at 50.02Hz', module: 'Inverter-A' },
                { time: '11:58:20', type: 'DEBUG', msg: 'MPPT algorithm tracking peak voltage at 420V', module: 'Optimizer-01' },
                { time: '11:45:00', type: 'INFO', msg: 'Data packet sent successfully to cloud gateway', module: 'Gateway' },
              ].map((log, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 transition-all">
                  <div className="text-[10px] font-mono text-slate-400 py-1">{log.time}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        log.type === 'INFO' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {log.type}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500">{log.module}</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{log.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">Hardware</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <Cpu className="text-slate-600 dark:text-slate-400" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">SunGrow SG5K-D</h5>
                <p className="text-xs text-slate-500">Inverter • v2.4.1</p>
                <div className="flex items-center gap-1 mt-1 text-emerald-500">
                  <CheckCircle2 size={12} />
                  <span className="text-[10px] font-bold uppercase">Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <HardDrive className="text-slate-600 dark:text-slate-400" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 dark:text-white text-sm">SolarData Gateway</h5>
                <p className="text-xs text-slate-500">Logger • SN: 2849103</p>
                <div className="flex items-center gap-1 mt-1 text-emerald-500">
                  <CheckCircle2 size={12} />
                  <span className="text-[10px] font-bold uppercase">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-xl">
                  <Settings className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">System Settings</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Configure your dashboard preferences</p>
                </div>
              </div>
              <button 
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                <X className="text-slate-500" size={20} />
              </button>
            </div>

            {/* Settings Content */}
            <div className="p-6 space-y-6">
              {/* System Configuration */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Monitor className="text-indigo-600 dark:text-indigo-400" size={18} />
                  <h4 className="font-bold text-slate-900 dark:text-white">System Configuration</h4>
                </div>
                <div className="space-y-3 pl-7">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">System Name</label>
                    <input 
                      type="text" 
                      value={settings.systemName}
                      onChange={(e) => setSettings({...settings, systemName: e.target.value})}
                      className="w-full mt-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Timezone</label>
                      <select 
                        value={settings.timezone}
                        onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                        className="w-full mt-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                      >
                        <option value="Asia/Kolkata">India (IST +5:30)</option>
                        <option value="America/New_York">USA - New York (EST -5:00)</option>
                        <option value="America/Los_Angeles">USA - Los Angeles (PST -8:00)</option>
                        <option value="America/Chicago">USA - Chicago (CST -6:00)</option>
                        <option value="Europe/London">United Kingdom (GMT +0:00)</option>
                        <option value="Europe/Paris">France (CET +1:00)</option>
                        <option value="Europe/Berlin">Germany (CET +1:00)</option>
                        <option value="Asia/Dubai">UAE - Dubai (GST +4:00)</option>
                        <option value="Asia/Singapore">Singapore (SGT +8:00)</option>
                        <option value="Asia/Tokyo">Japan (JST +9:00)</option>
                        <option value="Asia/Shanghai">China (CST +8:00)</option>
                        <option value="Australia/Sydney">Australia - Sydney (AEDT +11:00)</option>
                        <option value="Pacific/Auckland">New Zealand (NZDT +13:00)</option>
                        <option value="Africa/Cairo">Egypt (EET +2:00)</option>
                        <option value="America/Toronto">Canada - Toronto (EST -5:00)</option>
                        <option value="America/Sao_Paulo">Brazil (BRT -3:00)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Display Units</label>
                      <select 
                        value={settings.displayUnits}
                        onChange={(e) => setSettings({...settings, displayUnits: e.target.value})}
                        className="w-full mt-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                      >
                        <option value="metric">Metric (kW, °C)</option>
                        <option value="imperial">Imperial (kW, °F)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Bell className="text-indigo-600 dark:text-indigo-400" size={18} />
                  <h4 className="font-bold text-slate-900 dark:text-white">Notifications</h4>
                </div>
                <div className="space-y-3 pl-7">
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Email Notifications</p>
                      <p className="text-xs text-slate-500">Receive alerts via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={settings.emailNotifications}
                        onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:ring-2 peer-focus:ring-indigo-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">SMS Notifications</p>
                      <p className="text-xs text-slate-500">Receive alerts via SMS</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={settings.smsNotifications}
                        onChange={(e) => setSettings({...settings, smsNotifications: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:ring-2 peer-focus:ring-indigo-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Alert Threshold (%)</label>
                    <input 
                      type="number" 
                      value={settings.alertThreshold}
                      onChange={(e) => setSettings({...settings, alertThreshold: e.target.value})}
                      className="w-full mt-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>

              {/* Data Management */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Database className="text-indigo-600 dark:text-indigo-400" size={18} />
                  <h4 className="font-bold text-slate-900 dark:text-white">Data Management</h4>
                </div>
                <div className="space-y-3 pl-7">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Data Retention (Days)</label>
                    <select 
                      value={settings.dataRetention}
                      onChange={(e) => setSettings({...settings, dataRetention: e.target.value})}
                      className="w-full mt-1 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none"
                    >
                      <option value="30">30 Days</option>
                      <option value="90">90 Days</option>
                      <option value="180">180 Days</option>
                      <option value="365">1 Year</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Auto Sync</p>
                      <p className="text-xs text-slate-500">Automatically sync data to cloud</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={settings.autoSync}
                        onChange={(e) => setSettings({...settings, autoSync: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:ring-2 peer-focus:ring-indigo-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveSettings}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transition-colors"
              >
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
