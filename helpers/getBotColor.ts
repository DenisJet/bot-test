export const getBotColor = (botName: string) => {
  const colorPrefix = botName.split("_")[0];
  switch (colorPrefix) {
    case "yellow":
      return "text-yellow-500";
    case "white":
      return "text-white-500";
    case "green":
      return "text-green-500";
    case "red":
      return "text-red-500";
    case "blue":
      return "text-blue-500";
    case "orange":
      return "text-orange-500";
    default:
      return "text-gray-500";
  }
};
