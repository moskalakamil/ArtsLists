import { Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { images } from '@/assets/images';
import { imageUrl } from '@/config';
import React, { useState } from 'react';
import { Art } from '@/models/arts.model';
import { styled } from 'nativewind';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useHomeNavigation } from '@/navigation/Home.Stack';

interface ArtItemProps {
  item: Art;
  index: number;
}

const StyledBorderlessButton = styled(BorderlessButton);

export const ArtItem = ({ item: art, index }: ArtItemProps) => {
  const [artIndex, setArtIndex] = useState<undefined | number>(undefined);

  const navigation = useHomeNavigation();

  const width = useSharedValue(20);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: width.value,
    };
  }, [width]);
  const handleFavouritePress = (i: number) => {
    width.value = withSpring(width.value + 3, { duration: 300 }, () => {
      width.value = withSpring(width.value - 3, { duration: 300 });
    });
    setArtIndex(i);
  };

  const handleArtPress = (id: number, image_id: string, title: string) => {
    navigation.navigate('ArtPreview', { id, image_id, title });
  };

  return (
    <View key={art?.id} className={'relative mx-[5%] my-[25]'}>
      <Pressable
        className={'absolute z-10 top-3 right-3'}
        onPress={(e) => {
          e.stopPropagation();
          handleFavouritePress(index);
        }}
      >
        <Animated.Image
          source={artIndex === index ? images.heartActive : images.heart}
          style={artIndex === index && animatedStyles}
        />
      </Pressable>
      <View
        className={
          'bg-white w-full shadow-md shadow-neutral-400 rounded-[10px]'
        }
      >
        <StyledBorderlessButton
          className={'items-center overflow-hidden'}
          rippleColor={'#D5D5D5'}
          onPress={() => handleArtPress(art.id, art.image_id, art.title)}
        >
          <Animated.Image
            sharedTransitionTag={art.image_id}
            source={{ uri: imageUrl(art.image_id) }}
            className={'bg-neutral-200 w-full h-[220] rounded-t-[10px]'}
          />

          <View className={'p-3 w-full justify-center'}>
            <Animated.Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className={'text-lg font-medium'}
            >
              {art.title}
            </Animated.Text>
            <Text numberOfLines={1} className={'text-primary-600'}>
              {art?.artist_title}
            </Text>
          </View>
        </StyledBorderlessButton>
      </View>
    </View>
  );
};
