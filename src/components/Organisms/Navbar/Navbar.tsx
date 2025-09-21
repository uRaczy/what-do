import { DarkModeToggle } from "../../Atoms";

export const Navbar = () => {
  return (
    <header className="flex h-10 items-center justify-between bg-gray-300 px-4 dark:bg-gray-700">
      <h1 className="cursor-pointer">LOGO</h1>
      <nav className="flex gap-3">
        <h2 className="cursor-pointer">TODO</h2>
        <h2 className="cursor-pointer">SQL List</h2>
        <h2 className="cursor-pointer">NoSQL List</h2>
      </nav>
      <DarkModeToggle />
    </header>
  );
};
