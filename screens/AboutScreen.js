import React from 'react';
import { router } from 'expo-router';
import { CodeXml, Layers, Users } from 'lucide-react-native';
import { StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';
import Surface from '../components/Surface';
import AppButton from '../components/AppButton';
import { BRAND } from '../config/brand';
import { useAppTheme } from '../context/ThemeContext';

export default function AboutScreen() {
  const { theme } = useAppTheme();
  return (
    <Screen bottomInset eyebrow="MADE FOR YOUR LEARNING JOURNEY" title="LabHub" description="Student Laboratory Compilation App">
      <Surface>
        <CodeXml size={34} color={theme.primary} />
        <Text style={[styles.title, { color: theme.text }]}>{BRAND.title} {BRAND.subtitle}</Text>
        <Text style={[styles.copy, { color: theme.secondary }]}>A multi-screen React Native app serving as the final UI and the master compilation hub for current and future laboratory activities.</Text>
      </Surface>
      <Surface>
        <Users size={25} color={theme.primary} />
        <Text style={[styles.title, { color: theme.text }]}>Developed by</Text>
        <Text style={[styles.copy, { color: theme.text }]}>{BRAND.developers}</Text>
        <Text style={[styles.copy, { color: theme.secondary }]}>{BRAND.course}{'\n'}{BRAND.project}</Text>
        <AppButton title="View pair profile" onPress={() => router.push('/pair-profile')} secondary />
      </Surface>
      <Surface>
        <Layers size={25} color={theme.primary} />
        <Text style={[styles.title, { color: theme.text }]}>Built with care</Text>
        <Text style={[styles.copy, { color: theme.secondary }]}>React Native & Expo{'\n'}Expo Router with React Navigation{'\n'}React Context API & React hooks{'\n'}Responsive Flexbox layouts{'\n'}Lucide icons · Indigo & violet themes</Text>
      </Surface>
      <Text style={[styles.copy, { color: theme.secondary }]}>Version 1.0.0 · Designed to grow with every lab.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 19, fontWeight: '700' },
  copy: { fontSize: 14, lineHeight: 24 },
});
