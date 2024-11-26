import React from 'react';
import { Users, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

const stats = [
  {
    label: 'Scheduled Employees',
    value: '87',
    change: '+5.0%',
    icon: Users,
    color: 'blue',
  },
  {
    label: 'Total Hours',
    value: '1,240',
    change: '+2.3%',
    icon: Clock,
    color: 'green',
  },
  {
    label: 'Shift Coverage',
    value: '94.2%',
    change: '+1.5%',
    icon: TrendingUp,
    color: 'purple',
  },
  {
    label: 'Schedule Conflicts',
    value: '2',
    change: '-50%',
    icon: AlertTriangle,
    color: 'yellow',
  },
];

export function SchedulingStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ label, value, change, icon: Icon, color }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 bg-${color}-50 rounded-lg`}>
              <Icon className={`w-6 h-6 text-${color}-600`} />
            </div>
            <span className={`text-sm font-medium ${
              change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
            }`}>
              {change}
            </span>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">{label}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
      ))}
    </div>
  );
}