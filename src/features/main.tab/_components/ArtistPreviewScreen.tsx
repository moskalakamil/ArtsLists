import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useGetArtistById } from '@/api/queries/artist';
import { StackScreenProps } from '@react-navigation/stack';
import { Icon } from '@/assets/Icon';
import { useCommonNavigation } from '@/navigation/useGetCommonStacks';
import { PreviewItem } from '@/features/main.tab/_components/PreviewItem';
import { useT } from '@/utils/useTranslation/useTranslation';

export const ArtistPreviewScreen = ({ route }: StackScreenProps<any>) => {
  const { params } = route;

  const { t } = useT();

  const { data } = useGetArtistById(params?.id!);

  const navigation = useCommonNavigation();

  const artist = data?.data;

  return (
    <SafeAreaView>
      <ScrollView className={'flex-grow'}>
        <Pressable
          onPress={() => navigation.goBack()}
          className={'z-10 top-3 absolute'}
        >
          <Icon name={'arrowLeft'} />
        </Pressable>
        <View className={'pt-14 pb-24 mx-[5%]'}>
          <PreviewItem title={'Name'} icon={'artists'}>
            <Text>{artist?.title}</Text>
          </PreviewItem>
          <PreviewItem icon={'description'} title={t('description')}>
            <Text>{artist?.description}</Text>
          </PreviewItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
