import React from 'react';
import { DiscoverScreen } from '@/features/entry.stack/discover/screens/DiscoverScreen';
import { FavouritesScreen } from '@/features/entry.stack/favourites/screens/FavouritesScreen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ArtistsHistoryScreen } from '@/features/entry.stack/artists-history/screens/ArtistsHistoryScreen';
import { StartScreen } from '@/features/entry.stack/start/screens/StartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type EntryStackNavParamList = {
  Discover: undefined;
  Favourites: undefined;
  ArtistsHistory: undefined;
  Start: undefined;
};

const Stack = createNativeStackNavigator<EntryStackNavParamList>();

export const useEntryNavigation = useNavigation<
  NavigationProp<EntryStackNavParamList>
>;

export const EntryStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Discover'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'slide_from_right',
        customAnimationOnGesture: true,
        contentStyle: {
          flexGrow: 1,
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="ArtistsHistory" component={ArtistsHistoryScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
    </Stack.Navigator>
  );
};
