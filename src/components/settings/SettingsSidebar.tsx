import React from 'react';
import { useSettingsStore } from '../../stores/settingsStore';
import * as Icons from 'lucide-react';

export function SettingsSidebar() {
  const { modules, activeModule, setActiveModule } = useSettingsStore();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Settings</h2>
        <p className="text-sm text-gray-500">Configure your workspace</p>
      </div>
      
      <nav className="p-2">
        {modules.map((module) => {
          const Icon = Icons[module.icon as keyof typeof Icons];
          return (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeModule === module.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <div className="text-left">
                <p className="font-medium">{module.name}</p>
                <p className="text-xs text-gray-500">{module.description}</p>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}