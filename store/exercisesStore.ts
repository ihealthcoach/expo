import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";
import { Exercise } from "@/types/exercises";
import { fetchExercises } from "@/utils/fetchExercises/fetchExercises";

export interface ExerciseStore {
  exercises: Exercise[];
  fetchExercises: () => Promise<void>;
}

const useExerciseStore = create<ExerciseStore>()(
  persist(
    (set) => ({
      exercises: [],
      fetchExercises: async () => {
        try {
          console.log("fetching Exercises");
          const data = await fetchExercises();
          set({ exercises: data || [] });
        } catch (error) {
          console.error("Error fetching the exercises:", error);
        }
      },
    }),
    {
      name: "exercise-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useExerciseStore;
