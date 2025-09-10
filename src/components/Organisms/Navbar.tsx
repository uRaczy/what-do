import { DarkModeToggle } from "../Atoms";

export const Navbar = () => {
  return (
    <header className="h-14 bg-gray-300 dark:bg-gray-700">
      <h1>LOGO</h1>
      <h2>TODO</h2>
      <h2>SQL List</h2>
      <h2>NoSQL List</h2>
      <DarkModeToggle />
    </header>
  );
};
