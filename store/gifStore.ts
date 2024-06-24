import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import useExerciseStore from "./exercisesStore";
import { Exercise } from "@/types/exercises";

interface GifStore {
  gifs: Record<string, string>;
  fetchGifs: () => Promise<void>;
}

const fetchGif = async (url: string, id: string): Promise<string> => {
  const fileUri = FileSystem.documentDirectory + `${id}.gif`;
  const { uri } = await FileSystem.downloadAsync(url, fileUri);
  return uri;
};

const useGifStore = create<GifStore>()(
  persist(
    (set, get) => ({
      gifs: {},
      fetchGifs: async () => {
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
        } catch (error) {
          console.error("Error caching GIFs:", error);
        }
      },
    }),
    {
      name: "gif-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useGifStore;
