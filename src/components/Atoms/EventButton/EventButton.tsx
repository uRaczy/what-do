type Props = {
  className?: string;
  title: string;
  onClick: () => void;
};

//* Krok 1: Stworzyć działającą molekułe i listę ze zwykłym stanem z hooka
//* Krok 2: Stworzyć działającą niezależną listę korzystając ze state managera

export const EventButton = ({ title, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-md bg-blue-700 px-6 py-2.5 text-gray-100 ${className}`}
    >
      {title}
    </button>
  );
};
