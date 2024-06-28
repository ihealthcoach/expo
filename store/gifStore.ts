import { create } from "zustand";
import { MMKV } from "react-native-mmkv";
import { createJSONStorage, persist } from "zustand/middleware";
import { ExerciseSummary } from "@/types/exercises";
import * as FileSystem from "expo-file-system";
import { zustandMMKVStorage } from "@/lib/mmkv/mmkv";
import useExerciseStore from "./exercisesStore";

const mmkvStorage = new MMKV();

interface GifStore {
  gifs: {};
  fetchAndStoreAllGifs: () => Promise<void>;
  getGifUriById: (id: string) => string | undefined;
  getAllGifs: () => {} | undefined;
  ready: boolean; //check for whether all the gifs have loaded
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
      ready: false,
      fetchAndStoreAllGifs: async (): Promise<void> => {
        try {
          console.log("Fetching and storing all GIFs");
          const exercises: ExerciseSummary[] =
            useExerciseStore.getState().exercises;
          const gifsToCache: Record<string, string> = {};

          for (const exercise of exercises) {
            const { id, gif_url } = exercise;
            if (gif_url) {
              const fileUri = await fetchGif(gif_url, id);
              console.log(0);
              mmkvStorage.set(id, fileUri); // Store URI in MMKV with exercise ID as key
              gifsToCache[id] = fileUri;
            }
          }

          set({ gifs: gifsToCache, ready: true });
        } catch (error) {
          console.error("Error fetching and storing GIFs:", error);
        }
      },
      getGifUriById: (id) => mmkvStorage.getString(id) || undefined,
      getAllGifs: () => get().gifs,
    }),
    {
      name: "gif-storage",
      storage: createJSONStorage(() => zustandMMKVStorage),
    },
  ),
);

export default useGifStore;
