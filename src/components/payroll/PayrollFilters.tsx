import React from 'react';
import { Search, Filter } from 'lucide-react';
import { usePayrollStore } from '../../stores/payrollStore';

export function PayrollFilters() {
  const { filters, setFilters } = usePayrollStore();

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <select
          value={filters.period}
          onChange={(e) => setFilters({ period: e.target.value })}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
        >
          <option value="March 2024">March 2024</option>
          <option value="February 2024">February 2024</option>
          <option value="January 2024">January 2024</option>
        </select>

        <select
          value={filters.department}
          onChange={(e) => setFilters({ department: e.target.value })}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Departments</option>
          <option value="warehouse_a">Warehouse A</option>
          <option value="warehouse_b">Warehouse B</option>
          <option value="warehouse_c">Warehouse C</option>
        </select>

        <select
          value={filters.status}
          onChange={(e) => setFilters({ status: e.target.value })}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="processed">Processed</option>
          <option value="error">Error</option>
        </select>

        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <Filter className="w-4 h-4" />
          More Filters
        </button>
      </div>
    </div>
  );
}