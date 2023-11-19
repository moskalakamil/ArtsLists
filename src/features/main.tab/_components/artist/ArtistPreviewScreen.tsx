import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useGetArtistById } from '@/api/queries/artist';
import { StackScreenProps } from '@react-navigation/stack';
import { Icon } from '@/assets/Icon';
import { useCommonNavigation } from '@/navigation/useGetCommonStacks';
import { PreviewItem } from '@/features/main.tab/_components/art/preview/PreviewItem';
import { useT } from '@/utils/useTranslation/useTranslation';
import RenderHTML from 'react-native-render-html';
import { DEVICE_WIDTH } from '@/config';

export const ArtistPreviewScreen = ({ route }: StackScreenProps<any>) => {
  const { params } = route;

  const { t } = useT();

  const { data, isLoading } = useGetArtistById(params?.id!);

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
          {isLoading && (
            <>
              {Array.from({ length: 2 }).map((_, i) => (
                <View
                  key={i}
                  className={
                    'bg-neutral-100 w-full h-28 animate-bounce mb-5 rounded-md'
                  }
                />
              ))}
            </>
          )}
          {artist?.title && (
            <PreviewItem icon={'artists'} title={t('name')}>
              <Text>{artist.title}</Text>
            </PreviewItem>
          )}
          {artist?.birth_date && (
            <PreviewItem icon={'calender'} title={t('lifeYears')}>
              <Text>{[artist.birth_date, artist?.death_date].join('-')}</Text>
            </PreviewItem>
          )}
          {artist?.description && (
            <PreviewItem icon={'description'} title={t('description')}>
              <RenderHTML
                contentWidth={DEVICE_WIDTH * 0.9}
                source={{ html: artist.description }}
              />
            </PreviewItem>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
