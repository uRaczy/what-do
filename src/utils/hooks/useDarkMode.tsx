import { useEffect, useRef, useState } from "react";

export const useDarkMode = () => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    elementRef.current = document.documentElement;
    const savedMode = localStorage.getItem("theme");
    setIsDarkMode(savedMode === "dark");
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    if (isDarkMode && !elementRef.current.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      elementRef.current.classList.add("dark");
    } else if (!isDarkMode && elementRef.current.classList.contains("dark")) {
      elementRef.current.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log(localStorage.getItem("theme"));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return { isDarkMode, toggleDarkMode };
};
