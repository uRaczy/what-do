import { useEffect, useRef, useState } from "react";

import { EventButton, TextInput } from "@/components/Atoms";
import { InputRef } from "@/components/Atoms/types";

type Props = {
  handleSubmit: (element: string) => void;
};

export const InputLine = ({ handleSubmit }: Props) => {
  const refInput = useRef<InputRef>(null);

  const [value, setValue] = useState("");
  const handleChange = (input: string) => {
    setValue(input);
  };

  useEffect(() => {
    if (refInput.current) {
      refInput.current.focus();
    }
  }, []);

  return (
    <form className="flex" onSubmit={(event) => event.preventDefault()}>
      <TextInput
        handleChange={handleChange}
        value={value}
        className="rounded-l-lg"
        ref={refInput}
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
    </form>
  );
};
