import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { ArtItem } from '@/features/main.tab/_components/art/ArtItem';
import { useFavourites } from '@/store/favourites';
import { Icon } from '@/assets/Icon';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@/config';
import { useT } from '@/utils/useTranslation/useTranslation';

export const ArtsFavouritesList = () => {
  const { t } = useT();

  const { favourites } = useFavourites();

  if (favourites?.length === 0) {
    return (
      <View className={'items-center'}>
        <Icon
          name={'emptyFavourites'}
          width={DEVICE_WIDTH * 0.6}
          height={DEVICE_HEIGHT * 0.5}
        />
        <Text>{t('emptyFavourites')}</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={favourites}
        renderItem={(info) => (
          <ArtItem key={info.item.id} removeOnUnlike={true} {...info} />
        )}
      />
    </>
  );
};
