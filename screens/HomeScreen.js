import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import MemberCard from '../components/MemberCard';
import ActivityList from '../components/ActivityList';
import { useAppTheme } from '../context/ThemeContext';
import { BRAND } from '../config/brand';

export default function HomeScreen() {
  const { theme } = useAppTheme();
  return <Screen contentStyle={{ gap: 23 }}>
    <View style={styles.welcome}>
      <Text accessibilityRole="header" style={[styles.heading, { color: theme.text }]}>Welcome to CodeLab</Text>
      <Text style={[styles.subtitle, { color: theme.secondary }]}>{BRAND.subtitle}</Text>
    </View>
    <MemberCard />
    <View style={styles.activities}>
      <Text accessibilityRole="header" style={[styles.section, { color: theme.text }]}>Laboratory Activities</Text>
      <ActivityList />
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  welcome: { gap: 7, paddingTop: 12 },
  heading: { fontSize: 25, lineHeight: 33, fontWeight: '800' },
  subtitle: { fontSize: 14, lineHeight: 21 },
  activities: { gap: 15, marginTop: 6 },
  section: { fontSize: 19, fontWeight: '700', lineHeight: 26 },
});
