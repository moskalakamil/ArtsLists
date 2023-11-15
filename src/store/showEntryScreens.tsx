import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ShowEntryScreens {
  showEntryScreen: boolean;
  setShowEntryScreen: (val: boolean) => void;
}

export const useShowEntryScreens = create<ShowEntryScreens>()(
  persist(
    (set) => ({
      showEntryScreen: true,
      setShowEntryScreen: (val) => set({ showEntryScreen: val }),
    }),
    {
      name: 'entry-screens-shown',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
