"use client";
import TradingCapital from "@/components/TradingCapital/TradingCapital";
import BotsList from "@/components/BotsList/BotsList";
import { Skeleton } from "@/components/ui/skeleton";
import useTradingData from "@/hooks/useTradingData";
import TimeRangePicker, {
  TimeRange,
} from "@/components/TimeRangePicker/TimeRangePicker";
import { useState } from "react";
import { Chart } from "@/components/Chart/Chart";

export default function Home() {
  const { data, isLoading } = useTradingData();
  const [activeTimeRange, setActiveTimeRange] = useState<TimeRange>("all_time");
  const [activeBot, setActiveBot] = useState<string>("");

  if (isLoading) {
    return (
      <div className="flex flex-col justify-between items-center h-full gap-4 p-4">
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-full w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-full w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-full w-full rounded-xl" />
      </div>
    );
  }

  if (!data) {
    return <div>Error: Could not load data.</div>;
  }

  return (
    <>
      <TradingCapital data={data} />
      <Chart activeBot={activeBot} />
      <BotsList
        bots={data.bots}
        activeTimeRange={activeTimeRange}
        activeBot={activeBot}
        setActiveBot={setActiveBot}
      />
      <TimeRangePicker
        activeTimeRange={activeTimeRange}
        setActiveTimeRange={setActiveTimeRange}
      />
    </>
  );
}
