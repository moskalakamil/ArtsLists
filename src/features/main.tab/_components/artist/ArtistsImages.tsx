import React from 'react';
import { FlatList, Pressable, SafeAreaView, Text } from 'react-native';
import { useGetArts } from '@/api/queries/arts';
import { imageUrl } from '@/config';
import { Art } from '@/models/arts.model';
import Animated from 'react-native-reanimated';
import { useCommonNavigation } from '@/navigation/useGetCommonStacks';

const ArtistsImages = ({ name }: any) => {
  const navigation = useCommonNavigation();

  const { data, fetchNextPage } = useGetArts({
    limit: 20,
    search: name,
  });

  const arts = data?.pages.reduce((acc: Art[], curr) => {
    return [...acc, ...curr.data];
  }, []);

  const filteredArts = arts?.filter((art) => art.artist_title === name);

  return (
    <SafeAreaView>
      <FlatList
        data={filteredArts}
        horizontal={true}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            style={{ marginHorizontal: 15, width: 220 }}
            onPress={() =>
              navigation.navigate('ArtPreview', {
                id: item.id,
                image_id: item.image_id,
                title: item.title,
              })
            }
          >
            <Text
              numberOfLines={1}
              className={
                'bg-primary-100 animate-bounce rounded-md my-4 p-3 text-black font-medium text-lg'
              }
            >
              {item.title}
            </Text>
            <Animated.Image
              sharedTransitionTag={item.image_id}
              source={{ uri: imageUrl(item.image_id) }}
              className={'bg-neutral-200 w-[220] h-[220]'}
            />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default ArtistsImages;
