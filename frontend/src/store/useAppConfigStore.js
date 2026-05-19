import { create } from "zustand";

export const useAppConfigStore = create((set) => ({
  config: null,
  isLoading: true,
  error: null,

  setAppConfig: (backendData) =>
    set({
      config: backendData,
      isLoading: false,
      error: null,
    }),

  setLoading: (status) => set({ isLoading: status }),

  setError: (errMessage) => set({ error: errMessage, isLoading: false }),
}));
