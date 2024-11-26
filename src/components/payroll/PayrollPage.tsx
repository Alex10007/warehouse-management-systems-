import React from 'react';
import { PayrollHeader } from './PayrollHeader';
import { PayrollStats } from './PayrollStats';
import { PayrollTable } from './PayrollTable';
import { PayrollFilters } from './PayrollFilters';
import { PayrollInsights } from './PayrollInsights';
import { usePayrollStore } from '../../stores/payrollStore';
import { Loader2 } from 'lucide-react';

export default function PayrollPage() {
  const loading = usePayrollStore((state) => state.loading);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <PayrollHeader />
      <PayrollStats />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <PayrollFilters />
          <div className="mt-6">
            <PayrollTable />
          </div>
        </div>
        <div className="col-span-4">
          <PayrollInsights />
        </div>
      </div>
    </div>
  );
}