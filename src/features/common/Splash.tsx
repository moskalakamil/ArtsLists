import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Icon } from '@/assets/Icon';

export const Splash = () => {
  return (
    <SafeAreaView
      className={'flex-grow flex-1 items-center bg-primary-100 justify-center'}
    >
      <View className={'items-center'}>
        <Text className={'text-primary-950 font-medium text-lg'}>
          Worlds Art
        </Text>
        <Icon name={'splash'} width={100} height={100} />
      </View>
    </SafeAreaView>
  );
};
