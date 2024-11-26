export interface Shift {
  id: string;
  employeeId: string | null;
  role: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'conflict';
  type: 'regular' | 'overtime' | 'emergency';
  notes?: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  availability: {
    start: string;
    end: string;
  }[];
  maxHoursPerWeek: number;
  skills: string[];
}

export interface ScheduleTemplate {
  id: string;
  name: string;
  shifts: Omit<Shift, 'id'>[];
}