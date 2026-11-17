import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppTheme } from '../context/ThemeContext';

export default function ActivityIntro({ icon, title, description }) {
  const { theme } = useAppTheme();
  return <View style={styles.intro}>
    <View style={[styles.icon, { backgroundColor: theme.tint }]}><Ionicons name={icon} size={34} color={theme.primary} /></View>
    <Text accessibilityRole="header" style={[styles.title, { color: theme.text }]}>{title}</Text>
    <Text style={[styles.description, { color: theme.secondary }]}>{description}</Text>
  </View>;
}

const styles = StyleSheet.create({
  intro: { alignItems: 'center', paddingTop: 15, paddingBottom: 8, gap: 10 },
  icon: { width: 60, height: 60, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  title: { fontSize: 23, lineHeight: 30, fontWeight: '800', textAlign: 'center' },
  description: { fontSize: 14, lineHeight: 21, textAlign: 'center' },
});
