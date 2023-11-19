import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Art } from '@/models/arts.model';

interface Favourites {
  favourites: Art[];
  setFavourites: (arts: Art[]) => void;
}

export const useFavourites = create<Favourites>()(
  persist(
    (set) => ({
      favourites: [],
      setFavourites: (val) => set({ favourites: val }),
    }),
    {
      name: 'favourites',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
