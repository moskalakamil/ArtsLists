import { create } from 'zustand';

interface DeviceInfo {
  internetConnection: boolean;
  setInternetConnection: (val: boolean) => void;
}

export const useDeviceInfo = create<DeviceInfo>()((set) => ({
  internetConnection: false,
  setInternetConnection: (val) => set(() => ({ internetConnection: val })),
}));
