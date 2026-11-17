import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Screen from '../components/Screen';
import ActivityIntro from '../components/ActivityIntro';
import ProfileField from '../components/ProfileField';
import AppButton from '../components/AppButton';
import { useAppTheme } from '../context/ThemeContext';

export default function ActivityTwoScreen() {
  const { theme } = useAppTheme();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const clearProfile = () => { setName(''); setCourse(''); };
  return <Screen bottomInset contentStyle={{ maxWidth: 480 }}>
    <ActivityIntro icon="person-outline" title="Student Profile" description="Enter your information below." />
    <View style={styles.fields}>
      <ProfileField icon="person-outline" label="Full name" placeholder="Enter your name" value={name} onChangeText={setName} autoComplete="name" />
      <ProfileField icon="school-outline" label="Course and section" placeholder="e.g. BSCS 4A" value={course} onChangeText={setCourse} />
    </View>
    <View style={[styles.preview, { backgroundColor: theme.preview, borderColor: theme.border }]}>
      <View style={styles.previewTitle}>
        <Ionicons name="id-card-outline" size={25} color={theme.primary} />
        <Text accessibilityRole="header" style={[styles.heading, { color: theme.text }]}>Profile Preview</Text>
      </View>
      <View style={[styles.detail, { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: theme.border }]}>
        <Text style={[styles.label, { color: theme.text }]}>Name:</Text>
        <Text style={[styles.value, { color: theme.secondary }]}>{name.trim() || 'Not provided'}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={[styles.label, { color: theme.text }]}>Course:</Text>
        <Text style={[styles.value, { color: theme.secondary }]}>{course.trim() || 'Not provided'}</Text>
      </View>
    </View>
    <AppButton title="Clear Profile" icon="trash-outline" onPress={clearProfile} />
  </Screen>;
}

const styles = StyleSheet.create({
  fields: { gap: 13 },
  preview: { padding: 18, borderWidth: 1, borderRadius: 17, marginVertical: 9 },
  previewTitle: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  heading: { flex: 1, fontSize: 18, fontWeight: '700' },
  detail: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 12 },
  label: { width: 60, fontSize: 14, lineHeight: 21, fontWeight: '700' },
  value: { flex: 1, minWidth: 0, fontSize: 14, lineHeight: 21 },
});
