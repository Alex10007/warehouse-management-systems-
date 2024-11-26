import { create } from 'zustand';
import { Shift, Employee, ScheduleTemplate } from '../types/scheduling';

interface ScheduleStore {
  shifts: Shift[];
  employees: Employee[];
  templates: ScheduleTemplate[];
  selectedDate: Date;
  viewMode: 'day' | 'week' | 'month';
  loading: boolean;
  setShifts: (shifts: Shift[]) => void;
  addShift: (shift: Shift) => void;
  updateShift: (id: string, shift: Partial<Shift>) => void;
  deleteShift: (id: string) => void;
  setViewMode: (mode: 'day' | 'week' | 'month') => void;
  setSelectedDate: (date: Date) => void;
}

// Sample data
const sampleEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Manager',
    availability: [],
    maxHoursPerWeek: 40,
    skills: ['management', 'inventory', 'training'],
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Operator',
    availability: [],
    maxHoursPerWeek: 35,
    skills: ['forklift', 'packing', 'inventory'],
  },
];

const sampleShifts: Shift[] = [
  {
    id: '1',
    employeeId: '1',
    role: 'Manager',
    startTime: new Date().toISOString(),
    endTime: new Date(Date.now() + 8 * 3600000).toISOString(),
    status: 'confirmed',
    type: 'regular',
    notes: 'Morning shift',
  },
];

export const useScheduleStore = create<ScheduleStore>((set) => ({
  shifts: sampleShifts,
  employees: sampleEmployees,
  templates: [],
  selectedDate: new Date(),
  viewMode: 'week',
  loading: false,
  setShifts: (shifts) => set({ shifts }),
  addShift: (shift) => set((state) => ({ shifts: [...state.shifts, shift] })),
  updateShift: (id, updatedShift) =>
    set((state) => ({
      shifts: state.shifts.map((shift) =>
        shift.id === id ? { ...shift, ...updatedShift } : shift
      ),
    })),
  deleteShift: (id) =>
    set((state) => ({
      shifts: state.shifts.filter((shift) => shift.id !== id),
    })),
  setViewMode: (viewMode) => set({ viewMode }),
  setSelectedDate: (selectedDate) => set({ selectedDate }),
}));