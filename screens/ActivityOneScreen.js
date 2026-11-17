import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useAppTheme } from '../context/ThemeContext';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

export default function ActivityOneScreen() {
  const { theme } = useAppTheme();
  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState('Counter updated.');
  const message = count === 0 ? 'A fresh start. Try the buttons below.' : feedback;

  const changeCount = amount => {
    setCount(previous => previous + amount);
    setFeedback('Counter updated.');
  };

  useEffect(() => {
    if (count === 0) return;
    const timeout = setTimeout(() => setFeedback('Keep experimenting with your counter.'), 1800);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <Screen eyebrow="LAB / 02" title="Interactive Counter" description="Small actions, instant feedback. Explore how local state updates your screen.">
      <View style={[styles.counter, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={{ color: theme.secondary }}>CURRENT COUNT</Text>
        <Text accessibilityLabel={'Current count: ' + count} style={[styles.number, { color: theme.primary }]}>{count}</Text>
        <Text accessibilityLiveRegion="polite" style={[styles.message, { color: theme.secondary }]}>{message}</Text>
      </View>
      <View style={styles.actions}>
        <View style={{ flex: 1 }}><AppButton title="− Decrease" onPress={() => changeCount(-1)} secondary /></View>
        <View style={{ flex: 1 }}><AppButton title="+ Increase" onPress={() => changeCount(1)} /></View>
      </View>
      <AppButton title="Reset counter" onPress={() => setCount(0)} secondary />
      <Text style={[styles.message, { color: theme.secondary }]}>Negative numbers are welcome, too. Use Reset to start again. Switching tabs keeps your current count.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  counter: { borderWidth: 1, borderRadius: 22, alignItems: 'center', padding: 28, gap: 18 },
  number: { fontSize: 64, fontWeight: '800', textAlign: 'center' },
  message: { fontSize: 14, lineHeight: 22, textAlign: 'center' },
  actions: { flexDirection: 'row', gap: 12 },
});
