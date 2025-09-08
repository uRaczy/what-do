"use client";

import { useDarkMode } from "@/utils/index";

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="bg-gray-700" onClick={toggleDarkMode}>
      {/* Toggle default in the middle, after localStorage loads it switches left or right */}
      {isDarkMode === null ? null : isDarkMode ? "🌙" : "☀️"}
    </div>
  );
};
