import React from 'react';
import { useSettingsStore } from '../../stores/settingsStore';
import { Setting } from '../../types/settings';
import { Save, RotateCcw } from 'lucide-react';

export function SettingsContent() {
  const { modules, settings, activeModule, updateSetting, resetSetting } = useSettingsStore();
  const currentModule = modules.find((m) => m.id === activeModule);
  
  const moduleSettings = settings.filter((s) => s.moduleId === activeModule);
  const categories = currentModule?.categories || [];

  const renderSettingInput = (setting: Setting) => {
    switch (setting.type) {
      case 'boolean':
        return (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={setting.value}
              onChange={(e) => updateSetting(setting.id, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        );
      
      case 'select':
        return (
          <select
            value={setting.value}
            onChange={(e) => updateSetting(setting.id, e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 w-full max-w-xs"
          >
            {setting.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'number':
        return (
          <input
            type="number"
            value={setting.value}
            onChange={(e) => updateSetting(setting.id, Number(e.target.value))}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 w-full max-w-xs"
          />
        );
      
      default:
        return (
          <input
            type="text"
            value={setting.value}
            onChange={(e) => updateSetting(setting.id, e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 w-full max-w-xs"
          />
        );
    }
  };

  return (
    <div className="space-y-6">
      {categories.map((category) => {
        const categorySettings = moduleSettings.filter((s) => s.category === category);
        if (categorySettings.length === 0) return null;

        return (
          <div key={category} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">{category}</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {categorySettings.map((setting) => (
                <div key={setting.id} className="flex items-start justify-between">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-900">
                      {setting.label}
                    </label>
                    {setting.description && (
                      <p className="text-sm text-gray-500">{setting.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    {renderSettingInput(setting)}
                    <button
                      onClick={() => resetSetting(setting.id)}
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg"
                      title="Reset to default"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}