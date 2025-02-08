import { Bot } from "@/interfaces/data.Interface";
import BotIcon from "@/public/bot.svg";

export default function BotsList({ bots }: { bots: Bot[] }) {
  return (
    <div className="px-2">
      <ul className="grid grid-cols-3 gap-1">
        {bots &&
          bots.map((bot) => {
            const botName = bot.name.split("_").join("").toUpperCase();
            const botColor = bot.name.split("_")[0];
            return (
              <li key={bot.name}>
                <div className="border rounded-sm bg-gray-800 p-3 w-full h-full flex flex-col justify-center items-center">
                  <BotIcon
                    style={{ color: `${botColor}` }}
                    width={48}
                    height={48}
                  />
                  <div className="text-xs">{botName}</div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
