export interface PayrollEntry {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  regularHours: number;
  overtimeHours: number;
  grossPay: number;
  deductions: number;
  netPay: number;
  status: 'pending' | 'processed' | 'error';
  period: string;
}

export interface PayrollStats {
  totalPayroll: number;
  totalEmployees: number;
  averageSalary: number;
  overtimePay: number;
}