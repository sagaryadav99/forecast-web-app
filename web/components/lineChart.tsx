"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { FinalArrDataType } from "@/types/dataTypes";

export const description = "A linear line chart";

const chartConfig = {
  actualGen: {
    label: "Acutal Generation",
    color: "var(--chart-5)",
  },
  foreCastGen: {
    label: "Forecasted Generation",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartLineLinear({
  chartData,
}: {
  chartData: FinalArrDataType[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forecast Monitor For Wind</CardTitle>
        <CardDescription>January 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="startTime"
              interval="preserveStartEnd"
              tickLine={true}
              axisLine={true}
              tickMargin={20}
              tickFormatter={(value) => {
                const date = new Date(value).toLocaleString("en-GB", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  hour12: true,
                });
                return date;
              }}
            />
            <ChartTooltip
              cursor={true}
              labelFormatter={(value) => {
                return new Date(value).toLocaleString("en-GB", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  hour12: true,
                });
              }}
              content={<ChartTooltipContent />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <YAxis
              label={{
                value: "POWER (MW)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Line
              dataKey="actualGen"
              type="monotone"
              stroke="var(--color-actualGen)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="foreCastGen"
              type="monotone"
              stroke="var(--color-foreCastGen)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
