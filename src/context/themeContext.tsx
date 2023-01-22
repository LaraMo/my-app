//@ts-nocheck
import React, { createContext, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

type ThemeContextProps = {
  children: ReactNode;
};

/**
 * Init value
 */
const init = {
  theme: 'light' as 'light' | 'dark' | 'christmas' | 'easter',
  handleSetTheme: (theme: 'light' | 'dark' | 'christmas' | 'easter') => null, //set theme to inverse of current value and save changes in local storage
};
//define the user context
export const ThemeContext = createContext(init);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  /**
   * Validate theme
   */
  // todo refactor
  const validateTheme = (): 'light' | 'dark' | 'christmas' | 'easter' => {
    const themeArray = ['light', 'dark', 'christmas', 'easter'];
    const theme = localStorage.getItem('theme');
    // if null or value not included in possible themes
    if (!theme || !themeArray.includes(theme)) {
      return 'light';
    }
    return theme as 'light' | 'dark' | 'christmas' | 'easter';
  };
  /**
   * Hooks
   */
  const [theme, setTheme] = useState(validateTheme());
  const { t } = useTranslation();

  /**
   * Handle set theme
   */
  const handleSetTheme = (theme: 'light' | 'dark' | 'christmas' | 'easter') => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
    toast(t(`toast.theme.${[theme]}`));
  };

  return <ThemeContext.Provider value={{ theme, handleSetTheme }}>{children}</ThemeContext.Provider>;
};
