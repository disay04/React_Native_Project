import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useHeaderHeight } from 'expo-router/react-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../context/ThemeContext';

export default function Screen({ children, eyebrow = '', title = '', description = '', topInset = false, bottomInset = false }) {
  const { theme } = useAppTheme();
  const headerHeight = useHeaderHeight();
  const edges = /** @type {import('react-native-safe-area-context').Edge[]} */ (['left', 'right']);
  if (topInset) edges.push('top');
  if (bottomInset) edges.push('bottom');
  return (
    <SafeAreaView edges={edges} style={{ flex: 1, backgroundColor: theme.background }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={headerHeight}>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>
          <View style={styles.content}>
            {!!eyebrow && <Text style={[styles.eyebrow, { color: theme.primary }]}>{eyebrow}</Text>}
            {!!title && <Text accessibilityRole="header" style={[styles.title, { color: theme.text }]}>{title}</Text>}
            {!!description && <Text style={[styles.description, { color: theme.secondary }]}>{description}</Text>}
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1, padding: 20, paddingBottom: 28 },
  content: { width: '100%', maxWidth: 760, alignSelf: 'center', gap: 16 },
  eyebrow: { fontSize: 12, fontWeight: '800', letterSpacing: 2, marginTop: 8 },
  title: { fontSize: 32, lineHeight: 40, fontWeight: '800' },
  description: { fontSize: 16, lineHeight: 25, marginBottom: 8 },
});
