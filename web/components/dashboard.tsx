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
    <div className="lg:flex w-[95%] border rounded-lg bg-slate-100 mx-auto dark:bg-zinc-900">
      <div className="lg:w-[40%] w-full p-6">
        <div className="border rounded-lg dark:bg-zinc-900 bg-slate-200 p-4">
          <div className="mb-4 text-lg font-bold">Pick Dates</div>
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
      </div>
      <div className="lg:flex-1 p-6">
        <ChartLineLinear chartData={chartData} />
      </div>
    </div>
  );
}
