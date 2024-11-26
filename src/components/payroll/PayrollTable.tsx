import React, { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { PayrollEntry } from '../../types/payroll';
import { usePayrollStore } from '../../stores/payrollStore';
import { FileText, MoreHorizontal } from 'lucide-react';

const columnHelper = createColumnHelper<PayrollEntry>();

const columns = [
  columnHelper.accessor('employeeName', {
    header: 'Employee',
    cell: (info) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-600 text-sm">{info.getValue().charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium">{info.getValue()}</p>
          <p className="text-sm text-gray-500">#{info.row.original.employeeId}</p>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor('department', {
    header: 'Department',
    cell: (info) => (
      <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor('regularHours', {
    header: 'Regular Hours',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('overtimeHours', {
    header: 'Overtime',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('grossPay', {
    header: 'Gross Pay',
    cell: (info) => `$${info.getValue().toLocaleString()}`,
  }),
  columnHelper.accessor('deductions', {
    header: 'Deductions',
    cell: (info) => `$${info.getValue().toLocaleString()}`,
  }),
  columnHelper.accessor('netPay', {
    header: 'Net Pay',
    cell: (info) => `$${info.getValue().toLocaleString()}`,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue();
      const colors = {
        pending: 'bg-yellow-100 text-yellow-800',
        processed: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
      };
      return (
        <span className={`px-2 py-1 rounded-full text-sm ${colors[status]}`}>
          {status.toUpperCase()}
        </span>
      );
    },
  }),
  columnHelper.display({
    id: 'actions',
    cell: () => (
      <div className="flex items-center justify-end gap-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <FileText className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    ),
  }),
];

export function PayrollTable() {
  const { entries, filters } = usePayrollStore();

  const filteredData = useMemo(() => {
    return entries.filter((entry) => {
      const matchesDepartment = !filters.department || entry.department === filters.department;
      const matchesStatus = !filters.status || entry.status === filters.status;
      const matchesPeriod = !filters.period || entry.period === filters.period;
      return matchesDepartment && matchesStatus && matchesPeriod;
    });
  }, [entries, filters]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 text-left text-sm font-medium text-gray-500"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}