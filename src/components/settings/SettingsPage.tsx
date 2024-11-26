import React from 'react';
import { SettingsSidebar } from './SettingsSidebar';
import { SettingsContent } from './SettingsContent';
import { useSettingsStore } from '../../stores/settingsStore';
import { Loader2 } from 'lucide-react';

export default function SettingsPage() {
  const loading = useSettingsStore((state) => state.loading);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure and customize your warehouse management system
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <SettingsSidebar />
        </div>
        <div className="col-span-9">
          <SettingsContent />
        </div>
      </div>
    </div>
  );
}