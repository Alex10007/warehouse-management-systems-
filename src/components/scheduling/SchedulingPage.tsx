import React from 'react';
import { Calendar } from './Calendar';
import { SchedulingHeader } from './SchedulingHeader';
import { SchedulingStats } from './SchedulingStats';
import { EmployeeList } from './EmployeeList';
import { useScheduleStore } from '../../stores/scheduleStore';
import { Loader2 } from 'lucide-react';

export default function SchedulingPage() {
  const loading = useScheduleStore((state) => state.loading);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <SchedulingHeader />
      <SchedulingStats />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <EmployeeList />
        </div>
        <div className="col-span-9">
          <Calendar />
        </div>
      </div>
    </div>
  );
}