import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { UserRound } from 'lucide-react-native';
import Screen from '../components/Screen';
import MenuRow from '../components/MenuRow';
import { activities } from '../config/activities';
import { useAppTheme } from '../context/ThemeContext';

export default function ActivitiesScreen() {
  const { theme } = useAppTheme();
  return (
    <Screen>
      <Text style={[styles.intro, { color: theme.secondary }]}>Small experiments. A growing collection of skills.</Text>
      {activities.map(activity => <MenuRow key={activity.id} icon={activity.icon} color={theme.isDark ? theme.primary : activity.color} title={'Activity ' + Number(activity.number)} subtitle={activity.title} onPress={() => router.push(activity.href)} />)}
      <Text style={[styles.section, { color: theme.text }]}>Student tools</Text>
      <MenuRow icon={UserRound} title="Student Profile" subtitle="Your name, course & section" onPress={() => router.push('/activities/student-profile')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  intro: { fontSize: 13, lineHeight: 21, marginBottom: 4 },
  section: { fontSize: 14, fontWeight: '700', marginTop: 10 },
});
