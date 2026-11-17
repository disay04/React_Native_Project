import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useAppTheme } from '../context/ThemeContext';

export default function ScreenHeader({ title, brand = false, back = false }) {
  const { theme } = useAppTheme();
  const goBack = () => router.canGoBack() ? router.back() : router.replace('/');
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ backgroundColor: theme.background }}>
      <View style={styles.header}>
        {back && <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={goBack} hitSlop={4} style={styles.iconButton}><Ionicons name="chevron-back" size={24} color={theme.text} /></Pressable>}
        {brand && <View style={[styles.logo, { backgroundColor: theme.primary }]}><Ionicons name="code-slash" size={21} color="#FFFFFF" /></View>}
        <Text accessibilityRole="header" style={[styles.title, { color: theme.text }]}>{title}</Text>
        {brand && <Pressable accessibilityRole="button" accessibilityLabel="About CodeLab" onPress={() => router.push('/about')} style={styles.iconButton}><Ionicons name="information-circle-outline" size={24} color={theme.primary} /></Pressable>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12, minHeight: 64, gap: 12 },
  logo: { width: 32, height: 32, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  title: { flex: 1, fontSize: 19, lineHeight: 25, fontWeight: '700' },
  iconButton: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
});
