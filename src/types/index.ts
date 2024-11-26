export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  location: string;
  lastUpdated: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  shift: string;
  status: 'active' | 'on_break' | 'off_duty';
  location: string;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  capacity: number;
  utilizationRate: number;
}