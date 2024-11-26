import { create } from 'zustand';
import { Employee } from '../types';

interface EmployeeStore {
  employees: Employee[];
  loading: boolean;
  filters: {
    search: string;
    role: string;
    status: string;
    location: string;
  };
  setEmployees: (employees: Employee[]) => void;
  setLoading: (loading: boolean) => void;
  setFilters: (filters: Partial<{ search: string; role: string; status: string; location: string }>) => void;
}

// Sample employee data
const sampleEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Warehouse Manager',
    shift: 'Morning',
    status: 'active',
    location: 'Warehouse A',
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Inventory Specialist',
    shift: 'Evening',
    status: 'on_break',
    location: 'Warehouse B',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Forklift Operator',
    shift: 'Night',
    status: 'off_duty',
    location: 'Warehouse A',
  },
  {
    id: '4',
    name: 'Sarah Williams',
    role: 'Quality Inspector',
    shift: 'Morning',
    status: 'active',
    location: 'Warehouse C',
  },
  {
    id: '5',
    name: 'Robert Brown',
    role: 'Shipping Coordinator',
    shift: 'Evening',
    status: 'active',
    location: 'Warehouse B',
  },
];

export const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: sampleEmployees,
  loading: false,
  filters: {
    search: '',
    role: '',
    status: '',
    location: '',
  },
  setEmployees: (employees) => set({ employees }),
  setLoading: (loading) => set({ loading }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
}));