import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useHeaderHeight } from 'expo-router/react-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../context/ThemeContext';

export default function Screen({ children, bottomInset = false, contentStyle = {} }) {
  const { theme } = useAppTheme();
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView edges={bottomInset ? ['left', 'right', 'bottom'] : ['left', 'right']} style={{ flex: 1, backgroundColor: theme.background }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={headerHeight}>
        <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'} contentContainerStyle={styles.scroll}>
          <View style={[styles.content, contentStyle]}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1, padding: 20, paddingBottom: 28 },
  content: { width: '100%', maxWidth: 720, alignSelf: 'center', gap: 18 },
});
