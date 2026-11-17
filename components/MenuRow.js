import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useAppTheme } from '../context/ThemeContext';

export default function MenuRow({ icon: Icon, title, subtitle = '', onPress, color = '' }) {
  const { theme } = useAppTheme();
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.row, { backgroundColor: theme.card, borderColor: theme.border, opacity: pressed ? 0.7 : 1 }]}>
      <Icon size={25} color={color || theme.primary} strokeWidth={1.8} />
      <View style={styles.copy}>
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        {!!subtitle && <Text style={[styles.subtitle, { color: theme.secondary }]}>{subtitle}</Text>}
      </View>
      <ChevronRight size={19} color={theme.secondary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 18, minHeight: 72, borderRadius: 18, borderWidth: 1 },
  copy: { flex: 1, gap: 4 },
  title: { fontSize: 15, fontWeight: '700' },
  subtitle: { fontSize: 13, lineHeight: 19 },
});
