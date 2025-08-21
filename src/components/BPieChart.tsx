import React from "react";
import ReactECharts from "echarts-for-react";

const EPieChart: React.FC = () => {
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
      text: "ECharts Pie Chart",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      data: factors.map((f) => f),
      icon: "circle",
      textStyle: { color: "#333" },
    },
    series: [
      {
        name: "Factors",
        type: "pie",
        radius: "65%",
        center: ["50%", "55%"],
        data: factors.map((f, i) => ({
          value: values[i],
          name: f,
          itemStyle: { color: colors[i] },
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    media: [
      {
        query: { maxWidth: 600 },
        option: {
          legend: {
            orient: "horizontal",
            bottom: 0,
            left: "center",
          },
          series: [
            {
              radius: "60%",
              center: ["50%", "45%"],
            },
          ],
        },
      },
    ],
  };

  return (
    <div
      style={{
        height: "calc(100vh - 120px)",
        width: "100%",
      }}
    >
      <div className="p-6 max-w-4xl mx-auto">
        <ReactECharts
          option={option}
          style={{ height: "400px", width: "100%" }}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
    </div>
  );
};

export default EPieChart;
