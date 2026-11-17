import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';
import ActivityList from '../components/ActivityList';
import { useAppTheme } from '../context/ThemeContext';

export default function ActivitiesScreen() {
  const { theme } = useAppTheme();
  return <Screen>
    <Text accessibilityRole="header" style={[styles.title, { color: theme.text }]}>Laboratory Activities</Text>
    <Text style={[styles.description, { color: theme.secondary }]}>Your collection of laboratory outputs. Choose an activity to get started.</Text>
    <ActivityList />
  </Screen>;
}

const styles = StyleSheet.create({
  title: { fontSize: 24, lineHeight: 32, fontWeight: '800', marginTop: 8 },
  description: { fontSize: 14, lineHeight: 22, marginBottom: 4 },
});
