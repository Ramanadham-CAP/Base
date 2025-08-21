import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BBarChart: React.FC = () => {
  const factors = [
    "Factor 1",
    "Factor 2",
    "Factor 3",
    "Factor 4",
    "Factor 5",
    "Factor 6",
    "Factor 7",
    "Factor 8",
    "Factor 9",
    "Factor 10",
  ];

  const values = factors.map(() => Math.floor(Math.random() * 100) + 10);

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#8BC34A",
    "#E91E63",
    "#2196F3",
    "#FFC107",
  ];

  const data = {
    labels: factors,
    datasets: [
      {
        label: "Random Values",
        data: values,
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Bar Chart",
      },
    },
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "calc(100vh - 120px)",
        width: "100%",
      }}
    >
      <div className="p-6 max-w-4xl mx-auto">
        <Bar data={data} options={options} />

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          {factors.map((factor, i) => (
            <div key={i} className="flex items-center text-left space-x-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[i] }}
              ></span>
              <span>
                {factor}: {values[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BBarChart;
