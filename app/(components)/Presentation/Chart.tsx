import React, { useEffect, useRef } from "react";
import C, { ChartType, Colors, Legend } from "chart.js/auto";

type ChartProps = {
  type: ChartType;
  data: {
    labels: any[];
    datasets: [
      {
        label: string;
        data: any[];
      }
    ];
  };
  label: string;
};

C.register(Colors, Legend);

const Chart = ({ type, data }: ChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const chart = new C(canvasRef.current!, {
      type,
      data,
    });
    return () => chart.destroy();
  }, [canvasRef, data, type]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Chart;
