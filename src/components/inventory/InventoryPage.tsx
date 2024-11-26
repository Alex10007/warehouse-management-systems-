import React from 'react';
import { InventoryHeader } from './InventoryHeader';
import { InventoryTable } from './InventoryTable';
import { InventoryStats } from './InventoryStats';
import { InventoryFilters } from './InventoryFilters';
import { useInventoryStore } from '../../stores/inventoryStore';
import { Loader2 } from 'lucide-react';

export default function InventoryPage() {
  const loading = useInventoryStore((state) => state.loading);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <InventoryHeader />
      <InventoryStats />
      <InventoryFilters />
      <InventoryTable />
    </div>
  );
}