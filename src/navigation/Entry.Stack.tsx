import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DiscoverScreen } from '@/features/entry.stack/discover/screens/DiscoverScreen';

export type EntryStackNavParamList = {
  Discover: undefined;
};

const Stack = createStackNavigator<EntryStackNavParamList>();

export const EntryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Discover'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Discover" component={DiscoverScreen} />
    </Stack.Navigator>
  );
};
