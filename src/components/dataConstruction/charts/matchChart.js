import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const MatchChart = ({ mapGraphData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const matchChart = createChart(ctx, mapGraphData);
    return () => {
      matchChart.destroy(); // Clean up the chart on component unmount
    };
  }, [mapGraphData]);

  const createChart = (ctx, mapGraphData) => {
    const labels = mapGraphData[0].data;
    const datasets = mapGraphData.slice(1).map((data) => ({
      data: data.data,
      label: data.name,
      borderColor: data.borderColor,
      backgroundColor: data.backgroundColor,
    }));

    return new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets,
      },
    });
  };

  return (
    <div className="w-full h-full relative z-20 flex mx-auto my-auto">
      <div className="border border-gray-400 pt-0 rounded-xl w-full h-full my-auto shadow-xl">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default MatchChart;
