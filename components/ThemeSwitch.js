import React from 'react';
import { Platform, Switch } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useAppTheme();
  return <Switch accessibilityLabel="Dark Mode" value={theme.isDark} onValueChange={toggleTheme} trackColor={{ false: theme.border, true: theme.primary }} thumbColor="#FFFFFF" {...(Platform.OS === 'web' ? { activeThumbColor: '#FFFFFF' } : {})} />;
}
