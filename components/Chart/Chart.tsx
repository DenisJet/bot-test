"use client";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getRandomNumber } from "@/helpers/getRandomNumber";
import { useEffect, useState } from "react";

const defaultChartData = [
  { day: "Monday", Profit: 186 },
  { day: "Tuesday", Profit: 145 },
  { day: "Wednesday", Profit: 77 },
  { day: "Thursday", Profit: 35 },
  { day: "Friday", Profit: 98 },
  { day: "Saturday", Profit: 136 },
  { day: "Sunday", Profit: 189 },
];

const chartConfig = {
  desktop: {
    label: "Profit",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Chart({ activeBot }: { activeBot: string }) {
  const [chartData, setChartData] = useState(defaultChartData);

  useEffect(() => {
    setChartData([
      { day: "Monday", Profit: getRandomNumber(50, 200) },
      { day: "Tuesday", Profit: getRandomNumber(50, 200) },
      { day: "Wednesday", Profit: getRandomNumber(50, 200) },
      { day: "Thursday", Profit: getRandomNumber(50, 200) },
      { day: "Friday", Profit: getRandomNumber(50, 200) },
      { day: "Saturday", Profit: getRandomNumber(50, 200) },
      { day: "Sunday", Profit: getRandomNumber(50, 200) },
    ]);
  }, [activeBot]);

  return (
    <Card className="bg-background border-none">
      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="Profit"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
