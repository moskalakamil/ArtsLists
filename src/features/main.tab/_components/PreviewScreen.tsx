import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { DEVICE_WIDTH, imageUrl } from '@/config';
import { StackScreenProps } from '@react-navigation/stack';
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated';
import { Icon } from '@/assets/Icon';
import { useGetArtById } from '@/api/queries/arts';
import { PreviewItem } from '@/features/main.tab/_components/PreviewItem';
import RenderHTML from 'react-native-render-html';
import { useT } from '@/utils/useTranslation/useTranslation';
import ImageView from 'react-native-image-viewing';
import { useCommonNavigation } from '@/navigation/useGetCommonStacks';
import { images } from '@/assets/images';
import { useManageFavourites } from '@/utils/hooks/useManageFavourites';

const PreviewScreen = ({ route }: StackScreenProps<any>) => {
  const { params } = route;

  const { t } = useT();

  const [imagePreview, setImagePreview] = useState(false);

  const navigation = useCommonNavigation();

  const { isFavourite, manageFavourites } = useManageFavourites();

  const { data, isLoading } = useGetArtById(params?.id!);

  const art = data?.data;

  return (
    <ScrollView className={'flex-grow'}>
      <Pressable
        onPress={() => navigation.goBack()}
        className={'z-10 top-3 absolute'}
      >
        <Icon name={'arrowLeft'} />
      </Pressable>
      <Pressable onPress={() => setImagePreview(true)}>
        <Animated.Image
          sharedTransitionTag={params?.image_id || art?.image_id}
          source={{ uri: imageUrl(params?.image_id) }}
          style={{
            width: '100%',
            height: 220,
            backgroundColor: 'red',
          }}
        />
      </Pressable>
      {imagePreview && (
        <ImageView
          images={[{ uri: imageUrl(params?.image_id) }]}
          imageIndex={0}
          visible={imagePreview}
          onRequestClose={() => setImagePreview(false)}
        />
      )}
      <View className={'mx-5 pb-24 relative'}>
        <Pressable
          onPress={() => manageFavourites(art!)}
          className={'z-10 -top-14 absolute -right-1 bg-white p-4 rounded-full'}
        >
          <Animated.Image
            entering={FadeInRight}
            source={
              isFavourite(params?.id!) ? images.heartActive : images.heart
            }
          />
        </Pressable>
        <Animated.Text
          style={{ marginVertical: 10 }}
          entering={FadeInUp}
          className={'text-lg font-medium'}
        >
          {params?.title || art?.title}
        </Animated.Text>
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <View
              key={i}
              className={
                'bg-neutral-100 w-full h-28 animate-bounce mb-5 rounded-md'
              }
            />
          ))}
        <Animated.View
          className={'flex-grow'}
          entering={FadeInRight}
          style={{ elevation: 5 }}
        >
          {art?.artist_display && (
            <Pressable
              onPress={() =>
                navigation.navigate('ArtistPreview', { id: art.artist_id })
              }
              className={
                'shadow-md rounded-md bg-primary-100 shadow-neutral-400 w-full my-3'
              }
            >
              <PreviewItem
                icon={'artists'}
                title={t('artist')}
                className={'!my-0'}
              >
                <Text>{art.artist_display}</Text>
              </PreviewItem>
            </Pressable>
          )}
          {art?.description && (
            <PreviewItem icon={'description'} title={t('description')}>
              <RenderHTML
                contentWidth={DEVICE_WIDTH * 0.9}
                source={{
                  html: art.description,
                }}
              />
            </PreviewItem>
          )}
          {art?.dimensions && (
            <PreviewItem icon={'dimensions'} title={t('dimensions')}>
              <Text>{art.dimensions}</Text>
            </PreviewItem>
          )}
          {art?.technique_titles && art.technique_titles.length > 0 && (
            <PreviewItem icon={'technique'} title={t('technique')}>
              <Text>{art.technique_titles.join(', ')}</Text>
            </PreviewItem>
          )}
          {art?.category_titles && art.category_titles.length > 0 && (
            <PreviewItem icon={'categories'} title={t('categories')}>
              <Text>{art.category_titles.join(', ')}</Text>
            </PreviewItem>
          )}
          {art?.classification_titles &&
            art.classification_titles.length > 0 && (
              <PreviewItem icon={'classification'} title={t('classification')}>
                <Text>{art.classification_titles.join(', ')}</Text>
              </PreviewItem>
            )}
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default PreviewScreen;
