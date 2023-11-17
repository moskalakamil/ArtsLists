import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Icon, IconType } from '@/assets/Icon';
import { DEVICE_WIDTH } from '@/config';
import { Dots } from '@/features/entry.stack/_components/Dots';
import { CustomButton } from '@/features/common/CustomButton';
import { useT } from '@/utils/useTranslation/useTranslation';

interface ILayoutProps {
  iconName: IconType;
  titleText: string;
  buttonText?: string;
  descriptionText: string;
  activeIndex: number;
  navigation: () => void;
}

const EntryLayout = ({
  titleText,
  descriptionText,
  buttonText,
  iconName,
  activeIndex,
  navigation,
}: ILayoutProps) => {
  const { t } = useT();

  return (
    <SafeAreaView className={'flex-1 mt-40 mb-20 justify-between mx-auto'}>
      <View className={'flex items-center'}>
        <View className={'min-h-[250]'}>
          <Icon name={iconName} width={DEVICE_WIDTH * 0.9} />
        </View>
        <View className={'mt-5 mx-[5%]'}>
          <Text className={'text-xl font-bold mx-auto'}>{titleText}</Text>
          <Text className={'text-lg mt-3 text-center'}>{descriptionText}</Text>
        </View>
      </View>
      <View className={'items-center'}>
        <Dots activeIndex={activeIndex} length={4} />
        <CustomButton
          title={buttonText || t('next')}
          className={'w-[90%] mt-4'}
          onPress={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default EntryLayout;
