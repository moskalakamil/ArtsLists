import React from 'react';
import { SafeAreaView } from 'react-native';
import { ArtsFavouritesList } from '@/features/main.tab/_components/art/ArtsFavouritesList';

export const FavouriteScreen = () => {
  return (
    <SafeAreaView>
      <ArtsFavouritesList />
    </SafeAreaView>
  );
};
