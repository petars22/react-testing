import { create } from "zustand";

const useAuthStore = create((set) => ({
  accessToken: 'skjf2438hfds73123',
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
}));

export default useAuthStore;