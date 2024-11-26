import { create } from 'zustand';
import { InventoryItem } from '../types';

interface InventoryStore {
  items: InventoryItem[];
  loading: boolean;
  filters: {
    search: string;
    status: string;
    location: string;
  };
  setItems: (items: InventoryItem[]) => void;
  setLoading: (loading: boolean) => void;
  setFilters: (filters: Partial<{ search: string; status: string; location: string }>) => void;
}

// Sample inventory data
const sampleItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Premium Laptop',
    quantity: 145,
    location: 'Warehouse A',
    status: 'in_stock',
    lastUpdated: '2024-03-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    quantity: 23,
    location: 'Warehouse B',
    status: 'low_stock',
    lastUpdated: '2024-03-14T15:45:00Z',
  },
  {
    id: '3',
    name: 'USB-C Cable',
    quantity: 0,
    location: 'Warehouse A',
    status: 'out_of_stock',
    lastUpdated: '2024-03-13T09:15:00Z',
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    quantity: 89,
    location: 'Warehouse C',
    status: 'in_stock',
    lastUpdated: '2024-03-15T11:20:00Z',
  },
  {
    id: '5',
    name: 'Monitor Stand',
    quantity: 12,
    location: 'Warehouse B',
    status: 'low_stock',
    lastUpdated: '2024-03-14T16:30:00Z',
  },
];

export const useInventoryStore = create<InventoryStore>((set) => ({
  items: sampleItems, // Initialize with sample data
  loading: false,
  filters: {
    search: '',
    status: '',
    location: '',
  },
  setItems: (items) => set({ items }),
  setLoading: (loading) => set({ loading }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
}));