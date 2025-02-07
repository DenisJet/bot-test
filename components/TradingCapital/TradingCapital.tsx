import { Data } from "@/interfaces/data.Interface";

export default function TradingCapital({ data }: { data: Data }) {
  const { trading_capital, trading_capital_currency, balance, on_hold } = data;

  return (
    <div className="px-4 text-gray-500 uppercase font-bold text-xs">
      <h2 className="">Trading capital</h2>
      <div className="flex justify-between items-center">
        <p className="text-white font-light text-3xl">
          {trading_capital} {trading_capital_currency}
        </p>
        <div>
          <div className="flex justify-between gap-1">
            Balance: <span className="text-white">{balance}</span>
          </div>
          <div className="flex justify-between">
            On hold: <span className="text-white">{on_hold}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
