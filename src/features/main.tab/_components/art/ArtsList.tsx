import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { useGetArts } from '@/api/queries/arts';
import { Art } from '@/models/arts.model';
import { ArtItem } from '@/features/main.tab/_components/art/ArtItem';
import { Icon } from '@/assets/Icon';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@/config';
import { useT } from '@/utils/useTranslation/useTranslation';
import { useDebounce } from '@/utils/hooks/useDebounce';

interface IArtsListProps {
  search?: string;
  hideData?: boolean;
}

export const ArtsList = ({ search, hideData }: IArtsListProps) => {
  const { t } = useT();

  const debouncedSearch = useDebounce(search, 300);

  const { data, fetchNextPage, isLoading, error } = useGetArts({
    limit: 10,
    search: debouncedSearch,
  });

  const arts = data?.pages.reduce((acc: Art[], curr) => {
    return [...acc, ...curr.data];
  }, []);

  const handleFetchMore = () => {
    fetchNextPage();
  };

  if (error) {
    return (
      <View className={'items-center'}>
        <Text>{t('failedToLoadData')}</Text>
      </View>
    );
  }

  if (hideData && !search) {
    return (
      <View className={'items-center'}>
        <Icon
          name={'enterSomething'}
          width={DEVICE_WIDTH * 0.6}
          height={DEVICE_HEIGHT * 0.5}
        />
        <Text>{t('waitingToSearch')}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <View
            key={i}
            className={
              'bg-neutral-100 rounded-md animate-bounce my-[25] h-64 w-[90%] mx-[5%]'
            }
          />
        ))}
      </>
    );
  }

  if (arts?.length === 0) {
    return (
      <View className={'items-center'}>
        <Icon
          name={'noData'}
          width={DEVICE_WIDTH * 0.6}
          height={DEVICE_HEIGHT * 0.5}
        />
        <Text>{t('noData')}</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={arts}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.2}
        renderItem={(info) => <ArtItem key={info.item.id} {...info} />}
      />
    </>
  );
};
