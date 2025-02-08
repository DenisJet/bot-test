"use client";
import { useState, useEffect } from "react";
import dataJson from "@/data.min.json";
import { Data } from "@/interfaces/data.Interface";

function useTradingData(): { data: Data | undefined; isLoading: boolean } {
  const [data, setData] = useState<Data | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      try {
        const storedData = localStorage.getItem("tradingData");

        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          localStorage.setItem("tradingData", JSON.stringify(dataJson));
          setData(dataJson);
        }
      } catch (error) {
        console.error("Error to get data:", error);
        setData(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return { data, isLoading };
}

export default useTradingData;
