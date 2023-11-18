import React from 'react';
import { SvgProps } from 'react-native-svg';
import search from './Svg/search.svg';
import artistsHistory from './Svg/artistsHistory.svg';
import technique from './Svg/technique.svg';
import home from './Svg/home.svg';
import artists from './Svg/artists.svg';
import classification from './Svg/classification.svg';
import dimensions from './Svg/dimensions.svg';
import discover from './Svg/discover.svg';
import enterSomething from './Svg/enterSomething.svg';
import start from './Svg/start.svg';
import favourites from './Svg/favourites.svg';
import categories from './Svg/categories.svg';
import description from './Svg/description.svg';
import arrowLeft from './Svg/arrowLeft.svg';

const ICONS = {
  search,
  artistsHistory,
  technique,
  home,
  artists,
  classification,
  dimensions,
  discover,
  enterSomething,
  start,
  favourites,
  categories,
  description,
  arrowLeft,
};

export type IconType = keyof typeof ICONS;

interface IconProps extends SvgProps {
  name: IconType;
}

const AppIcon = ({ name, ...props }: IconProps) => {
  const CurrentIcon = ICONS[name];
  return <CurrentIcon {...props} />;
};

export const Icon = React.memo(AppIcon);
