import React from 'react';
import { EmployeeHeader } from './EmployeeHeader';
import { EmployeeStats } from './EmployeeStats';
import { EmployeeTable } from './EmployeeTable';
import { EmployeeFilters } from './EmployeeFilters';
import { useEmployeeStore } from '../../stores/employeeStore';
import { Loader2 } from 'lucide-react';

export default function EmployeesPage() {
  const loading = useEmployeeStore((state) => state.loading);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <EmployeeHeader />
      <EmployeeStats />
      <EmployeeFilters />
      <EmployeeTable />
    </div>
  );
}