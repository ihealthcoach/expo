import { create } from "zustand";
import { MMKV } from "react-native-mmkv";
import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { Exercise, ExerciseSummary } from "@/types/exercises"; // Ensure you have Exercise and ExerciseSummary types defined
import { fetchExercises } from "@/utils/fetchExercises/fetchExercises";
import { zustandMMKVStorage } from "@/lib/mmkv/mmkv";

const mmkvStorage = new MMKV();

interface ExerciseStore {
  exercises: ExerciseSummary[];
  fetchExercises: () => Promise<void>;
  getExercise: (id: string) => Exercise | undefined;
  getAllExercises: () => Exercise[] | undefined;
}

export const useExerciseStore = create<
  ExerciseStore,
  [["zustand/persist", ExerciseStore]]
>(
  persist(
    (set, get) => ({
      exercises: [],
      fetchExercises: async () => {
        try {
          console.log("fetching Exercises");
          const data = await fetchExercises();
          if (data && Array.isArray(data)) {
            const summaries = data.map(
              ({ id, name, gif_url, primary_muscles }) => ({
                id,
                name,
                gif_url,
                primary_muscles,
              }),
            );
            set({ exercises: summaries });
            data.forEach((exercise) => {
              mmkvStorage.set(
                `exercise_${exercise.id}`,
                JSON.stringify(exercise),
              );
            });
          }
        } catch (error) {
          console.error("Error fetching the exercises:", error);
        }
      },
      getExercise: (id) => {
        const exerciseStr = mmkvStorage.getString(`exercise_${id}`);
        return exerciseStr ? JSON.parse(exerciseStr) : undefined;
      },
      getAllExercises: () => {
        return get()
          .exercises.map((summary) => {
            const exerciseStr = mmkvStorage.getString(`exercise_${summary.id}`);
            return exerciseStr ? JSON.parse(exerciseStr) : undefined;
          })
          .filter((exercise) => exercise !== undefined);
      },
    }),
    {
      name: "exercise-storage",
      storage: createJSONStorage(() => zustandMMKVStorage),
    },
  ),
);

export default useExerciseStore;
