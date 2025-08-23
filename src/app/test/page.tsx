"use client";
import { useState } from "react";
import { HeroBanner } from "@/src/components/HeroBanner";

export default function Test() {
  const [isDarkMode, setIsDarkMode] = useState();
  return <HeroBanner />;
}
