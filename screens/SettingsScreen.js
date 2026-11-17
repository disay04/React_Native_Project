import React, { useState } from 'react';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { CodeXml, Info, Moon, Palette, UserRound, ChevronRight, X } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Surface from '../components/Surface';
import MenuRow from '../components/MenuRow';
import AppButton from '../components/AppButton';
import ProfileField from '../components/ProfileField';
import ThemeSwitch from '../components/ThemeSwitch';
import { useAppTheme } from '../context/ThemeContext';
import { BRAND } from '../config/brand';

export default function SettingsScreen() {
  const { theme, toggleTheme, profileName, setProfileName } = useAppTheme();
  const [showTheme, setShowTheme] = useState(false);
  return (
    <Screen>
      <Pressable accessibilityRole="button" accessibilityLabel="Edit pair profile" onPress={() => router.push('/pair-profile')} style={({ pressed }) => [styles.profile, { backgroundColor: theme.card, borderColor: theme.border, opacity: pressed ? 0.7 : 1 }]}>
        <LinearGradient colors={['#BD91FF', '#7443DB']} style={styles.avatar}><UserRound color="#FFFFFF" size={30} strokeWidth={1.8} /></LinearGradient>
        <View style={{ flex: 1, gap: 5 }}><Text style={[styles.name, { color: theme.text }]}>{profileName.trim() || 'Student'}</Text><Text style={{ color: theme.secondary, fontSize: 13 }}>{BRAND.course}</Text></View>
        <ChevronRight size={21} color={theme.secondary} />
      </Pressable>
      <Text style={[styles.section, { color: theme.text }]}>App Preferences</Text>
      <Surface style={{ paddingVertical: 15 }}>
        <View style={styles.row}>
          <Moon size={23} color={theme.primary} />
          <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
          <ThemeSwitch />
        </View>
      </Surface>
      <MenuRow icon={Palette} title="Theme" subtitle="Indigo & violet" onPress={() => setShowTheme(previous => !previous)} />
      {showTheme && <Surface>
        <View style={styles.row}><Text style={[styles.label, { color: theme.text }]}>Purple workspace</Text><Pressable accessibilityRole="button" accessibilityLabel="Close theme details" onPress={() => setShowTheme(false)} hitSlop={12}><X size={20} color={theme.secondary} /></Pressable></View>
        <View style={styles.row}>{['#6040C2', '#7443DB', '#9C63E7', '#C39AFF'].map(color => <View key={color} style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: color }} />)}</View>
        <Text style={[styles.note, { color: theme.secondary }]}>The same indigo and violet palette adapts instantly to light and dark appearance.</Text>
        <AppButton title={theme.isDark ? 'Use Light Mode' : 'Use Dark Mode'} onPress={toggleTheme} secondary />
      </Surface>}
      <ProfileField label="Dashboard name" placeholder="e.g. Daisy Galope" value={profileName} onChangeText={setProfileName} autoComplete="name" />
      <Text style={[styles.section, { color: theme.text }]}>About</Text>
      <MenuRow icon={Info} title="App Information" onPress={() => router.push('/about')} />
      <MenuRow icon={CodeXml} title="Developers" subtitle={BRAND.developers} onPress={() => router.push('/pair-profile')} />
      <Text style={[styles.footer, { color: theme.secondary }]}>LabHub v1.0 · {BRAND.course}{'\n'}Preferences are saved for this session.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profile: { padding: 18, borderWidth: 1, borderRadius: 20, flexDirection: 'row', alignItems: 'center', gap: 14 },
  avatar: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  name: { fontSize: 18, fontWeight: '800' },
  section: { fontSize: 16, fontWeight: '700', marginTop: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  label: { flex: 1, fontSize: 14, fontWeight: '600' },
  note: { fontSize: 13, lineHeight: 21 },
  footer: { textAlign: 'center', fontSize: 11, lineHeight: 19, marginTop: 12 },
});
