import React from 'react';
import { Search, Filter } from 'lucide-react';
import { useInventoryStore } from '../../stores/inventoryStore';

export function InventoryFilters() {
  const { filters, setFilters } = useInventoryStore();

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search items..."
            value={filters.search}
            onChange={(e) => setFilters({ search: e.target.value })}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <select
          value={filters.status}
          onChange={(e) => setFilters({ status: e.target.value })}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Status</option>
          <option value="in_stock">In Stock</option>
          <option value="low_stock">Low Stock</option>
          <option value="out_of_stock">Out of Stock</option>
        </select>

        <select
          value={filters.location}
          onChange={(e) => setFilters({ location: e.target.value })}
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Locations</option>
          <option value="warehouse_a">Warehouse A</option>
          <option value="warehouse_b">Warehouse B</option>
          <option value="warehouse_c">Warehouse C</option>
        </select>

        <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <Filter className="w-4 h-4" />
          More Filters
        </button>
      </div>
    </div>
  );
}