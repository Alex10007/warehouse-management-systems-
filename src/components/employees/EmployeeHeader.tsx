import React from 'react';
import { Plus, Download, Upload, Filter } from 'lucide-react';

export function EmployeeHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Employee Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your workforce and track employee performance
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Import
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>
    </div>
  );
}