import React, { createContext, useContext, useMemo, useState } from 'react';

function createTheme(isDark) {
  return {
    isDark,
    background: isDark ? '#18191A' : '#F0F2F5',
    card: isDark ? '#242526' : '#FFFFFF',
    primary: '#0866FF',
    text: isDark ? '#E4E6EB' : '#050505',
    secondary: isDark ? '#B0B3B8' : '#65676B',
    border: isDark ? '#3E4042' : '#DADDE1',
    tint: isDark ? '#22334E' : '#E3EBFF',
    preview: isDark ? '#242526' : '#EDF2FF',
    muted: isDark ? '#3E4042' : '#D7DCE5',
    danger: isDark ? '#FF7A7A' : '#E02525',
    dangerBackground: isDark ? '#362426' : '#FFF0F0',
  };
}

/** @type {React.Context<{theme: ReturnType<typeof createTheme>, toggleTheme: () => void} | null>} */
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const value = useMemo(() => ({
    theme: createTheme(isDark),
    toggleTheme: () => setIsDark(previous => !previous),
  }), [isDark]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useAppTheme must be used within ThemeProvider.');
  return context;
}
