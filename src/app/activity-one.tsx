import React from 'react';
import { Redirect } from 'expo-router';

export default function ActivityOneRedirect() {
  return <Redirect href="/activities/counter" withAnchor />;
}
