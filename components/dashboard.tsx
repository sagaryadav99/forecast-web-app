"use client";
import { useEffect, useState } from "react";
import { InputComp } from "./InputComponent";
import { ChartLineLinear } from "./lineChart";
import { FinalArrDataType } from "@/types/dataTypes";

export function DashBoard() {
  const [chartData, setChartData] = useState<FinalArrDataType[]>([]);
  const [startDate, setStartDate] = useState(
    new Date(Date.UTC(2024, 0, 1, 0, 0, 0)),
  );
  const [endDate, setEndDate] = useState(
    new Date(Date.UTC(2024, 0, 31, 0, 0, 0)),
  );
  const [horizon, setHorizon] = useState([4]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({
          startDate,
          endDate,
          horizon: horizon[0],
        }),
      });

      const data = await res.json();
      setChartData(data);
    }
    fetchData();
  }, []);
  return (
    <div className="flex h-screen w-full divide-x">
      <div className="w-[30%] p-6">
        <InputComp
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setHorizon={setHorizon}
          setChartData={setChartData}
          horizon={horizon}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div className="flex-1 p-6">
        <ChartLineLinear chartData={chartData} />
      </div>
    </div>
  );
}
