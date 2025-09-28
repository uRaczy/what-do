"use client";

import { useState } from "react";

import { InputLine, List } from "../../Molecules";

export const Todo = () => {
  const [list, setList] = useState(["Code something"]);
  const handleSubmit = (element: string) => {
    setList((prev) => [...prev, element]);
  };
  return (
    <>
      <InputLine handleSubmit={handleSubmit} />
      <List list={list} />
    </>
  );
};
