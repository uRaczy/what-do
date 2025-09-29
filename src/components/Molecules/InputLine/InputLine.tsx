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
    <div className="flex">
      <TextInput
        handleChange={handleChange}
        value={value}
        className="rounded-l-lg"
      />
      <EventButton
        onClick={() => {
          handleSubmit(value);
          setValue("");
        }}
        variant="primary"
        rounding="right"
      >
        Submit
      </EventButton>
    </div>
  );
};
