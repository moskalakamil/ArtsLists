import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@/features/main.stack/home/screens/HomeScreen';

export type HomeStackNavParamList = {
  Home: undefined;
  Preview: undefined;
};

export const HomeStack = () => {
  const Stack = createStackNavigator<HomeStackNavParamList>();

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
