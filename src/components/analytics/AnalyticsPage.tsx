import React, { useState } from 'react';
import { GridLayout } from './GridLayout';
import { MetricsOverview } from './MetricsOverview';
import { InventoryAnalytics } from './InventoryAnalytics';
import { ProductivityChart } from './ProductivityChart';
import { TrendAnalysis } from './TrendAnalysis';
import { Filter, Calendar, Download, Settings } from 'lucide-react';

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('7d');

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Real-time insights and performance metrics</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Date Range Selector */}
          <div className="flex items-center bg-white rounded-lg border shadow-sm">
            <button className="p-2 hover:bg-gray-50">
              <Calendar className="w-5 h-5 text-gray-600" />
            </button>
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border-l focus:outline-none"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg" title="Filter">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg" title="Export">
              <Download className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg" title="Settings">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <GridLayout>
        <div key="metrics" className="col-span-4">
          <MetricsOverview />
        </div>
        <div key="inventory" className="col-span-2">
          <InventoryAnalytics />
        </div>
        <div key="productivity" className="col-span-2">
          <ProductivityChart />
        </div>
        <div key="trends" className="col-span-4">
          <TrendAnalysis />
        </div>
      </GridLayout>
    </div>
  );
}