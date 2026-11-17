import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useAppTheme } from '../../context/ThemeContext';
import { WorkspaceProvider } from '../../context/WorkspaceContext';
import WelcomeScreen from '../../screens/WelcomeScreen';

export const unstable_settings = { anchor: '(tabs)' };

function Navigation() {
  const { theme } = useAppTheme();
  const [started, setStarted] = useState(false);
  return (
    <>
      <StatusBar style={!started || theme.isDark ? 'light' : 'dark'} />
      {started ? (
        <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
          headerShadowVisible: false,
          headerTitleStyle: { fontSize: 18, fontWeight: '700' },
          headerTitleAlign: 'center',
          contentStyle: { backgroundColor: theme.background },
        }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="notes" options={{ title: 'Notes' }} />
          <Stack.Screen name="calculator" options={{ title: 'Calculator' }} />
          <Stack.Screen name="about" options={{ title: 'About LabHub' }} />
          <Stack.Screen name="pair-profile" options={{ title: 'Pair Profile' }} />
          <Stack.Screen name="activity-one" options={{ headerShown: false }} />
          <Stack.Screen name="activity-two" options={{ headerShown: false }} />
        </Stack>
      ) : <WelcomeScreen onStart={() => setStarted(true)} />}
    </>
  );
}

export default function RootLayout() {
  return <SafeAreaProvider><ThemeProvider><WorkspaceProvider><Navigation /></WorkspaceProvider></ThemeProvider></SafeAreaProvider>;
}
