type Props = {
  className?: string;
  value: string;
  // handleChange: (input: string) => void;
  handleChange: (input: string) => void;
  onSubmit?: () => void;
};

export const TextInput = ({
  className,
  value,
  handleChange,
  onSubmit,
}: Props) => {
  return (
    <input
      type="text"
      value={value}
      className={`text-light w-full border-2 border-blue-700 px-4 outline-0 focus:border-0 ${className}`}
      onChange={(e) => handleChange(e.target.value)}
      onSubmit={onSubmit}
    />
  );
};
