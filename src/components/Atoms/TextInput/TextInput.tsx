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
      className={`text-light w-full px-4 ${className}`}
      onChange={(e) => handleChange(e.target.value)}
      onSubmit={onSubmit}
    />
  );
};
