import React from 'react';
import {
  CommonStackNavParamList,
  useGetCommonStacks,
} from '@/navigation/useGetCommonStacks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '@/features/main.tab/search.stack/Search.Screen';

export type SearchStackNavParamList = CommonStackNavParamList & {
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<SearchStackNavParamList>();

export const useHomeNavigation = useNavigation<
  NavigationProp<SearchStackNavParamList>
>;

export const SearchStack = () => {
  const common = useGetCommonStacks(Stack);

  return (
    <Stack.Navigator
      initialRouteName={'SearchScreen'}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flexGrow: 1,
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      {common}
    </Stack.Navigator>
  );
};
