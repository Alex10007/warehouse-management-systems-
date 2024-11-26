import React from 'react';
import { Users, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

const stats = [
  {
    label: 'Total Employees',
    value: '142',
    change: '+3.2%',
    icon: Users,
    color: 'blue',
  },
  {
    label: 'On Duty',
    value: '87',
    change: '+5.0%',
    icon: Clock,
    color: 'green',
  },
  {
    label: 'Productivity',
    value: '94.2%',
    change: '+2.3%',
    icon: TrendingUp,
    color: 'purple',
  },
  {
    label: 'Attendance Issues',
    value: '3',
    change: '-1.5%',
    icon: AlertTriangle,
    color: 'yellow',
  },
];

export function EmployeeStats() {
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