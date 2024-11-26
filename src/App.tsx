import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AnalyticsPage from './components/analytics/AnalyticsPage';
import InventoryPage from './components/inventory/InventoryPage';
import EmployeesPage from './components/employees/EmployeesPage';
import SchedulingPage from './components/scheduling/SchedulingPage';
import PayrollPage from './components/payroll/PayrollPage';
import SettingsPage from './components/settings/SettingsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="ml-64">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/scheduling" element={<SchedulingPage />} />
              <Route path="/payroll" element={<PayrollPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;