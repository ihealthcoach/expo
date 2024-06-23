// useGifStore.ts
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import useExerciseStore from "./exercisesStore";
import { Exercise } from "@/types/exercises";

interface GifStore {
  gifs: Record<string, string>; // Stores URIs to downloaded GIFs
  cacheGifs: () => Promise<void>;
  loadCache: () => Promise<void>;
}

const fetchGif = async (url: string, id: string): Promise<string> => {
  const fileUri = FileSystem.documentDirectory + `${id}.gif`;
  const { uri } = await FileSystem.downloadAsync(url, fileUri);
  return uri;
};

const useGifStore = create<GifStore>((set, get) => ({
  gifs: {},

  cacheGifs: async () => {
    try {
      console.log("Attempting to fetch GIFs");
      const exercises: Exercise[] = useExerciseStore.getState().exercises; // Get exercises from useExerciseStore
      const gifsToCache: Record<string, string> = {};

      for (const exercise of exercises) {
        const { id, gif_url } = exercise;
        if (gif_url) {
          const fileUri = await fetchGif(gif_url, id);
          gifsToCache[id] = fileUri;
        }
      }

      set({ gifs: gifsToCache });
      await AsyncStorage.setItem("cachedGifs", JSON.stringify(gifsToCache));
      console.log(gifsToCache);
    } catch (error) {
      console.error("Error caching GIFs:", error);
    }
  },

  loadCache: async () => {
    try {
      const cachedGifs = await AsyncStorage.getItem("cachedGifs");
      if (cachedGifs !== null) {
        set({ gifs: JSON.parse(cachedGifs) });
      }
    } catch (error) {
      console.error("Error loading GIF cache:", error);
    }
  },
}));

// Load GIF cache on store initialization
useGifStore.getState().loadCache();

export default useGifStore;
