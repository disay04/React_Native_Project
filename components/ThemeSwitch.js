import React from 'react';
import { Platform, Switch } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useAppTheme();
  return <Switch
    accessibilityLabel="Dark Mode"
    value={theme.isDark}
    onValueChange={toggleTheme}
    trackColor={{ false: '#D5CBE7', true: '#8751E8' }}
    thumbColor="#FFFFFF"
    {...(Platform.OS === 'web' ? { activeThumbColor: '#FFFFFF' } : {})}
  />;
}
