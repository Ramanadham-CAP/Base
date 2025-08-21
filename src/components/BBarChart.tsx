import React from "react";
import ReactECharts from "echarts-for-react";

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

  const option = {
    title: {
      text: "ECharts Bar Chart",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: factors,
      axisLabel: {
        rotate: 30,
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Values",
        type: "bar",
        data: values.map((v, i) => ({
          value: v,
          itemStyle: { color: colors[i] },
        })),
        barWidth: "60%",
      },
    ],
    legend: {
      show: true,
      bottom: 0,
      data: factors.map((f, i) => ({
        name: f,
        icon: "circle",
        textStyle: { color: "#333" },
      })),
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
      <div className="p-6 max-w-5xl mx-auto">
        <ReactECharts option={option} />
      </div>
    </div>
  );
};

export default BBarChart;
