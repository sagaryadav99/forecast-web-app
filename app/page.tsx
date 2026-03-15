import { ChartLineLinear } from "@/components/lineChart";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ foreCastHorizon: 4 }),
  });
  const finaldata = await data.json();
  return (
    <div className="mx-auto w-[80%]">
      <ChartLineLinear chartData={finaldata} />
    </div>
  );
}
