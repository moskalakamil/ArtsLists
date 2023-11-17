import React, { useRef } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';
import { cn } from '@/utils/cn';

interface ICustomButtonProps extends PressableProps {
  title: string;
  className?: string;
}

export const CustomButton = ({
  title,
  className,
  ...props
}: ICustomButtonProps) => {
  const buttonRef = useRef(null);
  return (
    <>
      <Pressable
        ref={buttonRef}
        {...props}
        className={cn(
          'bg-primary-600 items-center py-3 text-center px-2 rounded-lg transition-all active:opacity-80',
          className
        )}
      >
        <Text className={'text-white text-lg'}>{title}</Text>
      </Pressable>
    </>
  );
};
