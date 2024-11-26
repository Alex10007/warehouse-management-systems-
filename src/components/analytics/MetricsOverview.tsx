import React from 'react';
import { TrendingUp, TrendingDown, Package, Users, Clock, DollarSign } from 'lucide-react';

const metrics = [
  {
    label: 'Total Revenue',
    value: '$124,592',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    label: 'Inventory Turnover',
    value: '4.2x',
    change: '+8.1%',
    trend: 'up',
    icon: Package,
  },
  {
    label: 'Employee Productivity',
    value: '87%',
    change: '-2.3%',
    trend: 'down',
    icon: Users,
  },
  {
    label: 'Processing Time',
    value: '1.8 days',
    change: '-15.2%',
    trend: 'up',
    icon: Clock,
  },
];

export function MetricsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <metric.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className={`flex items-center ${
              metric.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
            } text-sm font-medium`}>
              {metric.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {metric.change}
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">{metric.label}</h3>
          <p className="text-2xl font-semibold mt-1">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}