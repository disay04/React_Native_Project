import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';

export default function ProfileField({ label, value, onChangeText, placeholder, autoComplete = /** @type {'name' | 'off'} */ ('off') }) {
  const { theme } = useAppTheme();
  return (
    <View style={{ gap: 8 }}>
      <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      <TextInput accessibilityLabel={label} value={value} onChangeText={onChangeText}
        placeholder={placeholder} placeholderTextColor={theme.secondary}
        autoComplete={autoComplete} autoCapitalize="words" maxLength={80}
        style={[styles.input, { color: theme.text, backgroundColor: theme.card, borderColor: theme.border }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, fontWeight: '600' },
  input: { borderWidth: 1, borderRadius: 14, padding: 16, fontSize: 16, minHeight: 52 },
});
