import React from "react";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: ["Processados", "Com erro", "A receber"],
    datasets: [
      {
        data: [60, 22, 18], // Porcentagens
        backgroundColor: ["#10b981", "#ef4444", "#71717a"], // Cores do gráfico
        borderWidth: 0, // Remove bordas entre as fatias
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Remove a legenda padrão do gráfico
      },
    },
    cutout: "80%", // Faz o gráfico parecer mais fino
  };

  return (
    <div>
      <div className="doughnut-chart">
        <Doughnut data={data} options={options} />
      </div>
      <div className="chart-legend">
        <div className="legend-item">
                <Image
                  src="/images/trending-up.svg"
                  alt="Processados"
                  width={24}
                  height={24}
                  style={{
                    filter:
                      "invert(42%) sepia(94%) saturate(500%) hue-rotate(90deg) brightness(90%) contrast(85%)",
                  }}
                />
          <span>Processados</span>
          <span className="percentage">60%</span>
        </div>
        <div className="legend-item">
                <Image
                  src="/images/trending-down.svg"
                  alt="Com erro"
                  width={24}
                  height={24}
                  style={{
                    filter: "invert(20%) sepia(100%) saturate(5000%) hue-rotate(0deg) brightness(90%) contrast(85%)",
                  }}
                />
          <span>Com erro</span>
          <span className="percentage">22%</span>
        </div>
        <div className="legend-item">
          <Image
            src="/images/pig.svg"
            alt="A receber"
            width={16}
            height={16}
          />
          <span>A receber</span>
          <span className="percentage">18%</span>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;