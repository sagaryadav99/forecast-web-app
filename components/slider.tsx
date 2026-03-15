"use client";
import { Slider } from "@/components/ui/slider";

export function HourSlider({
  setHorizon,
  horizon,
}: {
  setHorizon: (a: number[]) => void;
  horizon: number[];
}) {
  return (
    <div>
      <h2>Forecast Horizon: {horizon}h</h2>
      <Slider
        className="mx-auto w-auto mt-4"
        defaultValue={[4]}
        max={48}
        min={0}
        step={1}
        value={horizon}
        onValueChange={(e) => {
          setHorizon(e);
        }}
      />
    </div>
  );
}
