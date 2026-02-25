'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface HeaderThemeContextValue {
  isDark: boolean;
  setDark: (dark: boolean) => void;
}

const HeaderThemeContext = createContext<HeaderThemeContextValue>({
  isDark: false,
  setDark: () => {},
});

export function HeaderThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const setDark = useCallback((dark: boolean) => setIsDark(dark), []);
  return (
    <HeaderThemeContext.Provider value={{ isDark, setDark }}>
      {children}
    </HeaderThemeContext.Provider>
  );
}

export function useHeaderTheme() {
  return useContext(HeaderThemeContext);
}
