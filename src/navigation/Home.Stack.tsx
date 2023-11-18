import React from 'react';
import { HomeScreen } from '@/features/main.tab/home.stack/HomeScreen';
import {
  CommonStackNavParamList,
  useGetCommonStacks,
} from '@/navigation/useGetCommonStacks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type HomeStackNavParamList = CommonStackNavParamList & {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeStackNavParamList>();

export const useHomeNavigation = useNavigation<
  NavigationProp<HomeStackNavParamList>
>;

export const HomeStack = () => {
  const common = useGetCommonStacks(Stack);

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flexGrow: 1,
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {common}
    </Stack.Navigator>
  );
};
