import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { images } from '@/assets/images';
import { imageUrl } from '@/config';
import { Art } from '@/models/arts.model';
import { styled } from 'nativewind';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useHomeNavigation } from '@/navigation/Home.Stack';
import { useManageFavourites } from '@/utils/hooks/useManageFavourites';

interface ArtItemProps {
  item: Art;
  index: number;
  removeOnUnlike?: boolean;
}

const StyledBorderlessButton = styled(BorderlessButton);

export const ArtItem = ({ item: art, removeOnUnlike }: ArtItemProps) => {
  const navigation = useHomeNavigation();

  const size = useSharedValue(20);
  const opacity = useSharedValue(1);
  const height = useSharedValue(280);
  const marginVertical = useSharedValue(25);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: size.value,
      height: size.value,
    };
  }, [size]);

  const cardAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      height: height.value,
      marginVertical: removeOnUnlike ? marginVertical.value : 25,
    };
  }, [size]);

  const { manageFavourites, isFavourite } = useManageFavourites();
  const handleFavouritePress = async () => {
    size.value = withSpring(size.value + 3, { duration: 300 }, () => {
      size.value = withSpring(size.value - 3, { duration: 300 });
    });

    if (isFavourite(art.id) && removeOnUnlike) {
      opacity.value = withTiming(0, {
        duration: 200,
        easing: Easing.ease,
      });

      height.value = withTiming(0, {
        duration: 300,
        easing: Easing.ease,
      });

      marginVertical.value = withTiming(0, {
        duration: 300,
        easing: Easing.ease,
      });

      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    manageFavourites(art);
  };

  const handleArtPress = (id: number, image_id: string, title: string) => {
    navigation.navigate('ArtPreview', { id, image_id, title });
  };

  return (
    <Animated.View
      key={art?.id}
      className={'relative mx-[5%] h-[300]'}
      style={cardAnimatedStyles}
    >
      <Pressable
        className={'absolute z-10 top-3 right-3'}
        onPress={(e) => {
          e.stopPropagation();
          handleFavouritePress();
        }}
      >
        <Animated.Image
          source={isFavourite(art.id) ? images.heartActive : images.heart}
          style={animatedStyles}
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
    </Animated.View>
  );
};
