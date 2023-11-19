import React from 'react';
import {
  CommonStackNavParamList,
  useGetCommonStacks,
} from '@/navigation/useGetCommonStacks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavouriteScreen } from '@/features/main.tab/favourite.stack/FavouriteScreen';

export type FavouriteStackNavParamList = CommonStackNavParamList & {
  FavouriteScreen: undefined;
};

const Stack = createNativeStackNavigator<FavouriteStackNavParamList>();

export const useFavouriteNavigation = useNavigation<
  NavigationProp<FavouriteStackNavParamList>
>;

export const FavouriteStack = () => {
  const common = useGetCommonStacks(Stack);

  return (
    <Stack.Navigator
      initialRouteName={'FavouriteScreen'}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flexGrow: 1,
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
      {common}
    </Stack.Navigator>
  );
};
