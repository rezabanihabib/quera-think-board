import ThemeToggle from "../components/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-base-300 py-4 px-5 flex items-center justify-between">
      <h1 className="font-black">Think Board</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
