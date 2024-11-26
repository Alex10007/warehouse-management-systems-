import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Download, FileText } from 'lucide-react';
import { useScheduleStore } from '../../stores/scheduleStore';
import { format } from 'date-fns';

export function SchedulingHeader() {
  const { viewMode, selectedDate, setViewMode, setSelectedDate } = useScheduleStore();

  const handlePrevious = () => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'day') newDate.setDate(newDate.getDate() - 1);
    if (viewMode === 'week') newDate.setDate(newDate.getDate() - 7);
    if (viewMode === 'month') newDate.setMonth(newDate.getMonth() - 1);
    setSelectedDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'day') newDate.setDate(newDate.getDate() + 1);
    if (viewMode === 'week') newDate.setDate(newDate.getDate() + 7);
    if (viewMode === 'month') newDate.setMonth(newDate.getMonth() + 1);
    setSelectedDate(newDate);
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Schedule Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Plan and manage employee shifts efficiently
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center bg-white rounded-lg border shadow-sm">
          <button
            onClick={handlePrevious}
            className="p-2 hover:bg-gray-50 border-r"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="px-4 py-2 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-gray-600" />
            <span className="font-medium">
              {format(selectedDate, 'MMMM d, yyyy')}
            </span>
          </div>
          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-50 border-l"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value as 'day' | 'week' | 'month')}
          className="px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="day">Day View</option>
          <option value="week">Week View</option>
          <option value="month">Month View</option>
        </select>

        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Templates
        </button>
        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Shift
        </button>
      </div>
    </div>
  );
}