import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppTheme } from '../context/ThemeContext';

export default function ActivityCard({ activity, onPress }) {
  const { theme } = useAppTheme();
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={'Activity ' + activity.number + ': ' + activity.title} onPress={onPress} style={({ pressed }) => [styles.card, { backgroundColor: theme.card, borderColor: theme.border, shadowOpacity: theme.isDark ? 0 : 0.04, opacity: pressed ? 0.7 : 1 }]}>
      <View style={[styles.icon, { backgroundColor: theme.tint }]}><Ionicons name={activity.icon} size={29} color={theme.primary} /></View>
      <View style={styles.copy}>
        <Text style={[styles.title, { color: theme.text }]}>Activity {activity.number}</Text>
        <Text style={[styles.description, { color: theme.secondary }]}>{activity.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={theme.secondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 13, minHeight: 94, padding: 15, borderWidth: 1, borderRadius: 17, shadowColor: '#182238', shadowOffset: { width: 0, height: 2 }, shadowRadius: 5, elevation: 1 },
  icon: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  copy: { flex: 1, minWidth: 0, gap: 5 },
  title: { fontSize: 15, fontWeight: '700' },
  description: { fontSize: 13, lineHeight: 18 },
});
