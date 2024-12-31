import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const MixedChart = () => {
  const data = {
    labels: ["January", "February", "March", "April"], // X-axis labels
    datasets: [
      {
        type: "bar", // First dataset: Bar chart
        label: "Bar Dataset 1",
        data: [10, 20, 30, 40],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        type: "bar", // Second dataset: Bar chart
        label: "Bar Dataset 2",
        data: [15, 25, 35, 45],
        backgroundColor: "rgba(153, 102, 255, 0.5)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        type: "line", // Third dataset: Line chart
        label: "Line Dataset",
        data: [12.5, 22.5, 32.5, 42.5], // Centered on the bars
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        tension: 0.4, // Smooth curve
        pointStyle: "circle",
        pointRadius: 6,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false, // Ensures tooltips show across datasets
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // Customize Y-axis steps
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};
export default MixedChart;
