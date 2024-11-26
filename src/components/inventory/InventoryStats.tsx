import React from 'react';
import { Package, AlertTriangle, TrendingUp, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Total Items',
    value: '2,431',
    change: '+12.5%',
    icon: Package,
    color: 'blue',
  },
  {
    label: 'Low Stock Items',
    value: '45',
    change: '+5.0%',
    icon: AlertTriangle,
    color: 'yellow',
  },
  {
    label: 'Turnover Rate',
    value: '3.2x',
    change: '+2.3%',
    icon: TrendingUp,
    color: 'green',
  },
  {
    label: 'Avg. Days in Stock',
    value: '24.5',
    change: '-1.5%',
    icon: Clock,
    color: 'purple',
  },
];

export function InventoryStats() {
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