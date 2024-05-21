import { create } from "zustand";
import type { Exercise, ExerciseStore } from "@/types/exercises";

const useExerciseStore = create<ExerciseStore>((set) => ({
  exercises: [
    {
      id: 1,
      name: "Arnold press",
      sets_completed: 3,
      total_sets: 5,
      status: "Completed",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/dumbbell_arnold_press.gif",
      // gif_path: "@/assets/test-data/dumbbell_arnold_press.gif",
    },
    {
      id: 2,
      name: "Assisted dips",
      sets_completed: 0,
      total_sets: 5,
      status: "Completed",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/assisted_triceps_dip_(kneeling)_no_bg.gif",
    },
    {
      id: 3,
      name: "Behind neck lat pulldowns",
      sets_completed: 0,
      total_sets: 5,
      status: "Pending",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/cable_wide_grip_rear_pulldown_behind_neck_no_bg.gif",
    },
    {
      id: 4,
      name: "Arnold press",
      sets_completed: 0,
      total_sets: 5,
      status: "Pending",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/dumbbell_arnold_press.gif",
    },
    {
      id: 5,
      name: "Calf raise",
      sets_completed: 0,
      total_sets: 5,
      status: "Pending",
      gif_path:
        "https://olqyqpzmvfzjxnozlthv.supabase.co/storage/v1/object/public/gifs/bodyweight_standing_calf_raise_no_bg.gif",
    },
  ] as Exercise[],
  setExercises: (exercises: Exercise[]) => set({ exercises }),
  deleteExercise: (id: number) =>
    set((state) => ({
      exercises: state.exercises.filter((exercise) => exercise.id !== id),
    })),
}));

export default useExerciseStore;
