"use client";

import { useDarkMode } from "@/utils/index";

export const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="bg-gray-700" onClick={toggleDarkMode}>
      {isDarkMode ? "🌙" : "☀️"}
    </div>
  );
};
