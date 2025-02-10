import { Bot } from "@/interfaces/data.Interface";
import { TimeRange } from "../TimeRangePicker/TimeRangePicker";
import BotCard from "../BotCard/BotCard";

type BotListProps = {
  bots: Bot[];
  activeTimeRange: TimeRange;
  activeBot: string;
  setActiveBot: (botName: string) => void;
};

export default function BotsList({
  bots,
  activeTimeRange,
  activeBot,
  setActiveBot,
}: BotListProps) {
  return (
    <div className="px-2">
      <ul className="grid grid-cols-3 gap-1">
        {bots &&
          bots.map((bot) => {
            const isActiveBot = activeBot === bot.name;
            return (
              <li key={bot.name}>
                <BotCard
                  bot={bot}
                  isActiveBot={isActiveBot}
                  setActiveBot={setActiveBot}
                  activeTimeRange={activeTimeRange}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
