import { useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>("light");
  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};

export default ThemeToggle;
