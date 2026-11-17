import React, { createContext, useContext, useMemo, useState } from 'react';

/** @typedef {{id: string, title: string, body: string}} Note */
/** @typedef {{id: string, title: string, description: string}} Project */
/** @type {React.Context<{notes: Note[], addNote: (title: string, body: string) => void, deleteNote: (id: string) => void, projects: Project[], addProject: (title: string, description: string) => void, deleteProject: (id: string) => void} | null>} */
const WorkspaceContext = createContext(null);
let nextId = 1;

export function WorkspaceProvider({ children }) {
  const [notes, setNotes] = useState(/** @type {Note[]} */ ([]));
  const [projects, setProjects] = useState(/** @type {Project[]} */ ([]));
  const value = useMemo(() => ({
    notes, projects,
    addNote: (title, body) => {
      const note = { id: String(nextId++), title: title.trim(), body: body.trim() };
      setNotes(previous => [note, ...previous]);
    },
    deleteNote: id => setNotes(previous => previous.filter(note => note.id !== id)),
    addProject: (title, description) => {
      const project = { id: String(nextId++), title: title.trim(), description: description.trim() };
      setProjects(previous => [...previous, project]);
    },
    deleteProject: id => setProjects(previous => previous.filter(project => project.id !== id)),
  }), [notes, projects]);
  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) throw new Error('useWorkspace must be used within WorkspaceProvider');
  return context;
}
