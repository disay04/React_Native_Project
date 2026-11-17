import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BRAND } from '../config/brand';
import { useAppTheme } from '../context/ThemeContext';

export default function MemberCard({ settings = false }) {
  const { theme } = useAppTheme();
  return <View style={[styles.card, { backgroundColor: settings ? theme.card : theme.tint }]}>
    <Ionicons name="people" size={30} color={settings ? theme.text : theme.primary} />
    <View style={styles.copy}>
      {settings && <Text style={[styles.title, { color: theme.text }]}>Project Members</Text>}
      <Text style={[settings ? styles.members : styles.title, { color: settings ? theme.secondary : theme.text }]}>{BRAND.developers}</Text>
      <Text style={[styles.members, { color: theme.secondary }]}>{BRAND.course}</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', borderRadius: 18, padding: 18, gap: 14, minHeight: 84 },
  copy: { flex: 1, gap: 5 },
  title: { fontSize: 14, lineHeight: 20, fontWeight: '700' },
  members: { fontSize: 13, lineHeight: 19 },
});
