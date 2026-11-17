import React from 'react';
import { Stack } from 'expo-router';
import { useAppTheme } from '../../../../context/ThemeContext';

export const unstable_settings = { anchor: 'index' };

export default function ActivitiesLayout() {
  const { theme } = useAppTheme();
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: theme.background },
      headerTintColor: theme.text,
      headerTitleStyle: { fontSize: 18, fontWeight: '700' },
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      contentStyle: { backgroundColor: theme.background },
    }}>
      <Stack.Screen name="index" options={{ title: 'Lab Activities' }} />
      <Stack.Screen name="counter" options={{ title: 'Counter App' }} />
      <Stack.Screen name="student-profile" options={{ title: 'Student Profile' }} />
      <Stack.Screen name="[slug]" options={{ title: 'Lab Activity' }} />
    </Stack>
  );
}
