import React, { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
//init
const init = {
  isDark: false,
  setTheme: () => {}, //set theme to inverse of current value and save changes in local storage 
};
//define the user context
export const ThemeContext = createContext(init);

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  //data
  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "true");

  // set theme
  const setTheme = () => {
    localStorage.setItem("theme", !isDark + "");
    setIsDark(() => !isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
