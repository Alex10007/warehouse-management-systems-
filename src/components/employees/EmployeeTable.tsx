import React, { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { Employee } from '../../types';
import { useEmployeeStore } from '../../stores/employeeStore';
import { MoreHorizontal, Edit2, UserCog, Clock } from 'lucide-react';

const columnHelper = createColumnHelper<Employee>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Employee',
    cell: (info) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-600 text-sm">{info.getValue().charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium">{info.getValue()}</p>
          <p className="text-sm text-gray-500">#{info.row.original.id}</p>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: (info) => (
      <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor('shift', {
    header: 'Shift',
    cell: (info) => (
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-gray-500" />
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue();
      const colors = {
        active: 'bg-green-100 text-green-800',
        on_break: 'bg-yellow-100 text-yellow-800',
        off_duty: 'bg-gray-100 text-gray-800',
      };
      return (
        <span className={`px-2 py-1 rounded-full text-sm ${colors[status]}`}>
          {status.replace('_', ' ').toUpperCase()}
        </span>
      );
    },
  }),
  columnHelper.accessor('location', {
    header: 'Location',
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: 'actions',
    cell: () => (
      <div className="flex items-center justify-end gap-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Edit2 className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <UserCog className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    ),
  }),
];

export function EmployeeTable() {
  const { employees, filters } = useEmployeeStore();

  const filteredData = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesRole = !filters.role || employee.role === filters.role;
      const matchesStatus = !filters.status || employee.status === filters.status;
      const matchesLocation = !filters.location || employee.location === filters.location;
      return matchesSearch && matchesRole && matchesStatus && matchesLocation;
    });
  }, [employees, filters]);

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