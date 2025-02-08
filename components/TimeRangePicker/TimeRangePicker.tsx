export default function TimeRangePicker() {
  return (
    <div className="px-2 text-sm text-gray-500 flex justify-between items-center">
      <p>Time Range:</p>
      <button className="border rounded-full px-1">24h</button>
      <button className="border rounded-full px-1">7 days</button>
      <button className="border rounded-full px-1">30 days</button>
      <button className="border rounded-full px-1">All time</button>
    </div>
  );
}
