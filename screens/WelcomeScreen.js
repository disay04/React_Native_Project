import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, CodeXml } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { BRAND } from '../config/brand';

export default function WelcomeScreen({ onStart }) {
  return (
    <LinearGradient colors={['#170F32', '#100C23', '#241640']} style={{ flex: 1 }}>
      <View pointerEvents="none" style={[styles.blob, styles.topBlob]} />
      <View pointerEvents="none" style={[styles.blob, styles.bottomBlob]} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.content}>
            <Text style={styles.brand}>LABHUB / STUDENT EDITION</Text>
            <View style={styles.center}>
              <LinearGradient colors={['#BB8CFF', '#7443DB']} style={styles.icon}><CodeXml color="#FFFFFF" size={48} strokeWidth={1.8} /></LinearGradient>
              <Text accessibilityRole="header" style={styles.title}>{BRAND.title}</Text>
              <Text style={styles.subtitle}>{BRAND.subtitle}</Text>
              <Text style={styles.description}>Your compilation app for{'\n'}all laboratory activities.</Text>
              <Svg width={150} height={24} viewBox="0 0 150 24" style={{ marginTop: 20 }}><Path d="M2 12 C27 34 48 -8 75 12 S125 32 148 12" fill="none" stroke="#9264E7" strokeWidth={2} /></Svg>
            </View>
            <View style={styles.bottom}>
              <Pressable accessibilityRole="button" accessibilityLabel="Get started with LabHub" onPress={onStart} style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}>
                <LinearGradient colors={['#A76AEE', '#7544D6', '#673EC6']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.button}>
                  <Text style={styles.buttonText}>Get Started</Text><ArrowRight color="#FFFFFF" size={22} />
                </LinearGradient>
              </Pressable>
              <Text style={styles.credits}>{BRAND.developers}{'\n'}{BRAND.course} · {BRAND.project}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1, padding: 30 },
  content: { flex: 1, width: '100%', maxWidth: 420, alignSelf: 'center', minHeight: 520 },
  brand: { color: '#BCA6DE', fontSize: 10, letterSpacing: 2, textAlign: 'center', marginTop: 18 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 50 },
  icon: { width: 86, height: 78, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
  title: { color: '#FFFFFF', fontSize: 40, fontWeight: '800', textAlign: 'center' },
  subtitle: { color: '#F4EBFF', fontSize: 28, fontWeight: '700', textAlign: 'center', marginTop: 5 },
  description: { color: '#D9CFE9', fontSize: 16, textAlign: 'center', lineHeight: 25, marginTop: 24 },
  bottom: { gap: 24, paddingBottom: 12 },
  button: { minHeight: 54, borderRadius: 28, borderWidth: 1, borderColor: '#BB93F0', padding: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 14 },
  buttonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
  credits: { color: '#BAAACC', fontSize: 11, lineHeight: 19, textAlign: 'center' },
  blob: { position: 'absolute', borderWidth: 1, borderColor: '#7951BA44', backgroundColor: '#7443DB22', width: 330, height: 330, borderRadius: 110, transform: [{ rotate: '35deg' }] },
  topBlob: { left: -185, top: -90 },
  bottomBlob: { right: -180, bottom: -30 },
});
