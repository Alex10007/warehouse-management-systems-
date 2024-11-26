import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Orders Processed',
      data: [120, 190, 150, 180, 160, 140, 110],
      backgroundColor: 'rgb(59, 130, 246)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Daily Productivity',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export function ProductivityChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Bar data={data} options={options} />
    </div>
  );
}