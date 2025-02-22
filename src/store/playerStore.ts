import { create } from "zustand";

interface UsePlayerStoreState {
  isPlaying: boolean;
  currentMusic: {
    playlist?: any;
    song?: any;
    songs: [];
  };
  volume: number;
  setVolume: (by: number) => void;
  setIsPlaying: (by: boolean) => void;
  setCurrentMusic: (by: any) => void;
}

export const usePlayerStore = create<UsePlayerStoreState>()((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  setVolume: (volume: number) => set({ volume }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  setCurrentMusic: (currentMusic: any) => set({ currentMusic }),
}));
