import React, { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { InventoryItem } from '../../types';
import { useInventoryStore } from '../../stores/inventoryStore';
import { format } from 'date-fns';
import { MoreHorizontal, Edit2, Trash2 } from 'lucide-react';

const columnHelper = createColumnHelper<InventoryItem>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Item Name',
    cell: (info) => (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
          <span className="text-gray-600 text-sm">{info.getValue().charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium">{info.getValue()}</p>
          <p className="text-sm text-gray-500">#{info.row.original.id}</p>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor('quantity', {
    header: 'Quantity',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('location', {
    header: 'Location',
    cell: (info) => (
      <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue();
      const colors = {
        in_stock: 'bg-green-100 text-green-800',
        low_stock: 'bg-yellow-100 text-yellow-800',
        out_of_stock: 'bg-red-100 text-red-800',
      };
      return (
        <span className={`px-2 py-1 rounded-full text-sm ${colors[status]}`}>
          {status.replace('_', ' ').toUpperCase()}
        </span>
      );
    },
  }),
  columnHelper.accessor('lastUpdated', {
    header: 'Last Updated',
    cell: (info) => format(new Date(info.getValue()), 'MMM dd, yyyy'),
  }),
  columnHelper.display({
    id: 'actions',
    cell: () => (
      <div className="flex items-center justify-end gap-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Edit2 className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Trash2 className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    ),
  }),
];

export function InventoryTable() {
  const { items, filters } = useInventoryStore();

  const filteredData = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesStatus = !filters.status || item.status === filters.status;
      const matchesLocation = !filters.location || item.location === filters.location;
      return matchesSearch && matchesStatus && matchesLocation;
    });
  }, [items, filters]);

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