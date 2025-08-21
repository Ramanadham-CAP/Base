import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const BPieChart: React.FC = () => {
  const factors = [
    "Quality",
    "Speed",
    "Reliability",
    "Scalability",
    "Security",
    "UX Design",
    "Accessibility",
    "Cost Efficiency",
    "Support",
    "Innovation",
  ];

  const values = factors.map(() => Math.floor(Math.random() * 100) + 10);
  const colors = factors.map(() => getRandomColor());

  const data = {
    labels: factors,
    datasets: [
      {
        label: "Factors",
        data: values,
        backgroundColor: colors,
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
      <IonContent className="ion-padding flex flex-col items-center">
        <div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="w-full max-w-md">
              <Pie data={data} options={options} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {factors.map((factor, i) => (
                <div
                  key={i}
                  className="flex items-center justify-start text-left"
                >
                  <span
                    className="inline-block w-4 h-4 rounded-full mr-2 border border-gray-300 flex-shrink-0"
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
      </IonContent>
    </div>
  );
};

export default BPieChart;
