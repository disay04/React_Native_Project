import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import ActivityCard from './ActivityCard';
import { activities } from '../config/activities';

export default function ActivityList() {
  const { width } = useWindowDimensions();
  return <View style={styles.grid}>
    {activities.map(activity => <View key={activity.id} style={[styles.cell, { width: width >= 680 ? '50%' : '100%' }]}>
      <ActivityCard activity={activity} onPress={() => router.push(activity.href)} />
    </View>)}
  </View>;
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', margin: -6 },
  cell: { padding: 6 },
});
