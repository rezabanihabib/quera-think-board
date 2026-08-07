import { useEffect, useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>(() => {
    const saved = localStorage.getItem("theme");

    if (!saved) {
      localStorage.setItem("theme", "light");
      return "light";
    }

    return JSON.parse(localStorage.getItem("theme")!);
  });
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
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
