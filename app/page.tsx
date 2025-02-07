"use client";
import TradingCapital from "@/components/TradingCapital/TradingCapital";
import { useEffect } from "react";
import data from "@/data.min.json";

export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("tradingData")) {
      localStorage.setItem("tradingData", JSON.stringify(data));
    }
  }, []);

  return (
    <>
      <TradingCapital data={data} />
    </>
  );
}
