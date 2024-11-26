export interface Setting {
  id: string;
  moduleId: string;
  key: string;
  value: any;
  type: 'boolean' | 'string' | 'number' | 'select' | 'object';
  label: string;
  description?: string;
  options?: { label: string; value: string }[];
  category: string;
}

export interface SettingsModule {
  id: string;
  name: string;
  icon: string;
  description: string;
  categories: string[];
}