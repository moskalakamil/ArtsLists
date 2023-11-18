import React, { useEffect } from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { EntryStack } from './Entry.Stack';
import { useShowEntryScreens } from '@/store/showEntryScreens';
import { useDeviceInfo } from '@/store/deviceInfo';
import { SafeAreaView, Text } from 'react-native';
import { MainTab } from '@/navigation/Main.Tab';

export const navigationRef = createNavigationContainerRef();

export const AppNavigator = () => {
  const { setInternetConnection, internetConnection } = useDeviceInfo();
  const { showEntryScreen } = useShowEntryScreens();

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setInternetConnection(state.isConnected || false);
    });
  }, [setInternetConnection]);

  // const checkInternetConnection = async () => {
  //   const netInfo = await NetInfo.fetch();
  //   setInternetConnection(netInfo.isConnected || false);
  // };

  // const handleRefresh = () => {
  //   checkInternetConnection();
  // };

  return (
    <NavigationContainer ref={navigationRef}>
      {!internetConnection && (
        // <NoInternetConnectionModal handleRefresh={handleRefresh} />
        <SafeAreaView>
          <Text>internet</Text>
        </SafeAreaView>
      )}
      {showEntryScreen ? <EntryStack /> : <MainTab />}
    </NavigationContainer>
  );
};
