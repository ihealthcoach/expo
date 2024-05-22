import { create } from "zustand";

import type { Set, ExerciseTrackingStore } from "@/types/exercise-tracking";

const useExerciseTrackingStore = create<ExerciseTrackingStore>((set) => ({
  sets: [
    {
      id: 1,
      set_number: 1,
      type: "Standard set",
      weight: 41.3,
      weight_unit: "kg",
      reps: 20,
      completed: true,
    },
    {
      id: 2,
      set_number: 2,
      type: "Standard set",
      weight: 61.3,
      weight_unit: "kg",
      reps: 12,
      completed: true,
    },
    {
      id: 3,
      set_number: 3,
      type: "Standard set",
      weight: 76.3,
      weight_unit: "kg",
      reps: 8,
      completed: true,
    },
    {
      id: 4,
      set_number: 4,
      type: "Standard set",
      weight: 91.3,
      weight_unit: "kg",
      reps: 6,
      completed: false,
    },
    {
      id: 5,
      set_number: 5,
      type: "Standard set",
      weight: 16000.3,
      weight_unit: "kg",
      reps: 4,
      completed: false,
    },
  ],
  setSets: (sets: Set[]) => set({ sets }),
  addSet: (newSet: Set) => set((state) => ({ sets: [...state.sets, newSet] })),
  deleteSet: (set_number: number) =>
    set((state) => ({
      sets: state.sets.filter((set) => set.set_number !== set_number),
    })),
  updateSetCompletion: (set_number: number, completed: boolean) =>
    set((state) => ({
      sets: state.sets.map((set) =>
        set.set_number === set_number ? { ...set, completed } : set,
      ),
    })),
}));

export default useExerciseTrackingStore;
