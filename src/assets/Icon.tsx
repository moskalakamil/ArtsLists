import React from 'react';
import { SvgProps } from 'react-native-svg';
import discoverPhoto from './Svg/discover.svg';

const ICONS = {
  discoverPhoto,
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
