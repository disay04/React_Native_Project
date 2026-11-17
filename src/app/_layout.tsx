import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../../context/ThemeContext';
import AppNavigator from '../../navigation/AppNavigator';

export const unstable_settings = { anchor: '(tabs)' };

export default function RootLayout() {
  return <SafeAreaProvider><ThemeProvider><AppNavigator /></ThemeProvider></SafeAreaProvider>;
}
