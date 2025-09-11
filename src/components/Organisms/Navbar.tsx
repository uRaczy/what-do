import { DarkModeToggle } from "../Atoms";

export const Navbar = () => {
  return (
    <header className="flex h-10 items-center justify-between bg-gray-300 px-4 dark:bg-gray-700">
      <h1>LOGO</h1>
      <nav className="flex gap-3">
        <h2>TODO</h2>
        <h2>SQL List</h2>
        <h2>NoSQL List</h2>
      </nav>
      <DarkModeToggle />
    </header>
  );
};
