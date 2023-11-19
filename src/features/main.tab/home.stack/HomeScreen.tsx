import React from 'react';
import { SafeAreaView } from 'react-native';
import { ArtsList } from '@/features/main.tab/_components/art/ArtsList';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ArtsList />
    </SafeAreaView>
  );
};
