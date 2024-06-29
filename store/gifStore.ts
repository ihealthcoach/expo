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

          const fetchPromises: Promise<void>[] = [];

          for (const exercise of exercises) {
            const { id, gif_url } = exercise;
            if (gif_url) {
              const fetchPromise = fetchGif(gif_url, id)
                .then((fileUri) => {
                  mmkvStorage.set(id, fileUri);
                  gifsToCache[id] = fileUri;
                })
                .catch((error) => {
                  console.error(`Error fetching GIF with ID ${id}:`, error);
                });

              fetchPromises.push(fetchPromise);
            }
          }

          await Promise.all(fetchPromises);
          // Once all promises are resolved, update the state
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
