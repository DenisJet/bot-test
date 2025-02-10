export type TimeRange = "all_time" | "24h" | "7d" | "30d" | "60d" | "90d";

type TimeRangePickerProps = {
  activeTimeRange: string;
  setActiveTimeRange: (range: TimeRange) => void;
};

export default function TimeRangePicker({
  activeTimeRange,
  setActiveTimeRange,
}: TimeRangePickerProps) {
  return (
    <div className="px-2 text-sm text-gray-500 flex justify-between items-center gap-1 whitespace-nowrap">
      <p>Time Range:</p>
      <button
        onClick={() => setActiveTimeRange("24h")}
        className={`border rounded-full px-1 w-full ${
          activeTimeRange === "24h" && "text-white border-white"
        }`}
      >
        24h
      </button>
      <button
        onClick={() => setActiveTimeRange("7d")}
        className={`border rounded-full px-1 w-full ${
          activeTimeRange === "7d" && "text-white border-white"
        }`}
      >
        7 days
      </button>
      <button
        onClick={() => setActiveTimeRange("30d")}
        className={`border rounded-full px-1 w-full ${
          activeTimeRange === "30d" && "text-white border-white"
        }`}
      >
        30 days
      </button>
      <button
        onClick={() => setActiveTimeRange("all_time")}
        className={`border rounded-full px-1 w-full ${
          activeTimeRange === "all_time" && "text-white border-white"
        }`}
      >
        All time
      </button>
    </div>
  );
}
