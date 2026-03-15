import { DatePickerTime } from "./datePicker";
import { HourSlider } from "./slider";
import { Button } from "./ui/button";
import { InputProp } from "@/types/propTypes";
export function InputComp({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  setHorizon,
  horizon,
  setChartData,
}: InputProp) {
  async function fetchdata() {
    const data = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate, endDate, horizon: horizon[0] }),
    });
    const fetchedData = await data.json();
    setChartData(fetchedData);
  }
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2>From</h2>
        <DatePickerTime setDate={setStartDate} date={startDate} />
      </div>
      <div>
        <h2>To</h2>
        <DatePickerTime setDate={setEndDate} date={endDate} />
      </div>
      <div>
        <HourSlider setHorizon={setHorizon} horizon={horizon} />
      </div>
      <div>
        <Button variant="outline" size="lg" onClick={fetchdata}>
          send
        </Button>
      </div>
    </div>
  );
}
