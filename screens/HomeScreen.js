import React from 'react';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { ArrowUpRight, Calculator, CodeXml, FlaskConical, Folder, Info, NotebookPen, Settings, Smartphone } from 'lucide-react-native';
import { useAppTheme } from '../context/ThemeContext';
import { BRAND } from '../config/brand';
import Screen from '../components/Screen';

const shortcuts = [
  { title: 'Lab Activities', caption: 'Learn by doing', icon: FlaskConical, light: '#E6DEFF', dark: '#302146', color: '#7140D2', darkColor: '#CC9AFF', route: '/activities' },
  { title: 'Projects', caption: 'Everything you build', icon: Folder, light: '#DEECFF', dark: '#1B2D43', color: '#2876CD', darkColor: '#8ACBFF', route: '/projects' },
  { title: 'Notes', caption: 'Keep your ideas close', icon: NotebookPen, light: '#DBF2E9', dark: '#1B3634', color: '#168662', darkColor: '#84DEC2', route: '/notes' },
  { title: 'Calculator', caption: 'A little help with numbers', icon: Calculator, light: '#FFF0CF', dark: '#372E25', color: '#AD6719', darkColor: '#F2C36F', route: '/calculator' },
  { title: 'About', caption: 'Meet your compilation app', icon: Info, light: '#EAE1FF', dark: '#292146', color: '#7546CA', darkColor: '#CCAEFF', route: '/about' },
  { title: 'Settings', caption: 'Make yourself at home', icon: Settings, light: '#FBE1EC', dark: '#38223C', color: '#B1477F', darkColor: '#E4ACD7', route: '/settings' },
];

export default function HomeScreen() {
  const { theme, profileName, partnerName } = useAppTheme();
  const { width } = useWindowDimensions();
  const columns = width >= 720 ? 3 : 2;
  return (
    <Screen topInset>
      <LinearGradient colors={theme.isDark ? ['#32204E', '#59308E', '#7949CD'] : ['#9959E5', '#7847D8', '#6040C2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
        <View pointerEvents="none" style={styles.orb} />
        <View style={{ flex: 1, gap: 6 }}>
          <Text style={styles.heroEyebrow}>YOUR STUDENT WORKSPACE</Text>
          <Text style={styles.heroTitle}>{BRAND.title}</Text>
          <Text style={styles.heroSubtitle}>{BRAND.subtitle}</Text>
          <Text style={styles.heroNote}>Learn. Create. Keep it all here.</Text>
        </View>
        <View style={styles.phoneArt} pointerEvents="none">
          <Smartphone color="#D8BCFF" size={72} strokeWidth={1.5} />
          <CodeXml color="#FFFFFF" size={26} strokeWidth={1.6} style={styles.phoneCode} />
        </View>
      </LinearGradient>
      <View style={styles.sectionHeader}>
        <Text accessibilityRole="header" style={[styles.sectionTitle, { color: theme.text }]}>Your workspace</Text>
        <Text style={[styles.sectionMeta, { color: theme.secondary }]}>A place for every idea</Text>
      </View>
      <View style={styles.grid}>
        {shortcuts.map(({ title, caption, icon: Icon, light, dark, color, darkColor, route }) => (
          <View key={title} style={{ width: columns === 3 ? '33.333%' : '50%', padding: 6 }}>
            <Pressable accessibilityRole="button" onPress={() => router.navigate(route)} style={({ pressed }) => [styles.tile, { backgroundColor: theme.isDark ? dark : light, borderColor: theme.isDark ? theme.border : 'transparent', opacity: pressed ? 0.7 : 1 }]}>
              <Icon size={29} color={theme.isDark ? darkColor : color} strokeWidth={1.7} />
              <Text style={[styles.tileTitle, { color: theme.text }]}>{title}</Text>
              <Text style={[styles.tileCaption, { color: theme.secondary }]}>{caption}</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <Pressable accessibilityRole="button" onPress={() => router.push('/about')} style={({ pressed }) => [styles.footer, { borderColor: theme.border, opacity: pressed ? 0.65 : 1 }]}>
        <View style={{ flex: 1, gap: 4 }}>
          <Text style={[styles.footerTitle, { color: theme.text }]}>Built together. Made for learning.</Text>
          <Text style={[styles.footerText, { color: theme.secondary }]}>{profileName.trim() || 'Student'} & {partnerName.trim() || 'Your partner'} · {BRAND.course}</Text>
        </View>
        <ArrowUpRight size={20} color={theme.primary} />
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { minHeight: 160, borderRadius: 22, padding: 22, flexDirection: 'row', alignItems: 'center', gap: 10, overflow: 'hidden' },
  heroEyebrow: { color: '#E9D9FF', fontSize: 9, fontWeight: '700', letterSpacing: 1.4, marginBottom: 7 },
  heroTitle: { color: '#FFFFFF', fontSize: 28, fontWeight: '800' },
  heroSubtitle: { color: '#FFFFFF', fontSize: 21, fontWeight: '700' },
  heroNote: { color: '#EFE3FF', fontSize: 12, lineHeight: 19, marginTop: 5 },
  orb: { position: 'absolute', width: 190, height: 190, borderRadius: 95, backgroundColor: '#FFFFFF0B', right: -60, top: -45 },
  phoneArt: { alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '13deg' }], width: 72 },
  phoneCode: { position: 'absolute' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, marginTop: 9 },
  sectionTitle: { fontSize: 16, fontWeight: '700' },
  sectionMeta: { fontSize: 11 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -6, marginTop: -7 },
  tile: { borderRadius: 19, minHeight: 116, padding: 16, borderWidth: 1, alignItems: 'center', justifyContent: 'center', gap: 10 },
  tileTitle: { fontSize: 14, fontWeight: '700', textAlign: 'center' },
  tileCaption: { fontSize: 10, lineHeight: 15, textAlign: 'center' },
  footer: { flexDirection: 'row', gap: 12, alignItems: 'center', paddingTop: 18, marginTop: 2, borderTopWidth: StyleSheet.hairlineWidth },
  footerTitle: { fontSize: 12, fontWeight: '600' },
  footerText: { fontSize: 10, lineHeight: 17 },
});
