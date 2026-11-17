import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Screen from '../components/Screen';
import MemberCard from '../components/MemberCard';
import { useAppTheme } from '../context/ThemeContext';
import { BRAND } from '../config/brand';

export default function AboutScreen() {
  const { theme } = useAppTheme();
  return <Screen bottomInset>
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <View style={[styles.logo, { backgroundColor: theme.primary }]}><Ionicons name="code-slash" size={34} color="#FFFFFF" /></View>
      <Text accessibilityRole="header" style={[styles.title, { color: theme.text }]}>{BRAND.name}</Text>
      <Text style={[styles.description, { color: theme.secondary }]}>{BRAND.description}</Text>
      <Text style={[styles.description, { color: theme.secondary }]}>A master compilation app for current and future laboratory activities, built with reusable components, React hooks, and shared theme state.</Text>
      <Text style={[styles.version, { color: theme.secondary }]}>Version {BRAND.version}</Text>
    </View>
    <MemberCard settings />
  </Screen>;
}

const styles = StyleSheet.create({
  card: { padding: 24, borderWidth: 1, borderRadius: 20, alignItems: 'center', gap: 16 },
  logo: { width: 62, height: 62, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800' },
  description: { fontSize: 14, lineHeight: 23, textAlign: 'center' },
  version: { fontSize: 12 },
});
