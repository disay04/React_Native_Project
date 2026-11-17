import React from 'react';
import { Redirect } from 'expo-router';

export default function ActivityTwoRedirect() {
  return <Redirect href="/activities/student-profile" withAnchor />;
}
