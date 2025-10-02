import { forwardRef } from "react";

type Props = {
  className?: string;
  value: string;
  handleChange: (input: string) => void;
  onSubmit?: () => void;
};

export type InputRef = HTMLInputElement;

export const TextInput = forwardRef<InputRef, Props>(
  function TextInput(props, ref) {
    const { className, value, handleChange, onSubmit } = props;
    return (
      <input
        type="text"
        value={value}
        className={`text-light w-full border-2 border-blue-700 px-4 outline-0 focus:border-0 ${className}`}
        onChange={(e) => handleChange(e.target.value)}
        onSubmit={onSubmit}
        ref={ref}
      />
    );
  },
);
