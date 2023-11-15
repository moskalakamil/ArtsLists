import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import './i18n.config';
import 'react-native-gesture-handler';
import './wdyr';
import { AppNavigator } from '@/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  queryClient,
  setupOnlineListener,
  useFocusAppFetch,
} from '@/api/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/utils/toast/toast';

setupOnlineListener();
const App = () => {
  useFocusAppFetch();
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flexGrow: 1 }}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flexGrow: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <AppNavigator />
            <Toast config={toastConfig} />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;
