import clsx from "clsx";

import { useDarkMode } from "@/utils/index";

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex w-40 bg-gray-700" onClick={toggleDarkMode}>
      <div className="text-[#bfcc0b]">Sun</div>
      <div
        className={clsx(
          `w-10 text-center ${isDarkMode ? "text-black" : "text-yellow-400"}`,
        )}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </div>
      <div>Moon</div>
    </div>
  );
};
