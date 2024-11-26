import React from 'react';
import { DollarSign, Users, TrendingUp, Clock } from 'lucide-react';
import { usePayrollStore } from '../../stores/payrollStore';

export function PayrollStats() {
  const stats = usePayrollStore((state) => state.stats);

  const statItems = [
    {
      label: 'Total Payroll',
      value: `$${stats.totalPayroll.toLocaleString()}`,
      icon: DollarSign,
      color: 'blue',
    },
    {
      label: 'Total Employees',
      value: stats.totalEmployees,
      icon: Users,
      color: 'green',
    },
    {
      label: 'Average Salary',
      value: `$${stats.averageSalary.toLocaleString()}`,
      icon: TrendingUp,
      color: 'purple',
    },
    {
      label: 'Overtime Pay',
      value: `$${stats.overtimePay.toLocaleString()}`,
      icon: Clock,
      color: 'yellow',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 bg-${color}-50 rounded-lg`}>
              <Icon className={`w-6 h-6 text-${color}-600`} />
            </div>
          </div>
          <h3 className="text-gray-500 text-sm font-medium">{label}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
      ))}
    </div>
  );
}