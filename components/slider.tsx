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
      <h2>ForeCast Horizon:{horizon}h</h2>
      <Slider
        defaultValue={[4]}
        max={48}
        min={0}
        step={1}
        value={horizon}
        onValueChange={(e) => {
          setHorizon(e);
        }}
        className="mx-auto w-xs"
      />
    </div>
  );
}
