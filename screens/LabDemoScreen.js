import React, { useEffect, useState } from 'react';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Cloud, CodeXml, Layers, Network } from 'lucide-react-native';
import Screen from '../components/Screen';
import Surface from '../components/Surface';
import AppButton from '../components/AppButton';
import ProfileField from '../components/ProfileField';
import { useAppTheme } from '../context/ThemeContext';
import { activities } from '../config/activities';
import { BRAND } from '../config/brand';

function HelloDemo() {
  const { theme } = useAppTheme();
  const [personal, setPersonal] = useState(false);
  return <>
    <Surface style={{ alignItems: 'center', paddingVertical: 36 }}>
      <CodeXml size={44} color={theme.primary} />
      <Text style={[styles.hero, { color: theme.text }]}>{personal ? 'Hello, BSCS 4A!' : 'Hello, World!'}</Text>
      <Text style={[styles.copy, { color: theme.secondary }]}>Every great app starts with one small screen.</Text>
    </Surface>
    <AppButton title="Change greeting" onPress={() => setPersonal(previous => !previous)} />
  </>;
}

/** @typedef {{id: number, name: string, email: string}} DemoUser */
function FetchDemo() {
  const { theme } = useAppTheme();
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState(/** @type {{status: string, users: DemoUser[], error: string}} */ ({ status: 'loading', users: [], error: '' }));

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 12000);
    async function loadUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3', { signal: controller.signal });
        if (!response.ok) throw new Error('The sample service is unavailable.');
        const data = await response.json();
        if (!Array.isArray(data) || !data.every(user => Number.isFinite(user.id) && typeof user.name === 'string' && typeof user.email === 'string')) throw new Error('The sample service returned unexpected data.');
        if (active) setState({ status: 'success', users: data.slice(0, 3), error: '' });
      } catch {
        if (active) setState({ status: 'error', users: [], error: 'Could not load the sample data. Check your connection and try again.' });
      } finally {
        clearTimeout(timeout);
      }
    }
    void loadUsers();
    return () => { active = false; clearTimeout(timeout); controller.abort(); };
  }, [attempt]);

  const reload = () => {
    setState({ status: 'loading', users: [], error: '' });
    setAttempt(previous => previous + 1);
  };
  return <>
    <Surface>
      <Cloud size={30} color={theme.primary} />
      <Text style={[styles.heading, { color: theme.text }]}>Meet the sample users</Text>
      <Text style={[styles.copy, { color: theme.secondary }]}>A live request to JSONPlaceholder, a public demo API. An internet connection is required.</Text>
      {state.status === 'loading' && <View style={styles.loading}><ActivityIndicator color={theme.primary} /><Text style={{ color: theme.secondary }}>Loading sample data...</Text></View>}
      {state.status === 'error' && <Text accessibilityRole="alert" style={[styles.copy, { color: theme.primary }]}>{state.error}</Text>}
      {state.users.map(user => <View key={user.id} style={[styles.user, { borderColor: theme.border }]}><Text style={[styles.heading, { color: theme.text }]}>{user.name}</Text><Text style={[styles.copy, { color: theme.secondary }]}>{user.email}</Text></View>)}
      <AppButton title={state.status === 'error' ? 'Try again' : 'Reload data'} disabled={state.status === 'loading'} onPress={reload} secondary />
    </Surface>
  </>;
}

function GreetingCard({ name, course }) {
  const { theme } = useAppTheme();
  return <Surface>
    <Layers size={26} color={theme.primary} />
    <Text style={[styles.heading, { color: theme.text }]}>Hello, {name || 'Student'}!</Text>
    <Text style={[styles.copy, { color: theme.secondary }]}>{course}</Text>
  </Surface>;
}

function ComponentsDemo() {
  const { theme } = useAppTheme();
  const [name, setName] = useState('Daisy');
  return <>
    <ProfileField label="Name prop" placeholder="Enter a name" value={name} onChangeText={setName} />
    <GreetingCard name={name.trim()} course={BRAND.course} />
    <GreetingCard name="Julius" course={BRAND.course} />
    <Text style={[styles.copy, { color: theme.secondary }]}>Two cards, one reusable component. Editing the name prop updates the first card while the second keeps its own value.</Text>
  </>;
}

function GlobalDemo() {
  const { theme, toggleTheme, profileName, setProfileName } = useAppTheme();
  return <>
    <Surface>
      <Network size={30} color={theme.primary} />
      <Text style={[styles.heading, { color: theme.text }]}>Connected across your app</Text>
      <Text style={[styles.copy, { color: theme.secondary }]}>Welcome, {profileName.trim() || 'Student'}. Your current appearance is {theme.isDark ? 'dark' : 'light'}.</Text>
    </Surface>
    <ProfileField label="Shared dashboard name" placeholder="e.g. Daisy Galope" value={profileName} onChangeText={setProfileName} />
    <AppButton title={theme.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'} onPress={toggleTheme} />
    <AppButton title="See the change on Home" onPress={() => router.navigate('/')} secondary />
  </>;
}

export default function LabDemoScreen() {
  const params = useLocalSearchParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const activity = activities.find(item => item.id === slug);
  const demos = { hello: HelloDemo, fetch: FetchDemo, components: ComponentsDemo, global: GlobalDemo };
  const Demo = slug ? demos[slug] : undefined;
  if (!activity || !Demo) return <Screen title="Activity not found"><AppButton title="Back to lab activities" onPress={() => router.replace('/activities')} /></Screen>;
  return (
    <Screen eyebrow={'LAB / ' + activity.number} title={activity.title} description={activity.topic}>
      <Stack.Screen options={{ title: 'Activity ' + Number(activity.number) }} />
      <Demo key={slug} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { fontSize: 27, fontWeight: '800', textAlign: 'center' },
  heading: { fontSize: 17, fontWeight: '700' },
  copy: { fontSize: 14, lineHeight: 23 },
  loading: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  user: { borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 14, gap: 5 },
});
