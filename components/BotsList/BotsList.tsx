import { Bot } from "@/interfaces/data.Interface";
import BotIcon from "@/public/bot.svg";
import { TimeRange } from "../TimeRangePicker/TimeRangePicker";

export default function BotsList({
  bots,
  activeTimeRange,
  activeBot,
  setActiveBot,
}: {
  bots: Bot[];
  activeTimeRange: TimeRange;
  activeBot: string;
  setActiveBot: (botName: string) => void;
}) {
  return (
    <div className="px-2">
      <ul className="grid grid-cols-3 gap-1">
        {bots &&
          bots.map((bot) => {
            const botName = bot.name.split("_").join("").toUpperCase();
            const isActiveBot = activeBot === bot.name;
            const botProfit = bot[`${activeTimeRange}`];
            const profitColor =
              Number(botProfit) > 0 ? "text-green-500" : "text-red-500";
            return (
              <li key={bot.name}>
                <div
                  onClick={() => setActiveBot(bot.name)}
                  className={`border rounded-sm px-3 py-2 w-full h-full flex flex-col justify-center items-center cursor-pointer ${
                    isActiveBot ? "bg-gray-700" : "bg-gray-800"
                  }`}
                >
                  <BotIcon
                    className={`${
                      bot.name === "yellow_bot"
                        ? "text-yellow-500"
                        : bot.name === "white_bot"
                        ? "text-white-500"
                        : bot.name === "green_bot"
                        ? "text-green-500"
                        : bot.name === "red_bot"
                        ? "text-red-500"
                        : bot.name === "blue_bot"
                        ? "text-blue-500"
                        : bot.name === "orange_bot"
                        ? "text-orange-500"
                        : "text-gray-500"
                    }`}
                    width={48}
                    height={48}
                  />
                  <p className="text-xs font-bold">{botName}</p>
                  <p className={`text-xs font-bold ${profitColor}`}>
                    {botProfit}%
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
