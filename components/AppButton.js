import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';

export default function AppButton({ title, onPress, color = '', secondary = false, disabled = false }) {
  const { theme } = useAppTheme();
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: secondary ? theme.tint : color || '#7443DB', opacity: disabled ? 0.45 : pressed ? 0.75 : 1 },
      ]}>
      <Text style={[styles.text, { color: secondary ? theme.primary : '#FFFFFF' }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 48, paddingVertical: 14, paddingHorizontal: 18, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  text: { fontWeight: '700', fontSize: 15, textAlign: 'center' },
});
