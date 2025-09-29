"use client";

//* Krok 1: Stworzyć działającą molekułe i listę ze zwykłym stanem z hooka
//* Krok 2: Stworzyć działającą niezależną listę korzystając ze state managera

import { useState } from "react";

import { InputLine, List } from "../../Molecules";

export const Todo = () => {
  const [list, setList] = useState(["Code something"]);
  const handleSubmit = (element: string) => {
    setList((prev) => [...prev, element]);
  };
  return (
    <div className="md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[1000px]">
      <InputLine handleSubmit={handleSubmit} />
      <List list={list} />
    </div>
  );
};
