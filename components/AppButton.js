import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppTheme } from '../context/ThemeContext';

export default function AppButton({ title, icon, onPress, variant = 'primary' }) {
  const { theme } = useAppTheme();
  const danger = variant === 'danger';
  const reset = variant === 'reset';
  const backgroundColor = danger ? theme.dangerBackground : reset ? theme.muted : theme.primary;
  const color = danger ? theme.danger : reset ? theme.secondary : '#FFFFFF';
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={title} onPress={onPress} style={({ pressed }) => [styles.button, { backgroundColor, borderColor: danger ? theme.danger : backgroundColor, opacity: pressed ? 0.7 : 1 }]}>
      <View style={styles.content}>
        <Ionicons name={icon} size={21} color={color} />
        <Text style={[styles.label, { color }]}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 50, borderWidth: 1, borderRadius: 25, paddingHorizontal: 18, paddingVertical: 12, justifyContent: 'center' },
  content: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10 },
  label: { fontSize: 15, fontWeight: '700', textAlign: 'center', flexShrink: 1 },
});
