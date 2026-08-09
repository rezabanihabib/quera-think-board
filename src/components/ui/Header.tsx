import Container from "../layouts/Container";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-base-300 py-4">
      <Container className="flex items-center justify-between">
        <h1 className="font-black">Think Board</h1>
        <ThemeToggle />
      </Container>
    </header>
  );
};

export default Header;
