import { create } from 'zustand';
import { Setting, SettingsModule } from '../types/settings';

interface SettingsStore {
  modules: SettingsModule[];
  settings: Setting[];
  activeModule: string;
  loading: boolean;
  setActiveModule: (moduleId: string) => void;
  updateSetting: (id: string, value: any) => void;
  resetSetting: (id: string) => void;
}

const defaultModules: SettingsModule[] = [
  {
    id: 'general',
    name: 'General',
    icon: 'Settings',
    description: 'Configure global application settings',
    categories: ['Appearance', 'Notifications', 'Language & Region'],
  },
  {
    id: 'inventory',
    name: 'Inventory',
    icon: 'Package',
    description: 'Manage inventory settings and thresholds',
    categories: ['Stock Management', 'Categories', 'Automation'],
  },
  {
    id: 'employees',
    name: 'Employees',
    icon: 'Users',
    description: 'Configure employee management settings',
    categories: ['Roles & Permissions', 'Attendance', 'Performance'],
  },
  {
    id: 'scheduling',
    name: 'Scheduling',
    icon: 'Calendar',
    description: 'Set up scheduling rules and templates',
    categories: ['Shift Rules', 'Time Off', 'Holidays'],
  },
  {
    id: 'payroll',
    name: 'Payroll',
    icon: 'DollarSign',
    description: 'Configure payroll and tax settings',
    categories: ['Payment Schedule', 'Tax Rules', 'Benefits'],
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: 'BarChart2',
    description: 'Customize analytics and reporting',
    categories: ['Data Display', 'Reports', 'Exports'],
  },
];

const defaultSettings: Setting[] = [
  {
    id: 'theme',
    moduleId: 'general',
    key: 'theme',
    value: 'light',
    type: 'select',
    label: 'Theme',
    description: 'Choose the application theme',
    category: 'Appearance',
    options: [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
    ],
  },
  {
    id: 'language',
    moduleId: 'general',
    key: 'language',
    value: 'en',
    type: 'select',
    label: 'Language',
    category: 'Language & Region',
    options: [
      { label: 'English', value: 'en' },
      { label: 'Spanish', value: 'es' },
      { label: 'French', value: 'fr' },
    ],
  },
  {
    id: 'notifications_email',
    moduleId: 'general',
    key: 'notifications_email',
    value: true,
    type: 'boolean',
    label: 'Email Notifications',
    category: 'Notifications',
    description: 'Receive notifications via email',
  },
  {
    id: 'low_stock_threshold',
    moduleId: 'inventory',
    key: 'low_stock_threshold',
    value: 10,
    type: 'number',
    label: 'Low Stock Threshold',
    category: 'Stock Management',
    description: 'Minimum stock level before triggering alerts',
  },
];

export const useSettingsStore = create<SettingsStore>((set) => ({
  modules: defaultModules,
  settings: defaultSettings,
  activeModule: 'general',
  loading: false,
  setActiveModule: (moduleId) => set({ activeModule: moduleId }),
  updateSetting: (id, value) =>
    set((state) => ({
      settings: state.settings.map((setting) =>
        setting.id === id ? { ...setting, value } : setting
      ),
    })),
  resetSetting: (id) =>
    set((state) => ({
      settings: state.settings.map((setting) =>
        setting.id === id ? { ...setting, value: defaultSettings.find((s) => s.id === id)?.value } : setting
      ),
    })),
}));