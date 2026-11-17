import React, { createContext, useContext, useMemo, useState } from 'react';

/** @typedef {{isDark: boolean, background: string, card: string, text: string, secondary: string, primary: string, border: string, tint: string, navBackground: string, navActive: string, navInactive: string, navBorder: string}} Theme */
/** @type {React.Context<{theme: Theme, toggleTheme: () => void, partnerName: string, setPartnerName: React.Dispatch<React.SetStateAction<string>>, profileName: string, setProfileName: React.Dispatch<React.SetStateAction<string>>} | null>} */
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [profileName, setProfileName] = useState('Daisy Galope');
  const [partnerName, setPartnerName] = useState('Julius Galope');
  const value = useMemo(() => ({
    partnerName, setPartnerName, profileName, setProfileName,
    toggleTheme: () => setIsDark(previous => !previous),
    theme: {
      isDark,
      background: isDark ? '#100D22' : '#F7F5FF',
      card: isDark ? '#1E1835' : '#FFFFFF',
      text: isDark ? '#F7F4FF' : '#19132E',
      secondary: isDark ? '#B9B0D0' : '#716782',
      primary: isDark ? '#B18AFF' : '#7443DB',
      border: isDark ? '#3A2E56' : '#EAE3FA',
      tint: isDark ? '#30234D' : '#EEE6FF',
      navBackground: isDark ? '#161126' : '#FFFFFF',
      navActive: isDark ? '#B18AFF' : '#7443DB',
      navInactive: isDark ? '#9F96B3' : '#81768F',
      navBorder: isDark ? '#352946' : '#E9E1F5',
    },
  }), [isDark, profileName, partnerName]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useAppTheme must be used within ThemeProvider');
  return context;
}
