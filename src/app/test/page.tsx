"use client";
import { useState } from "react";
import { DarkModeToggle, HeroBanner } from "@/src/components/index";

export default function Test() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeHandle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <DarkModeToggle isDarkMode={isDarkMode} darkModeHandle={darkModeHandle} />
      <HeroBanner />
    </>
  );
}
