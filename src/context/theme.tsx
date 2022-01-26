import React, { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
//define the init state
const init = {
  isDark: false,
  setTheme: () => {}, //set theme to inverse of current value
};
//define the user context
export const ThemeContext = createContext(init);

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  //data
  const [isDark, setIsDark] = useState(
    Boolean(localStorage.getItem("theme")) ?? false
  );

  // set theme
  const setTheme = () => {
    localStorage.setItem("theme", isDark + "");
    setIsDark(() => !isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
