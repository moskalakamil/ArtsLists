import { Dimensions } from 'react-native';

type Environment = keyof typeof configs;

export const environment: Environment = 'development';

const baseUrl = 'https://api.artic.edu/';

const defaultConfig = {
  currentAppVersion: 1,
  appStoreLink: 'https://',
  playStoreLink: 'https://',
  supportUrl: '',
};

const configs = {
  local: {
    ...defaultConfig,
    baseUrl: baseUrl,
  },
  development: {
    ...defaultConfig,
    baseUrl: baseUrl,
  },
  staging: {
    ...defaultConfig,
    baseUrl: baseUrl,
  },
  production: {
    ...defaultConfig,
    baseUrl: baseUrl,
  },
};
export const config = configs[environment];
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
