import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';
import AppButton from '../components/AppButton';
import ProfileField from '../components/ProfileField';
import Screen from '../components/Screen';

export default function ActivityTwoScreen() {
  const { theme } = useAppTheme();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  return (
    <Screen eyebrow="STUDENT TOOLS" title="Student Profile" description="A little introduction. Your profile preview updates as you type.">
      <ProfileField label="Full name" placeholder="e.g. Daisy Galope" value={name} onChangeText={setName} autoComplete="name" />
      <ProfileField label="Course and section" placeholder="e.g. BSCS 4A" value={course} onChangeText={setCourse} />
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.caption, { color: theme.primary }]}>PROFILE PREVIEW</Text>
        <View style={[styles.avatar, { backgroundColor: theme.tint }]}>
          <Text style={[styles.initial, { color: theme.primary }]}>{name.trim().charAt(0).toUpperCase() || '?'}</Text>
        </View>
        <Text style={[styles.name, { color: theme.text }]}>{name.trim() || 'Your name goes here'}</Text>
        <Text style={[styles.course, { color: theme.secondary }]}>{course.trim() || 'Add your course and section'}</Text>
      </View>
      <AppButton title="Clear profile" onPress={() => { setName(''); setCourse(''); }} secondary />
      <Text style={[styles.note, { color: theme.secondary }]}>This activity is a local preview. To change your dashboard name, visit Settings.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 22, padding: 24, alignItems: 'center', borderWidth: 1, gap: 14, marginTop: 8 },
  caption: { fontSize: 11, letterSpacing: 2, fontWeight: '800' },
  avatar: { width: 72, height: 72, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  initial: { fontSize: 32, fontWeight: '700' },
  name: { fontSize: 23, fontWeight: '700', textAlign: 'center' },
  course: { fontSize: 15, lineHeight: 23, textAlign: 'center' },
  note: { fontSize: 14, lineHeight: 22 },
});
