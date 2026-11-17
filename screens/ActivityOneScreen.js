import React, { useEffect, useState } from 'react';
import { AccessibilityInfo, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import ActivityIntro from '../components/ActivityIntro';
import AppButton from '../components/AppButton';
import { useAppTheme } from '../context/ThemeContext';

export default function ActivityOneScreen() {
  const { theme } = useAppTheme();
  const [count, setCount] = useState(0);

  // Monitor each count change and announce the new value for screen-reader users.
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility('Counter: ' + count);
  }, [count]);

  return <Screen bottomInset contentStyle={styles.content}>
    <ActivityIntro icon="calculator-outline" title="Interactive Counter" description="Increase, decrease, or reset the count." />
    <View style={[styles.counter, { backgroundColor: theme.tint }]}>
      <Text accessibilityLabel={'Current count: ' + count} adjustsFontSizeToFit numberOfLines={1} style={[styles.number, { color: theme.primary }]}>{count}</Text>
    </View>
    <View style={styles.actions}>
      <AppButton title="Increase" icon="add" onPress={() => setCount(previous => previous + 1)} />
      <AppButton title="Decrease" icon="remove" variant="danger" onPress={() => setCount(previous => previous - 1)} />
      <AppButton title="Reset" icon="refresh" variant="reset" onPress={() => setCount(0)} />
    </View>
  </Screen>;
}

const styles = StyleSheet.create({
  content: { maxWidth: 480 },
  counter: { minHeight: 120, borderRadius: 24, justifyContent: 'center', padding: 20, marginVertical: 15 },
  number: { width: '100%', fontSize: 64, fontWeight: '700', textAlign: 'center' },
  actions: { gap: 16, marginTop: 10 },
});
