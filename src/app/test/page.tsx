"use client";

import { useState } from "react";

import { DarkModeToggle } from "@/src/components/Atoms";
import { HeroBanner } from "@/src/components/Organisms";

export default function Test() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeHandle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <DarkModeToggle />
      <HeroBanner />
    </>
  );
}
