import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { CustomButton } from '@/features/common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text className={''}>home</Text>
      <CustomButton title={'a'} onPress={() => AsyncStorage.clear()} />
    </SafeAreaView>
  );
};
