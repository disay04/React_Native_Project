import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Stack, Tabs } from 'expo-router';
import { PlatformPressable } from 'expo-router/react-navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import ScreenHeader from '../components/ScreenHeader';
import { useAppTheme } from '../context/ThemeContext';

function TabButton(props) {
  return <PlatformPressable {...props} pressOpacity={0.7} pressColor="rgba(8,102,255,0.10)" />;
}

// Expo Router's JavaScript Tabs use the bundled React Navigation bottom-tabs navigator.
export function BottomTabs() {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();
  const { fontScale } = useWindowDimensions();
  return <Tabs backBehavior="history" screenOptions={{
    header: ({ options }) => <ScreenHeader title={options.title || 'CodeLab'} />,
    sceneStyle: { backgroundColor: theme.background },
    tabBarButton: TabButton,
    tabBarActiveTintColor: theme.primary,
    tabBarInactiveTintColor: theme.secondary,
    tabBarLabelPosition: 'below-icon',
    tabBarStyle: {
      backgroundColor: theme.card,
      borderTopColor: theme.border,
      borderTopWidth: StyleSheet.hairlineWidth,
      height: 64 + Math.max(0, fontScale - 1) * 22 + Math.max(8, insets.bottom),
      paddingTop: 8, paddingBottom: Math.max(8, insets.bottom),
      paddingLeft: insets.left, paddingRight: insets.right,
      elevation: 0, shadowOpacity: 0,
    },
    tabBarLabelStyle: { fontSize: 11, lineHeight: 15, flexShrink: 0, fontWeight: '600', marginTop: 3 },
    tabBarItemStyle: { flex: 1 },
    tabBarIconStyle: { width: 25, height: 25 },
    animation: 'none',
  }}>
    <Tabs.Screen name="index" options={{ title: 'Home', header: () => <ScreenHeader title="CodeLab" brand />, tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={23} color={focused ? theme.primary : theme.secondary} /> }} />
    <Tabs.Screen name="activities" options={{ title: 'Activities', tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'layers' : 'layers-outline'} size={23} color={focused ? theme.primary : theme.secondary} /> }} />
    <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'settings' : 'settings-outline'} size={23} color={focused ? theme.primary : theme.secondary} /> }} />
  </Tabs>;
}

export default function AppNavigator() {
  const { theme } = useAppTheme();
  const [loaded, error] = useFonts(Ionicons.font);
  if (!loaded) return <View style={[styles.loading, { backgroundColor: theme.background }]}>
    <StatusBar style={theme.isDark ? 'light' : 'dark'} />
    {error ? <Text style={{ color: theme.text }}>Please close and reopen CodeLab to load its icons.</Text> : <ActivityIndicator accessibilityLabel="Loading CodeLab" color={theme.primary} />}
  </View>;
  return <>
    <StatusBar style={theme.isDark ? 'light' : 'dark'} />
    <Stack screenOptions={{
      contentStyle: { backgroundColor: theme.background },
      header: ({ options }) => <ScreenHeader title={options.title || 'CodeLab'} back />,
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="activity-one" options={{ title: 'Activity 1' }} />
      <Stack.Screen name="activity-two" options={{ title: 'Activity 2' }} />
      <Stack.Screen name="about" options={{ title: 'About CodeLab' }} />
    </Stack>
  </>;
}

const styles = StyleSheet.create({
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});
