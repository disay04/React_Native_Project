import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NotebookPen, Trash2 } from 'lucide-react-native';
import Screen from '../components/Screen';
import Surface from '../components/Surface';
import AppButton from '../components/AppButton';
import ProfileField from '../components/ProfileField';
import { useAppTheme } from '../context/ThemeContext';
import { useWorkspace } from '../context/WorkspaceContext';

export default function NotesScreen() {
  const { theme } = useAppTheme();
  const { notes, addNote, deleteNote } = useWorkspace();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const saveNote = () => {
    if (!body.trim()) return;
    addNote(title.trim() || 'Untitled note', body);
    setTitle('');
    setBody('');
  };
  return (
    <Screen bottomInset description="Capture an idea before it gets away.">
      <ProfileField label="Title" placeholder="e.g. Ideas for our next lab" value={title} onChangeText={setTitle} />
      <Text style={[styles.label, { color: theme.text }]}>Your note</Text>
      <TextInput accessibilityLabel="Your note" multiline textAlignVertical="top" value={body} onChangeText={setBody} maxLength={3000} placeholder="Write something worth remembering..." placeholderTextColor={theme.secondary} style={[styles.input, { color: theme.text, backgroundColor: theme.card, borderColor: theme.border }]} />
      <AppButton title="Save note" onPress={saveNote} disabled={!body.trim()} />
      <Text style={[styles.meta, { color: theme.secondary }]}>Session notes · {notes.length} saved · Reset when the app restarts</Text>
      {!notes.length && <Surface>
        <NotebookPen size={27} color={theme.primary} />
        <Text style={[styles.title, { color: theme.text }]}>A fresh page</Text>
        <Text style={[styles.copy, { color: theme.secondary }]}>Your saved notes will appear here.</Text>
      </Surface>}
      {notes.map(note => <Surface key={note.id}>
        <View style={styles.row}>
          <Text style={[styles.title, { color: theme.text }]}>{note.title}</Text>
          <Pressable accessibilityRole="button" accessibilityLabel={'Delete note ' + note.title} onPress={() => deleteNote(note.id)} hitSlop={12}><Trash2 size={19} color={theme.secondary} /></Pressable>
        </View>
        <Text style={[styles.copy, { color: theme.secondary }]}>{note.body}</Text>
      </Surface>)}
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, fontWeight: '600' },
  input: { borderWidth: 1, borderRadius: 18, minHeight: 150, padding: 16, fontSize: 16, lineHeight: 24 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  title: { flex: 1, fontSize: 17, fontWeight: '700' },
  copy: { fontSize: 14, lineHeight: 23 },
  meta: { fontSize: 11, lineHeight: 19 },
});
