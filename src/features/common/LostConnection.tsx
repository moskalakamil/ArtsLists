import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Icon } from '@/assets/Icon';
import { CustomButton } from '@/features/common/CustomButton';
import { DEVICE_WIDTH } from '@/config';
import { useT } from '@/utils/useTranslation/useTranslation';

interface ILostConnectionProps {
  handleRefresh: () => void;
}

const LostConnection = ({ handleRefresh }: ILostConnectionProps) => {
  const { t } = useT();

  return (
    <SafeAreaView
      className={'flex-1 mt-[10vh] mb-[10vh] justify-between mx-auto'}
    >
      <View className={'flex items-center'}>
        <View className={'min-h-[250]'}>
          <Icon name={'lostSignal'} width={DEVICE_WIDTH * 0.9} />
        </View>
        <View className={'mt-5 mx-[5%]'}>
          <Text className={'text-xl font-bold mx-auto'}>
            {t('lostInternetConnection')}
          </Text>
        </View>
      </View>
      <View className={'items-center'}>
        <CustomButton
          title={t('refresh')}
          className={'w-[90%] mt-4'}
          onPress={handleRefresh}
        />
      </View>
    </SafeAreaView>
  );
};

export default LostConnection;
