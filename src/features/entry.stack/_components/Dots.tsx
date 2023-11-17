import React from 'react';
import { View } from 'react-native';
import { cn } from '@/utils/cn';

interface IDotsProps {
  activeIndex: number;
  length: number;
}

export const Dots = ({ activeIndex, length }: IDotsProps) => {
  return (
    <View className={'flex-row gap-2'}>
      {Array.from({ length }).map((_, index) => (
        <View
          key={index}
          className={cn(
            'w-3 h-3 rounded-full bg-primary-300',
            index === activeIndex && '!w-6 !bg-primary-400'
          )}
        />
      ))}
    </View>
  );
};
