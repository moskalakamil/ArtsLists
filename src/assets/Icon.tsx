import React from 'react';
import { SvgProps } from 'react-native-svg';
import artistsHistory from './Svg/artistsHistory.svg';
import home from './Svg/home.svg';
import discover from './Svg/discover.svg';
import start from './Svg/start.svg';
import favourites from './Svg/favourites.svg';

const ICONS = {
  artistsHistory,
  home,
  discover,
  start,
  favourites,
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
