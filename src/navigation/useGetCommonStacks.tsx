import React from 'react';
import {
  NavigationProp,
  TypedNavigator,
  useNavigation,
} from '@react-navigation/native';
import PreviewScreen from '@/features/main.tab/_components/art/preview/PreviewScreen';
import { ArtistPreviewScreen } from '@/features/main.tab/_components/artist/ArtistPreviewScreen';

export type CommonStackNavParamList = {
  ArtPreview: {
    id: number;
    image_id: string;
    title: string;
  };
  ArtistPreview: {
    id: number;
  };
};

export const useCommonNavigation = useNavigation<
  NavigationProp<CommonStackNavParamList>
>;

export const useGetCommonStacks = (
  Stack: TypedNavigator<any, any, any, any, any>
) => (
  <>
    <Stack.Screen name="ArtPreview" component={PreviewScreen} />
    <Stack.Screen name="ArtistPreview" component={ArtistPreviewScreen} />
  </>
);
