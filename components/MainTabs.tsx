import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Tabs } from 'expo-router';
import { PlatformPressable } from 'expo-router/react-navigation';
import type { BottomTabBarButtonProps } from 'expo-router/js-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlaskConical, Folder, House, Settings } from 'lucide-react-native';
import { useAppTheme } from '../context/ThemeContext';

function TabButton(props: BottomTabBarButtonProps) {
  return <PlatformPressable {...props} pressOpacity={0.65} pressColor="rgba(139,117,255,0.12)" />;
}

export default function MainTabs() {
  const { theme } = useAppTheme();
  const insets = useSafeAreaInsets();
  const { width, fontScale } = useWindowDimensions();
  const bottomPadding = Math.max(insets.bottom, 8);
  return (
    <Tabs backBehavior="history" screenOptions={{
      headerStyle: { backgroundColor: theme.background },
      headerTintColor: theme.text,
      headerTitleStyle: { fontSize: 18, fontWeight: '700' },
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      sceneStyle: { backgroundColor: theme.background },
      tabBarPosition: 'bottom',
      tabBarLabelPosition: 'below-icon',
      tabBarActiveTintColor: theme.navActive,
      tabBarInactiveTintColor: theme.navInactive,
      tabBarHideOnKeyboard: false,
      tabBarButton: TabButton,
      tabBarStyle: [styles.bar, {
        backgroundColor: theme.navBackground,
        borderTopColor: theme.navBorder,
        height: 64 + Math.max(0, fontScale - 1) * 22 + bottomPadding,
        paddingBottom: bottomPadding,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }],
      tabBarItemStyle: { flex: 1, paddingVertical: 0 },
      tabBarLabelStyle: { fontSize: width < 360 ? 10 : 11, lineHeight: 15, flexShrink: 0, fontWeight: '600', marginTop: 3 },
      tabBarIconStyle: { width: 25, height: 25 },
      animation: 'fade',
      transitionSpec: { animation: 'timing', config: { duration: 160 } },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false, tabBarIcon: ({ color }) => <House color={color} size={22} strokeWidth={1.7} /> }} />
      <Tabs.Screen name="activities" options={{ title: 'Lab', headerShown: false, tabBarIcon: ({ color }) => <FlaskConical color={color} size={22} strokeWidth={1.7} /> }} />
      <Tabs.Screen name="projects" options={{ title: 'Projects', tabBarIcon: ({ color }) => <Folder color={color} size={22} strokeWidth={1.7} /> }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ color }) => <Settings color={color} size={22} strokeWidth={1.7} /> }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: { borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 8, elevation: 0, shadowOpacity: 0 },
});
