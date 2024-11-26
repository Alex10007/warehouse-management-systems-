import React from 'react';
import { 
  Package, 
  Users, 
  TrendingUp, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const stats = [
  {
    icon: Package,
    label: 'Total Inventory',
    value: '24,521',
    change: '+12.5%',
    trend: 'up'
  },
  {
    icon: Users,
    label: 'Active Employees',
    value: '142',
    change: '+3.2%',
    trend: 'up'
  },
  {
    icon: TrendingUp,
    label: 'Utilization Rate',
    value: '87.3%',
    change: '-2.1%',
    trend: 'down'
  },
  {
    icon: AlertTriangle,
    label: 'Low Stock Items',
    value: '23',
    change: '+5',
    trend: 'up'
  }
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value, change, trend }) => (
          <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              {trend === 'up' ? (
                <div className="flex items-center text-emerald-600 text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  {change}
                </div>
              ) : (
                <div className="flex items-center text-red-600 text-sm">
                  <ArrowDownRight className="w-4 h-4" />
                  {change}
                </div>
              )}
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{label}</h3>
            <p className="text-2xl font-semibold mt-1">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New shipment arrived</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Low Stock Alerts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Product XYZ running low</p>
                  <p className="text-xs text-gray-500">5 units remaining</p>
                </div>
                <button className="px-3 py-1 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg">
                  Reorder
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}