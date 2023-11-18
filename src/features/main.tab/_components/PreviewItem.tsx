import React from 'react';
import { Text, View } from 'react-native';
import { Icon, IconType } from '@/assets/Icon';
import { cn } from '@/utils/cn';

interface IPreviewItemProps {
  icon: IconType;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const PreviewItem = ({
  icon,
  title,
  children,
  className,
}: IPreviewItemProps) => {
  return (
    <View
      className={cn(
        'border-black my-3 flex-grow rounded-md p-3 bg-primary-100',
        className
      )}
    >
      <View className={'flex-row items-center gap-2'}>
        <Icon name={icon} width={30} height={30} />
        <Text className={'font-medium text-black'}>{title}</Text>
      </View>
      <View className={'ml-[38] flex-grow'}>{children}</View>
    </View>
  );
};
