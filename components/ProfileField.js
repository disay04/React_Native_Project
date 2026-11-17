import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAppTheme } from '../context/ThemeContext';

export default function ProfileField({ label, icon, placeholder, value, onChangeText, autoComplete = /** @type {'name' | 'off'} */ ('off') }) {
  const { theme } = useAppTheme();
  return <View style={[styles.field, { backgroundColor: theme.card, borderColor: theme.border }]}>
    <Ionicons name={icon} size={22} color={theme.secondary} />
    <TextInput accessibilityLabel={label} placeholder={placeholder} placeholderTextColor={theme.secondary} value={value} onChangeText={onChangeText} autoComplete={autoComplete} autoCapitalize="words" maxLength={80} keyboardAppearance={theme.isDark ? 'dark' : 'light'} style={[styles.input, { color: theme.text }]} />
  </View>;
}

const styles = StyleSheet.create({
  field: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderRadius: 14, paddingHorizontal: 15, minHeight: 52 },
  input: { flex: 1, minWidth: 0, fontSize: 14, paddingVertical: 14 },
});
