import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useGetArts } from '@/api/queries/arts';
import { imageUrl } from '@/config';
import { Art } from '@/models/arts.model';
import Animated from 'react-native-reanimated';
import { useCommonNavigation } from '@/navigation/useGetCommonStacks';
import { cn } from '@/utils/cn';
import { useT } from '@/utils/useTranslation/useTranslation';

const ArtistsImages = ({ name }: any) => {
  const { t } = useT();

  const navigation = useCommonNavigation();

  const { data, isLoading, fetchNextPage } = useGetArts({
    limit: 20,
    search: name,
  });

  const arts = data?.pages.reduce((acc: Art[], curr) => {
    return [...acc, ...curr.data];
  }, []);

  const filteredArts = arts?.filter((art) => art.artist_title === name);

  if (isLoading) {
    return (
      <>
        <View
          className={
            'bg-neutral-100 rounded-md animate-bounce w-[150] h-[30] my-3'
          }
        />
        <View className={'flex-row mt-4'}>
          {Array.from({ length: 2 }).map((_, i) => (
            <View key={i} className={'mr-[25]'}>
              <View
                className={
                  'w-[220] bg-neutral-200 animate-bounce rounded-md h-[220]'
                }
              />
              <View
                className={
                  'w-[220] bg-neutral-200 animate-bounce rounded-md h-[60] mb-4'
                }
              />
            </View>
          ))}
        </View>
      </>
    );
  }

  return (
    <SafeAreaView>
      <Text className={'text-lg font-medium my-4'}>{t('moreArts')}:</Text>
      <FlatList
        data={filteredArts}
        horizontal={true}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Pressable
            className={cn('w-[220]', index !== 0 && 'mx-[15]')}
            onPress={() =>
              navigation.navigate('ArtPreview', {
                id: item.id,
                image_id: item.image_id,
                title: item.title,
              })
            }
          >
            <Animated.Image
              sharedTransitionTag={item.image_id}
              source={{ uri: imageUrl(item.image_id) }}
              className={'bg-neutral-200 w-[220] h-[220]'}
            />
            <Text
              numberOfLines={1}
              className={
                'bg-primary-100 animate-bounce rounded-md my-4 p-3 text-black font-medium text-lg'
              }
            >
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default ArtistsImages;
