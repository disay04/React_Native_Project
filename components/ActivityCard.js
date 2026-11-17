import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';
import AppButton from './AppButton';

export default function ActivityCard({ number, title, description, onPress }) {
  const { theme } = useAppTheme();
  return (
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <Text style={[styles.number, { color: theme.primary }]}>LAB / {number}</Text>
      <Text accessibilityRole="header" style={[styles.title, { color: theme.text }]}>{title}</Text>
      <Text style={[styles.description, { color: theme.secondary }]}>{description}</Text>
      <AppButton title={'Open ' + title} onPress={onPress} secondary />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, padding: 22, borderRadius: 22, borderWidth: 1, gap: 14 },
  number: { fontWeight: '800', fontSize: 12, letterSpacing: 1.5 },
  title: { fontSize: 22, fontWeight: '700' },
  description: { fontSize: 15, lineHeight: 23, flexGrow: 1 },
});
