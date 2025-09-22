"use client";

type Props = {
  title: string;
  onClick: () => void;
  className?: string;
};

export const EventButton = ({ title, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-md bg-blue-700 p-4 text-gray-100 ${className}`}
    >
      {title}
    </button>
  );
};
