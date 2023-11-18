import { FlatList, View } from 'react-native';
import React from 'react';
import { useGetArts } from '@/api/queries/arts';
import { Art } from '@/models/arts.model';
import { ArtItem } from '@/features/main.tab/_components/ArtItem';

export const ArtsList = () => {
  const { data, fetchNextPage, isLoading } = useGetArts({ limit: 10 });

  const arts = data?.pages.reduce((acc: Art[], curr) => {
    return [...acc, ...curr.data];
  }, []);

  const handleFetchMore = () => {
    fetchNextPage();
  };

  return (
    <>
      {isLoading &&
        Array.from({ length: 5 }).map((_, i) => (
          <View
            key={i}
            className={
              'bg-neutral-100 rounded-md animate-bounce my-[25] h-64 w-[90%] mx-[5%]'
            }
          />
        ))}
      <FlatList
        data={arts}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.2}
        renderItem={(info) => <ArtItem key={info.item.id} {...info} />}
      />
    </>
  );
};
