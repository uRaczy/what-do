import { useState } from "react";

import { EventButton, TextInput } from "@/components/Atoms";

type Props = {
  handleSubmit: (element: string) => void;
};

export const InputLine = ({ handleSubmit }: Props) => {
  const [value, setValue] = useState("");
  const handleChange = (input: string) => {
    setValue(input);
  };

  return (
    <div>
      <TextInput handleChange={handleChange} value={value} />
      <EventButton
        title="Submit"
        onClick={() => {
          handleSubmit(value);
          setValue("");
        }}
      />
    </div>
  );
};
