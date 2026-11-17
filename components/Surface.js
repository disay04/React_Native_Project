import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';

export default function Surface({ children, style = {} }) {
  const { theme } = useAppTheme();
  return <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: { padding: 20, borderWidth: 1, borderRadius: 20, gap: 14 },
});
