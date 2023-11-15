import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { CustomButton } from '@/features/common/CustomButton';

export const DiscoverScreen = () => {
  console.log('DiscoverScreen');
  return (
    <SafeAreaView>
      <Text className={'text-pink-700'}>test123</Text>
      <CustomButton title={'test'} />
    </SafeAreaView>
  );
};
