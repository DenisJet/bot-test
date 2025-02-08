export type TimeRange = "all_time" | "24h" | "7d" | "30d" | "60d" | "90d";

export default function TimeRangePicker({
  activeTimeRange,
  setActiveTimeRange,
}: {
  activeTimeRange: string;
  setActiveTimeRange: (range: TimeRange) => void;
}) {
  return (
    <div className="px-2 text-sm text-gray-500 flex justify-between items-center">
      <p>Time Range:</p>
      <button
        onClick={() => setActiveTimeRange("24h")}
        className={`border rounded-full px-1 ${
          activeTimeRange === "24h" && "text-white border-white"
        }`}
      >
        24h
      </button>
      <button
        onClick={() => setActiveTimeRange("7d")}
        className={`border rounded-full px-1 ${
          activeTimeRange === "7d" && "text-white border-white"
        }`}
      >
        7 days
      </button>
      <button
        onClick={() => setActiveTimeRange("30d")}
        className={`border rounded-full px-1 ${
          activeTimeRange === "30d" && "text-white border-white"
        }`}
      >
        30 days
      </button>
      <button
        onClick={() => setActiveTimeRange("all_time")}
        className={`border rounded-full px-1 ${
          activeTimeRange === "all_time" && "text-white border-white"
        }`}
      >
        All time
      </button>
    </div>
  );
}
