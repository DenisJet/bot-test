import { getBotColor } from "@/helpers/getBotColor";
import { Bot } from "@/interfaces/data.Interface";
import BotIcon from "@/public/bot.svg";

export default function BotsList({ bots }: { bots: Bot[] }) {
  return (
    <div className="px-4">
      <ul className="grid grid-cols-3 gap-1">
        {bots &&
          bots.map((bot) => {
            return (
              <li key={bot.name}>
                <div className="border rounded-sm bg-gray-800 p-3 w-full h-full flex flex-col justify-center items-center">
                  <BotIcon
                    className={getBotColor(bot.name)}
                    width={48}
                    height={48}
                  />
                  <div>{bot.name}</div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
