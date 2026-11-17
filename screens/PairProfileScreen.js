import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Users } from 'lucide-react-native';
import Screen from '../components/Screen';
import ProfileField from '../components/ProfileField';
import { useAppTheme } from '../context/ThemeContext';
import { BRAND } from '../config/brand';

export default function PairProfileScreen() {
  const { theme, profileName, setProfileName, partnerName, setPartnerName } = useAppTheme();
  return (
    <Screen bottomInset eyebrow="BETTER TOGETHER" title="Pair Profile" description="Meet the people behind your laboratory work. Update your names to personalize the dashboard.">
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Users size={30} color={theme.primary} strokeWidth={1.8} />
        <Text style={[styles.title, { color: theme.text }]}>{profileName.trim() || 'You'} & {partnerName.trim() || 'Your partner'}</Text>
        <Text style={[styles.note, { color: theme.secondary }]}>{BRAND.course} · Laboratory partners</Text>
      </View>
      <ProfileField label="Your name" placeholder="Enter your name" value={profileName} onChangeText={setProfileName} autoComplete="name" />
      <ProfileField label="Partner name" placeholder="Enter your partner's name" value={partnerName} onChangeText={setPartnerName} />
      <Text style={[styles.note, { color: theme.secondary }]}>Names are shared across the app during this session and reset when it restarts.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { padding: 24, borderWidth: 1, borderRadius: 22, gap: 12, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center' },
  note: { fontSize: 14, lineHeight: 22 },
});
