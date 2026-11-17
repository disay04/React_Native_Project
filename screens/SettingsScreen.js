import React from 'react';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Screen from '../components/Screen';
import MemberCard from '../components/MemberCard';
import ThemeSwitch from '../components/ThemeSwitch';
import { useAppTheme } from '../context/ThemeContext';
import { BRAND } from '../config/brand';

export default function SettingsScreen() {
  const { theme } = useAppTheme();
  return <Screen contentStyle={{ paddingTop: 8 }}>
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={[styles.icon, { backgroundColor: theme.muted }]}><Ionicons name="moon-outline" size={25} color={theme.text} /></View>
      <View style={styles.copy}>
        <Text style={[styles.title, { color: theme.text }]}>Dark Mode</Text>
        <Text style={[styles.subtitle, { color: theme.secondary }]}>Use dark appearance</Text>
      </View>
      <ThemeSwitch />
    </View>
    <MemberCard settings />
    <Pressable accessibilityRole="button" accessibilityLabel="About CodeLab" onPress={() => router.push('/about')} style={({ pressed }) => [styles.card, { backgroundColor: theme.card, opacity: pressed ? 0.7 : 1 }]}>
      <Ionicons name="information-circle-outline" size={27} color={theme.text} />
      <View style={styles.copy}>
        <Text style={[styles.title, { color: theme.text }]}>About CodeLab</Text>
        <Text style={[styles.subtitle, { color: theme.secondary }]}>{BRAND.description}</Text>
        <Text style={[styles.version, { color: theme.secondary }]}>Version {BRAND.version}</Text>
      </View>
      <Ionicons name="chevron-forward" size={19} color={theme.secondary} />
    </Pressable>
  </Screen>;
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 18, borderRadius: 18, gap: 14, minHeight: 84 },
  icon: { width: 36, height: 36, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  copy: { flex: 1, gap: 5 },
  title: { fontSize: 15, lineHeight: 21, fontWeight: '700' },
  subtitle: { fontSize: 13, lineHeight: 19 },
  version: { fontSize: 11, lineHeight: 17 },
});
