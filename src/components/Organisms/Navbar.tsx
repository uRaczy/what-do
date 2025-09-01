import { DarkModeToggle } from "../Atoms";

export const Navbar = () => {
  return (
    <header className="h-14 bg-gray-300 dark:bg-gray-700">
      <DarkModeToggle />
    </header>
  );
};
