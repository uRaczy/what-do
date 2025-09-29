type Props = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  type: "primary" | "secondary";
  rounded: "both" | "left" | "right";
};

export const EventButton = ({
  children,
  onClick,
  className,
  type,
  rounded,
}: Props) => {
  const base = "cursor-pointer px-6 py-2.5 whitespace-nowrap";
  const _type = {
    primary: "bg-blue-700 hover:bg-blue-800 active:bg-blue-800 text-light",
    secondary: "bg-gray-300 hover:bg-gray-400 active:bg-gray-400 text-dark",
  };
  const _rounded = {
    both: "rounded-md",
    left: "rounded-l-md",
    right: "rounded-r-md",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${_type[type]} ${_rounded[rounded]} ${className}`}
    >
      {children}
    </button>
  );
};
