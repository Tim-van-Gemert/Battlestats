import { useEffect, useRef } from "react";
import Chart from "chart.js";

const OperatorChart = ({ operatorGraphData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const chartData = getChartData();
    const chart = createChart(ctx, chartData);

    return () => {
      chart.destroy(); // Clean up the chart on component unmount
    };
  }, []);

  const getChartData = () => {
    const labels = operatorGraphData.map((operator) => operator.name);
    const data = operatorGraphData.map((operator) => operator.kills);
    
    return {
      labels: labels,
      datasets: [
        {
          label: "Operator Kills",
          data: data,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  const createChart = (ctx, chartData) => {
    const labels = chartData.labels;
    const datasets = chartData.datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor,
      borderColor: 'rgb(62,149,205)',
      borderWidth: 'rgb(62,149,205,01)',
    }));

    return new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div className="w-full h-full relative z-20">
      <div className="border border-gray-400 rounded-xl w-full h-full">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default OperatorChart;
