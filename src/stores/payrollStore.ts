import { create } from 'zustand';
import { PayrollEntry, PayrollStats } from '../types/payroll';

interface PayrollStore {
  entries: PayrollEntry[];
  stats: PayrollStats;
  loading: boolean;
  filters: {
    period: string;
    department: string;
    status: string;
  };
  setEntries: (entries: PayrollEntry[]) => void;
  setStats: (stats: PayrollStats) => void;
  setLoading: (loading: boolean) => void;
  setFilters: (filters: Partial<{ period: string; department: string; status: string }>) => void;
}

const sampleStats: PayrollStats = {
  totalPayroll: 124500,
  totalEmployees: 142,
  averageSalary: 876.76,
  overtimePay: 12450,
};

const sampleEntries: PayrollEntry[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'John Doe',
    department: 'Warehouse A',
    regularHours: 160,
    overtimeHours: 12,
    grossPay: 3200,
    deductions: 640,
    netPay: 2560,
    status: 'pending',
    period: 'March 2024',
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'Jane Smith',
    department: 'Warehouse B',
    regularHours: 160,
    overtimeHours: 8,
    grossPay: 2800,
    deductions: 560,
    netPay: 2240,
    status: 'processed',
    period: 'March 2024',
  },
];

export const usePayrollStore = create<PayrollStore>((set) => ({
  entries: sampleEntries,
  stats: sampleStats,
  loading: false,
  filters: {
    period: 'March 2024',
    department: '',
    status: '',
  },
  setEntries: (entries) => set({ entries }),
  setStats: (stats) => set({ stats }),
  setLoading: (loading) => set({ loading }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
}));