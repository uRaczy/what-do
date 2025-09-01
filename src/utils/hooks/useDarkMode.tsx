import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    setIsDarkMode(savedMode === "dark");
  }, []);
  useEffect(() => {
    //! Resolve flashing
    const root = document.documentElement;
    if (isDarkMode && !root.classList.contains("dark")) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleDarkMode };
};
