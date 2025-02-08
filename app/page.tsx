"use client";
import TradingCapital from "@/components/TradingCapital/TradingCapital";
import BotsList from "@/components/BotsList/BotsList";
import { Skeleton } from "@/components/ui/skeleton";
import useTradingData from "@/hooks/useTradingData";

export default function Home() {
  const { data, isLoading } = useTradingData();

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
      <BotsList bots={data.bots} />
    </>
  );
}
