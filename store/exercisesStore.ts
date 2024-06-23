// useExerciseStore.js
import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";
import { ExerciseStore } from "@/types/exercises";
import { fetchExercises } from "@/utils/fetchExercises/fetchExercises";

const useExerciseStore = create<ExerciseStore>()(
  persist(
    (set) => ({
      exercises: [],
      fetchExercises: async () => {
        try {
          console.log("fetchingg");
          const data = await fetchExercises();
          set({ exercises: data || [] });
        } catch (error) {
          console.error("Error fetching the exercises:", error);
        }
      },
    }),
    {
      name: "exercise-storage",
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      },
    },
  ),
);

export default useExerciseStore;
