import React, { useEffect, useRef } from "react";
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Tooltip } from "chart.js";

// Register the required Chart.js components
Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip);

interface Props {
  data: number[];
  labels: string[];
}

const BarChart: React.FC<Props> = ({ data, labels }) => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const canvas = document.getElementById("followersChart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Seguidores",
            data: data,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y", // Use "y" to show usernames on the Y-axis
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [data, labels]);

  return <canvas id="followersChart" width={400} height={200} />;
};

export default BarChart;
