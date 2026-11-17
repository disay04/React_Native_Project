import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Surface from '../components/Surface';
import { useAppTheme } from '../context/ThemeContext';
import { calculate } from '../utils/calculator';

const keys = ['AC', '+/−', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '⌫', '0', '.', '='];

export default function CalculatorScreen() {
  const { theme } = useAppTheme();
  const [display, setDisplay] = useState('0');
  const [stored, setStored] = useState(/** @type {number | null} */ (null));
  const [operator, setOperator] = useState('');
  const [fresh, setFresh] = useState(true);
  const [error, setError] = useState('');

  const pressKey = key => {
    if (key === 'AC') {
      setDisplay('0'); setStored(null); setOperator(''); setFresh(true); setError('');
      return;
    }
    if (error && !/^\d$/.test(key) && key !== '.') return;
    setError('');
    if (/^\d$/.test(key) || key === '.') {
      if (fresh) { setDisplay(key === '.' ? '0.' : key); setFresh(false); }
      else if (display.length < 14 && !(key === '.' && display.includes('.'))) setDisplay(display === '0' && key !== '.' ? key : display + key);
      return;
    }
    if (key === '⌫') { if (!fresh) setDisplay(display.length <= 1 || (display.length === 2 && display.startsWith('-')) ? '0' : display.slice(0, -1)); return; }
    if (key === '+/−') { setDisplay(String(-Number(display))); return; }
    if (key === '%') { setDisplay(String(Number(display) / 100)); return; }
    try {
      if (['+', '-', '×', '÷'].includes(key)) {
        const value = stored !== null && operator && !fresh ? calculate(stored, operator, Number(display)) : Number(display);
        setStored(value); setDisplay(String(value)); setOperator(key); setFresh(true);
      } else if (key === '=' && stored !== null && operator && !fresh) {
        setDisplay(String(calculate(stored, operator, Number(display))));
        setStored(null); setOperator(''); setFresh(true);
      }
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : 'Unable to calculate.');
      setStored(null); setOperator(''); setFresh(true);
    }
  };

  return (
    <Screen bottomInset description="For the numbers between your ideas.">
      <View style={styles.calculator}>
        <Surface style={{ alignItems: 'flex-end', minHeight: 140, justifyContent: 'flex-end' }}>
          <Text style={{ color: theme.secondary, fontSize: 14 }}>{stored !== null ? String(stored) + ' ' + operator : 'READY TO CALCULATE'}</Text>
          <Text accessibilityLiveRegion="polite" style={[styles.display, { color: theme.text }]} adjustsFontSizeToFit numberOfLines={1}>{display}</Text>
          {!!error && <Text accessibilityRole="alert" style={{ color: theme.primary, fontSize: 13 }}>{error}</Text>}
        </Surface>
        <View style={styles.keys}>
          {keys.map(key => <View key={key} style={styles.keyCell}>
            <Pressable accessibilityRole="button" accessibilityLabel={key === '⌫' ? 'Delete last digit' : key === 'AC' ? 'Clear calculator' : key} onPress={() => pressKey(key)} style={({ pressed }) => [styles.key, { backgroundColor: key === '=' ? '#7443DB' : ['+', '-', '×', '÷'].includes(key) ? theme.tint : theme.card, borderColor: theme.border, opacity: pressed ? 0.65 : 1 }]}>
              <Text style={{ color: key === '=' ? '#FFFFFF' : theme.text, fontSize: 22, fontWeight: '500' }}>{key}</Text>
            </Pressable>
          </View>)}
        </View>
        <Text style={{ color: theme.secondary, fontSize: 11, textAlign: 'center' }}>Basic operations · Calculated in entry order</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  calculator: { maxWidth: 420, width: '100%', alignSelf: 'center', gap: 16 },
  display: { fontSize: 42, fontWeight: '600', width: '100%', textAlign: 'right' },
  keys: { flexDirection: 'row', flexWrap: 'wrap', margin: -5 },
  keyCell: { width: '25%', padding: 5 },
  key: { minHeight: 60, borderRadius: 18, borderWidth: 1, alignItems: 'center', justifyContent: 'center', padding: 10 },
});
