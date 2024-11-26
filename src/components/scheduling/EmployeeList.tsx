import React from 'react';
import { useScheduleStore } from '../../stores/scheduleStore';
import { User, Clock } from 'lucide-react';

export function EmployeeList() {
  const employees = useScheduleStore((state) => state.employees);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Employees</h2>
        <p className="text-sm text-gray-500">Drag to assign shifts</p>
      </div>
      
      <div className="divide-y">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="p-4 hover:bg-gray-50 cursor-move"
            draggable
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium">{employee.name}</p>
                <p className="text-sm text-gray-500">{employee.role}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{employee.maxHoursPerWeek}h/week</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}