import { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

const ThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = (): void => {
    if (theme == "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }

    if (theme == "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={changeTheme}
        className="bg-customGray text-white duration-300  dark:bg-white dark:text-black p-2"
      >
        Поменять тему
      </button>
    </div>
  );
};
export default ThemeButton;
