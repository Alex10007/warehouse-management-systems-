import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useScheduleStore } from '../../stores/scheduleStore';

export function Calendar() {
  const { shifts, viewMode, selectedDate } = useScheduleStore();

  const events = shifts.map((shift) => ({
    id: shift.id,
    title: `${shift.role} Shift`,
    start: shift.startTime,
    end: shift.endTime,
    backgroundColor: getShiftColor(shift.type),
    borderColor: getShiftColor(shift.type),
    extendedProps: {
      status: shift.status,
      type: shift.type,
      employeeId: shift.employeeId,
      notes: shift.notes,
    },
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={getCalendarViewMode(viewMode)}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        initialDate={selectedDate}
        headerToolbar={false}
        height="auto"
      />
    </div>
  );
}

function getCalendarViewMode(viewMode: string) {
  switch (viewMode) {
    case 'day':
      return 'timeGridDay';
    case 'week':
      return 'timeGridWeek';
    case 'month':
      return 'dayGridMonth';
    default:
      return 'timeGridWeek';
  }
}

function getShiftColor(type: string) {
  switch (type) {
    case 'regular':
      return '#3b82f6';
    case 'overtime':
      return '#f59e0b';
    case 'emergency':
      return '#ef4444';
    default:
      return '#3b82f6';
  }
}