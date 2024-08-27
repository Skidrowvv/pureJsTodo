import { createContext, useEffect, useState } from "react";

import { IProps, TThemeContext } from "../../types";

export const ThemeContext = createContext<TThemeContext>(["light", () => {}]);

const ThemeProvider = (props: IProps) => {
  const [theme, setTheme] = useState(props.theme);

  localStorage.setItem("theme", theme);
  document.documentElement.classList.add(`${localStorage.getItem("theme")}`);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
