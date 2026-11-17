import React, { useState } from 'react';
import { router } from 'expo-router';
import { Folder, Trash2 } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Surface from '../components/Surface';
import MenuRow from '../components/MenuRow';
import AppButton from '../components/AppButton';
import ProfileField from '../components/ProfileField';
import { useAppTheme } from '../context/ThemeContext';
import { useWorkspace } from '../context/WorkspaceContext';
import { BRAND } from '../config/brand';

export default function ProjectsScreen() {
  const { theme } = useAppTheme();
  const { projects, addProject, deleteProject } = useWorkspace();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const saveProject = () => {
    if (!title.trim()) return;
    addProject(title, description);
    setTitle('');
    setDescription('');
  };
  return (
    <Screen description="A home for the things you build, starting with LabHub.">
      <MenuRow icon={Folder} title="LabHub — Master Compilation" subtitle={BRAND.project + ' · ' + BRAND.course} onPress={() => router.push('/about')} />
      {projects.map(project => <Surface key={project.id}>
        <View style={styles.row}>
          <Text style={[styles.title, { color: theme.text }]}>{project.title}</Text>
          <Pressable accessibilityRole="button" accessibilityLabel={'Delete project ' + project.title} onPress={() => deleteProject(project.id)} hitSlop={12}><Trash2 size={19} color={theme.secondary} /></Pressable>
        </View>
        {!!project.description && <Text style={[styles.copy, { color: theme.secondary }]}>{project.description}</Text>}
      </Surface>)}
      <Surface>
        <Text style={[styles.title, { color: theme.text }]}>Your next project</Text>
        <ProfileField label="Project title" placeholder="e.g. My next laboratory app" value={title} onChangeText={setTitle} />
        <ProfileField label="Description" placeholder="What will you build?" value={description} onChangeText={setDescription} />
        <AppButton title="Add project" onPress={saveProject} disabled={!title.trim()} />
      </Surface>
      <Text style={[styles.copy, { color: theme.secondary }]}>Your project ideas stay here during this session and reset when the app restarts.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 14, alignItems: 'center' },
  title: { flex: 1, fontSize: 17, fontWeight: '700' },
  copy: { fontSize: 13, lineHeight: 22 },
});
