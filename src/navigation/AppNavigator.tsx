import React, { useEffect, useState } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { EntryStack } from './Entry.Stack';
import { useShowEntryScreens } from '@/store/showEntryScreens';
import { useDeviceInfo } from '@/store/deviceInfo';
import { MainTab } from '@/navigation/Main.Tab';
import LostConnection from '@/features/common/LostConnection';
import { Splash } from '@/features/common/Splash';

export const navigationRef = createNavigationContainerRef();

export const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { setInternetConnection, internetConnection } = useDeviceInfo();
  const { showEntryScreen } = useShowEntryScreens();

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setInternetConnection(state.isConnected || false);
    });
  }, [setInternetConnection]);

  const checkInternetConnection = async () => {
    const netInfo = await NetInfo.fetch();
    setInternetConnection(netInfo.isConnected || false);
  };

  const handleRefresh = () => {
    checkInternetConnection();
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoading && <Splash />}
      {!internetConnection && !showEntryScreen && (
        <LostConnection handleRefresh={handleRefresh} />
      )}
      {!isLoading && showEntryScreen && <EntryStack />}
      {!isLoading && internetConnection && !showEntryScreen && <MainTab />}
    </NavigationContainer>
  );
};
